'use strict';

exports.sequelize = {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  database: 'icon-blog',
  username: 'root',
  password: 'root',
  define: {
    timestamps: true,
    // timestamps: false,
    paranoid: false,
    freezeTableName: true,
    underscored: false,
    createdAt: 'created_at', // 自定义字段名，默认为'createdAt'，将其改为'created_at'
    updatedAt: 'updated_at',
  },
  timezone: '+8:00',
  dialectOptions: {
    dateStrings: true,
    typeCast(field, next) {
      if (field.type === 'DATETIME') {
        return field.string();
      }
      return next();
    },
  },
};

const host_v1 = 'http://127.0.0.1:7001';

exports.host = {
  v1: host_v1,
};

exports.apiHost = {
  v1: `${host_v1}/api`,
};
