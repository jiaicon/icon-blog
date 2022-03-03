'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const Category = app.model.define('category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    name: STRING,
    icon: STRING,
    status: STRING,
    created_at: DATE,
    updated_at: DATE,
  });
  return Category;
};
