const fs = require("fs")

const name = process.argv[2]

const data = `${name} \r\n`
fs.appendFile("users.txt",data, (err,data)=>{
    console.log("Append data Successfull !!")
})

