module.exports = function(sequelize, DataTypes) {
  var Jon = sequelize.define("Jon", {
    locationName: DataTypes.STRING,

    address: DataTypes.STRING,

    rating: DataTypes.INTEGER,

    cleanlinessRating: DataTypes.INTEGER,

    genderNeutral: DataTypes.BOOLEAN,

    handicap: DataTypes.BOOLEAN,

    multiPly: DataTypes.BOOLEAN,

    alwaysOpen: DataTypes.BOOLEAN,

    mChanging: DataTypes.BOOLEAN,

    fChanging: DataTypes.BOOLEAN,

    airDryer: DataTypes.BOOLEAN,

    itsLit: DataTypes.BOOLEAN,

    feminineProducts: DataTypes.BOOLEAN,
  });
  return Jon;
};
