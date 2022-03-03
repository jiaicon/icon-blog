/**
 * Created by icon on 2021/6/1
 */
'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  async list({ offset = 0, limit = 10, user_id, status }) {
    const options = {
      offset,
      limit,
      attributes: [ 'id', 'name', 'user_id', 'created_at', 'updated_at' ],
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    };
    const where = {};
    if (user_id) {
      Object.assign(where, { user_id });
    }
    if (status) {
      Object.assign(where, { status });
    }
    options.where = where;
    return this.ctx.model.Article.findAndCountAll(options);
  }

  async find(id) {
    const article = await this.ctx.model.Article.findByPk(id, {
      include: [{
        model: this.ctx.model.User,
        as: 'user',
        attributes: [ 'id', 'userName' ],
      }],
    });
    if (!article) {
      this.ctx.throw(404, 'article not found');
    }
    return article;
  }

  async create(article) {
    Object.assign(article, { user_id: this.ctx.session.user.id });
    return this.ctx.model.Article.create(article);
  }

  async update({ id, updates }) {
    const article = await this.ctx.model.Article.findByIdWithUser(id, this.ctx.session.user.id);
    if (!article) this.ctx.throw(404, 'article not found');
    return article.update(updates);
  }

  async destroy({ id }) {
    const article = await this.ctx.model.Article.findByIdWithUser(id, this.ctx.session.user.id);
    if (!article) this.ctx.throw(404, 'article not found');
    return article.destroy();
  }
}

module.exports = ArticleService;
