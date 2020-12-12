const excel = extendContent(UnitType, "excelsus", {});
const excel2 = extendContent(UnitType, "excelsus2", {});
const emper = extendContent(UnitType, "emperor", {});
emper.abilities.add(
	UnitSpawnAbility(UnitTypes.flare, 400, 65, -50)
);
excel.constructor = () => {
    const unit = extend(UnitEntity, {});
    return unit;
};
excel2.constructor = () => {
    const unit = extend(UnitEntity, {});
    return unit;
};
emper.constructor = () => {
    const unit = extend(UnitEntity, {});
    return unit;
};

