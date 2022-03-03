/**
 * Created by icon on 2021/6/1
 */
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
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
    return this.ctx.model.Category.findAndCountAll(options);
  }

  async find(id) {
    const category = await this.ctx.model.Category.findByPk(id, {
      include: [{
        model: this.ctx.model.User,
        as: 'user',
        attributes: [ 'id', 'userName' ],
      }],
    });
    if (!category) {
      this.ctx.throw(404, 'category not found');
    }
    return category;
  }

  async create(category) {
    return this.ctx.model.Category.create(category);
  }

  async update({ id, updates }) {
    const category = await this.ctx.model.Category.findByPk(id);
    if (!category) this.ctx.throw(404, 'category not found');
    return category.update(updates);
  }

  async destroy({ id }) {
    const category = await this.ctx.model.Category.findByPk(id);
    if (!category) this.ctx.throw(404, 'category not found');
    return category.destroy();
  }
}

module.exports = UserService;
