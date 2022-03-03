'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const DataOrigin = app.model.define('data_origin', {
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
    data: {
      type: app.Sequelize.TEXT,
      allowNull: false,
      get() {
        const v = this.getDataValue('data');
        return v ? JSON.parse(v) : null;
      },
      set(value) {
        return this.setDataValue('data', JSON.stringify(value));
      },

    },
    created_at: DATE,
    updated_at: DATE,
  });
  DataOrigin.associate = function() {
  };
  DataOrigin.findByIdWithUser = async function(id, userId) {
    return await this.findOne({
      where: { id, user_id: userId },
    });
  };
  return DataOrigin;
};
