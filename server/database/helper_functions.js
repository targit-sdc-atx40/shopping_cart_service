const { client } = require('./db_config.js');

const getAllItems = (callback) => {
  client.query('SELECT * FROM inventory_items WHERE quantity > 0 ORDER BY datecreated desc', (err, data)=>{
    if (err){
      callback('Error! Unable to get data: ', err)
    }
    else {
      callback(null, data)
    }
  })
}

const updateItemQuantity = (sku, quantity, callback) => {
  console.log('QUANTITY: ', quantity)
  client.query(
    `UPDATE inventory_items SET datecreated = NOW() WHERE sku = ${sku} and quantity = 0;
     UPDATE inventory_items SET quantity = ${quantity === undefined ? `quantity+1 WHERE sku = ${sku} and quantity < 10` : quantity `WHERE sku = ${sku}`};`
    , (err, data)=>{
    if (err){
      callback(err)
    }
    else {
      callback(null, data)
    }
  })
}

const updateAll = (quantity, callback) => {
  console.log('QUANTITY: ', quantity)
  client.query(
     `UPDATE inventory_items SET quantity = 0`
    , (err, data)=>{
    if (err){
      callback(err)
    }
    else {
      callback(null, data)
    }
  })
}

updateAll(0, console.log)


module.exports = { getAllItems, updateItemQuantity };