// May cause some seizures so don't use if your epileptic
var rubyTurret = ["ff0000", "dc143c", "000000"];
const benefactorShotEffect = new Effect(120, e => {
Draw.color(Color.valueOf(rubyTurret[Mathf.floorPositive(Time.time % 10 / 2)])); 
    Lines.line(
        e.x + e.fout() * -10,
        e.y + e.fout() * -10,
        e.x + e.fout() * 10,
        e.y + e.fout() * 10
    );
    Lines.line(
        e.x + e.fout() * -10,
        e.y + e.fout() *  10,
        e.x + e.fout() * 10,
        e.y + e.fout() * -10
    );
    Lines.circle(e.x, e.y, e.fout() * 20);
    Timer.schedule(() => {
    }, 5);
});
