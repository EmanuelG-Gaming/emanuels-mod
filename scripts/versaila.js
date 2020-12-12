//planet Versaila
const versailagen = extend(SerpuloPlanetGenerator, {});
versailagen.dec = ObjectMap.of(Blocks.grass, Blocks.dirt, Blocks.grass, Blocks.dirt, Blocks.water, Blocks.water, Blocks.darksandWater, Blocks.darksandWater);
versaila.tars = ObjectMap.of(Blocks.grass, Blocks.shale, Blocks.dirt, Blocks.shale);
const versaila = new JavaAdapter(Planet, {}, "versaila", Planets.sun, 3, 0.9);
versaila.generator = versailagen;
versaila.startSector = 1;
versaila.hasAtmosphere = true;
versaila.atmosphereColor = Color.valueOf("0000ff");
versaila.meshLoader = function(){
  return new HexMesh(versaila, 7);
};
//end planet Versaila
//Versaila sector presets
const gr1 = new JavaAdapter(SectorPreset, {}, "launch-receive", Versaila, 1);
gr1.captureWave = 31;
//end Versaila sector presets
