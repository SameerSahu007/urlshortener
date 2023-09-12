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

(async () => {
  await sq.sync();
})();

module.exports = UrlMap;