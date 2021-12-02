const fs = require("fs")
const os = require("os")

const name = process.argv[2]

// const data = `${name} \r\n`
const data = `${name} ${os.EOL}`

fs.appendFile("users.txt",data, (err,data)=>{
    console.log("Append To File Successfull !!")
})

