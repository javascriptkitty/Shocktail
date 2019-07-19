module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        //        allowNull: false,
        // notEmpty: true,
        len: [1, 32]
      }
    },
    firebaseId: {
      type: DataTypes.STRING,
      validate: {
        //        allowNull: false,
        // notEmpty: true,
        len: [1, 32]
      }
    }
  });
  return User;
};
