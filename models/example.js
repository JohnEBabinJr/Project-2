module.exports = function (sequelize, DataTypes) {
  var bathrooms = sequelize.define("bathrooms", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return bathrooms;
};