const users = require('./users'); // define users
const kategori= require('./kategori');
const buku= require('./buku');
const orders = require('./orders');
const orders_detail = require('./orders_detail');

buku.belongsTo(kategori, { foreignKey: 'kategori_id', as:'kategori' });
kategori.hasMany(buku, { foreignKey: 'kategori_id', as:'buku' });

orders.hasMany(orders_detail, { foreignKey: 'orders_id', as:'orders_detail' });
orders_detail.belongsTo(orders, { foreignKey: 'orders_id', as:'orders' });
users.hasMany(orders, { foreignKey: 'user_id', as: 'orders' });
orders.belongsTo(users, { foreignKey: 'user_id', as:'customers_detail' });

module.exports = {
    users, // export users
    kategori,
    buku,
    orders,
    orders_detail,
}