const bigLancerChargeBegin = new Effect(70, e => {
    Draw.color(Color.blue);
    Fill.circle(e.x, e.y, e.fin() * 8);
    
    Draw.color(Color.white);
    Fill.circle(e.x, e.y, e.fin() * 6);
});

const bigLancerTrail = new Effect(20, e => {
	Draw.color(Color.blue, Color.white, e.fin());	Fill.square(e.x, e.y, 0.1 + e.fout() * 2.8, 45);
});

const bigLancerTrailWhite = new Effect(20, e => {
	Draw.color(Color.white, Color.blue, e.fin());
	Fill.square(e.x, e.y, 0.1 + e.fout() * 2.8, 45);
});

const bigLancerCharge = new Effect(70, e => {
    Draw.color(Color.blue, Color.white, e.fin());
	Lines.stroke(e.fin() * 6);
	Lines.circle(e.x, e.y, e.fout() * 120)
	Draw.color();
});

const bigLacerShoot = new Effect(30, e => {
	Draw.color(Color.blue, Color.white, e.fin());
	Lines.stroke(e.fout() * 4);
	Lines.circle(e.x, e.y, e.fin() * 50);
	Draw.color();
});

const smallLancerbul = extend(ArtilleryBulletType, {
	load(){	
        this.backRegion = Core.atlas.find("vanilla-upgraded-bullet-explo-back");
    	this.frontRegion = Core.atlas.find("vanilla-upgraded-bullet-explo"); 	
    },
	draw(b){
		Draw.color(Color.blue, Color.white, b.fin());
		Fill.circle(b.x, b.y, 3);
		Draw.color();
	},
	update(b){
		Effect.create(Fx.none, b.x, b.y, 0, Color.white, null);
	},
	hit(b, hitx, hity){
		const vec = new Vec2();
		if(hitx != null && hity != null){
			Effect.create(this.hitEffect, hitx, hity, 0, Color.white, null);
			Sounds.spark.at(b);
			for (var i = 0; i <= 2; i++){
				Lightning.create(b.team, Color.blue, 15, b.x, b.y, b.rotation() + Mathf.range(46.0), Mathf.random(5, 16));
			}
		}
	},
	despawned(b){
		for (var i = 0; i <= 2; i++){
			const vec = new Vec2();
			Sounds.spark.at(b);
			Lightning.create(b.team, Color.blue, 15, b.x, b.y, b.rotation() + Mathf.range(46.0), Mathf.random(5, 16));
		}
	}
});
smallLancerbul.damage = 120;
smallLancerbul.lifetime = 250;
smallLancerbul.keepVelocity = false;
smallLancerbul.hitEffect = Fx.flakExplosion;
smallLancerbul.frontColor = Color.blue;
smallLancerbul.backColor = Color.valueOf("00008bff");
smallLancerbul.speed = 4;
smallLancerbul.despawnedEffect = Fx.flakExplosion;
smallLancerbul.drag = 0.042;
smallLancerbul.pierce = false;
