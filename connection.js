const mysql = require("mysql")
const con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "vivek_rt",
    port:3307
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connection created..!!");
});

module.exports.con = con;
// const {createPool}=require('mysql')
// const pool=createPool({
//     host:"localhost",
//     user:"root",
//     password:" ",
//     connectionLimit:10
// })

// pool.query(`select * FROM vivek_shop.restu`,(err,res)=>{
//     return console.log(res)
// })