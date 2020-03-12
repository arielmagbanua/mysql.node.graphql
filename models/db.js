const Sequelize = require('sequelize');
const sequelize = new Sequelize('zest', 'homestead', 'secret', {
  host: '192.168.10.10',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

exports.sequelize = sequelize;
exports.Sequelize = Sequelize;

exports.notNullStringType = {
  type: Sequelize.STRING,
  allowNull: false,
  defaultValue: '',
};

exports.allowNullStringType = {
  type: Sequelize.STRING,
  allowNull: true,
  defaultValue: '',
};

exports.textType = {
  type: Sequelize.TEXT,
  allowNull: true,
  defaultValue: '',
};

exports.decimalType = {
  type: Sequelize.DECIMAL,
  allowNull: false,
  defaultValue: 0.00,
};

exports.tinyIntType = {
  type: Sequelize.TINYINT,
  allowNull: false,
  defaultValue: 0,
};

exports.charType = {
  type: Sequelize.CHAR,
  allowNull: false,
  defaultValue: null,
};

exports.nowTimestampType = {
  type: Sequelize.TIME,
  allowNull: false,
  defaultValue: Sequelize.NOW,
};

exports.emptyIntegerType = {
  type: Sequelize.INTEGER,
  allowNull: false,
  defaultValue: -1,
};
