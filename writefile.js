const fs=require("fs")
const os = require("os")
console.log(process.argv)

const name = process.argv[2]

// function showData(n1,n2){

    // const data =  ` ${Number(n1)+Number(n2)}  \r\n `
    // const data = `${name} \r\n`
    const data = `${name} ${os.EOL}`

    fs.writeFile("users.txt",data, (err,data)=>{
        console.log('Write To File Successfull !!')
    })

// }
// showData(num1,num2)

