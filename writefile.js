const fs=require("fs")

console.log(process.argv)

const name = process.argv[2]


// function showData(n1,n2){

    // const data =  ` ${Number(n1)+Number(n2)}  \r\n `
    const data = `${name} \r\n`
    fs.writeFile("users.txt",data, (err,data)=>{
        console.log('File Written Successfull !!')
    })

// }
// showData(num1,num2)

