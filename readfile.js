const fs = require("fs")

fs.readFile("./users.txt", 'utf-8', (err,data)=>{
    console.log(data)
})