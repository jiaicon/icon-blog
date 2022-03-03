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
    return this.ctx.model.Tag.findAndCountAll(options);
  }

  async find(id) {
    const tag = await this.ctx.model.Tag.findByPk(id, {
      include: [{
        model: this.ctx.model.User,
        as: 'user',
        attributes: [ 'id', 'userName' ],
      }],
    });
    if (!tag) {
      this.ctx.throw(404, 'tag not found');
    }
    return tag;
  }

  async create(tag) {
    return this.ctx.model.Tag.create(tag);
  }

  async update({ id, updates }) {
    const tag = await this.ctx.model.Tag.findByPk(id);
    if (!tag) this.ctx.throw(404, 'tag not found');
    return tag.update(updates);
  }

  async destroy({ id }) {
    const tag = await this.ctx.model.Tag.findByPk(id);
    if (!tag) this.ctx.throw(404, 'tag not found');
    return tag.destroy();
  }
}

module.exports = UserService;
