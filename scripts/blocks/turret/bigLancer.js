const bigLancerChargeBegin = new Effect(70, e => {
    Draw.color(Color.blue);
    Fill.circle(e.x, e.y, e.fin() * 8);
    
    Draw.color(Color.white);
    Fill.circle(e.x, e.y, e.fin() * 6);
});

const biLancerTrail = new Effect(20, e => {
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
