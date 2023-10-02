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
  visitCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  lastVisit:{
    type: DataTypes.DATE,
    allowNull: true
  }
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
})
UrlMap.belongsTo(User);

(async () => {
  await sq.sync();
})();

module.exports = {UrlMap, User};