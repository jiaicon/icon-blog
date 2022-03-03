'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const Article = app.model.define('article', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    user_id: INTEGER,
    title: STRING,
    content: STRING,
    cover: STRING,
    status: STRING,
    created_at: DATE,
    updated_at: DATE,
  });
  Article.associate = function() {
    app.model.Article.belongsTo(app.model.Article, { as: 'user', foreignKey: 'user_id' });
  };

  Article.findByIdWithUser = async function(id, userId) {
    return await this.findOne({
      where: { id, user_id: userId },
    });
  };
  return Article;
};
