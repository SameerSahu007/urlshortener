const sq = require("../config/db");
const { DataTypes } = require("sequelize");

const UrlMap = sq.define("url", {
  encodedString: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

const User =  sq.define("user", {
  email :{
    type: DataTypes.STRING, 
    allowNull: false, 
    primaryKey: true, 
  },
  password: {
    type:DataTypes.STRING,
    allowNull: false,
  }
});

User.hasMany(UrlMap, {
  onDelete: 'CASCADE',
  foreignKey: 'urlId',
  type: DataTypes.UUID,
})
UrlMap.belongsTo(User);

(async () => {
  await sq.sync();
})();

module.exports = {UrlMap, User};