require('units');
require('blocks');
require('main);

const omegaTerro = extendContent(UnitType, "omegaTerror", {});
omegaTerro.constructor = () => extend(LegsUnit, {
  killed(){
    print("you are like an ant trying to carry the whole universe!!!");
    this.dead = false;
  } 
const terro = extendContent(UnitType, "terror", {});
terro.constructor = () => extend(FlyingUnit, {
  killed(){
    this.super$killed();
    print("[red]youre gonna pay for this!!!");
    omegaTerro.spawn( Team.crux, this.x, this.y);
  }
});
