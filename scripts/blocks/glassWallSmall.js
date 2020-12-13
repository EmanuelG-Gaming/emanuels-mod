// Glass Wall Small
const wallEffect = new Effect(60, e => {
    Draw.color(Pal.accent, Color.white, e.fslope());
    Draw.alpha(e.fout() * 0.5)
    Lines.stroke(2 * e.fslope());
    Draw.blend(Blending.additive);
    Lines.square(e.x, e.y, 5, e.fout());
    Draw.blend();
});

const wall = extendContent(Wall, "glassWallSmall", {});
wall.blockGround = BlockGroup.walls;
const wallAvoidDamage = 10;

wall.buildType = () => extendContent(Wall.WallBuild, wall, {
	collision(bullet){
		this.super$collision(bullet);
        
		if(Mathf.chance(wallAvoidDamage / 100)) {
			wallEffect.at(this.x, this.y);
			this.health += bullet.damage;
		}
		bullet.remove();
	}
});
