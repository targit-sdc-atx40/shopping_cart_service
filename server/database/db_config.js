// const { Client } = require('pg')
// const client = new Client({
//   database: 'inventory'
// })

// client.connect();

// module.exports = { client };

const { Client } = require('pg')
const client = new Client({
  host: 'targit-cart.cttz70y892d2.us-east-2.rds.amazonaws.com',
  port: 5432,
  user: 'drewdistefano',
  database: 'postgres',
  password: 'password'
})

client.connect((err, data)=>{
  if (err){
    console.log('error connecting to db:', err)
  }
  else {
    console.log('success, connected to db!')
  }
});

module.exports = { client };