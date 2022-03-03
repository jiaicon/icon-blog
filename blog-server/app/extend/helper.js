'use strict';

module.exports = {
  parseInt(string) {
    if (typeof string === 'number') return string;
    if (!string) return string;
    return parseInt(string) || 0;
  },
  async User() {
    const { ctx } = this;
    const token = await ctx.session.token;
    if (token) {
      return await ctx.session.user;
    }
    return null;
  },
  random(n, m, fixed = 0) {
    return (Math.random() * (m - n) + n).toFixed(fixed) / 1;
  },
};
