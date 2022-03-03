'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const Column = app.model.define('column', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    user_id: INTEGER,
    name: STRING,
    icon: STRING,
    status: STRING,
    created_at: DATE,
    updated_at: DATE,
  });
  Column.associate = function() {
    app.model.Column.belongsTo(app.model.Column, { as: 'user', foreignKey: 'user_id' });
  };

  Column.findByIdWithUser = async function(id, userId) {
    return await this.findOne({
      where: { id, user_id: userId },
    });
  };
  return Column;
};
