'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const Tag = app.model.define('tag', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    name: STRING,
    icon: STRING,
    status: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });
  Tag.associate = function() {
    app.model.Tag.belongsTo(app.model.User, { as: 'user', foreignKey: 'user_id' });
  };

  Tag.findByIdWithUser = async function(id, userId) {
    return await this.findOne({
      where: { id, user_id: userId },
    });
  };
  return Tag;
};
