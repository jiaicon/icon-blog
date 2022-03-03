'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const Dashboards = app.model.define('dashboards', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    user_id: {
      type: INTEGER,
      allowNull: false,
    },
    name: {
      type: STRING,
      unique: true,
      allowNull: false,
    },
    w: {
      type: INTEGER,
      allowNull: false,
    },
    h: {
      type: INTEGER,
      allowNull: false,
    },
    className: {
      type: STRING,
      unique: true,
    },
    brief: {
      type: STRING,
    },
    bg_img: {
      type: STRING,
    },
    bg_size: {
      type: STRING,
    },
    cover: {
      type: STRING,
    },
    position: {
      type: STRING,
    },
    bg_color: {
      type: STRING,
    },
    layouts: {
      type: app.Sequelize.TEXT,
      allowNull: false,
      get() {
        const v = this.getDataValue('layouts');
        return v ? JSON.parse(v) : null;
      },
      set(value) {
        return this.setDataValue('layouts', JSON.stringify(value));
      },

    },
    created_at: DATE,
    updated_at: DATE,
  });
  Dashboards.associate = function() {
  };
  Dashboards.findByIdWithUser = async function(id, userId) {
    return await this.findOne({
      where: { id, user_id: userId },
    });
  };
  return Dashboards;
};
