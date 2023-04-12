// console.log(global)

// const os = require('os')
// const math = require('./math')////Importing File

// console.log(math.add(2,5))
// // console.log(os.type())
// // console.log(os.version())
// // console.log(os.homedir())

// console.log(__dirname)


/**
 * 
 * File System in Node JS
 */


// const fs = require('fs')
// fs.readFile('./text.txt','utf8', (err,data)=> {
//     if (err) throw err
//     console.log(data)
// })

// //////////////////////////////////////////////////////////////////////////////////
// const fs = require('fs')
// const path = require('path')

// fs.readFile(path.join(__dirname,'text.txt'),'utf8', (err,data)=> {
//     if (err) throw err
//     console.log(data)
    
// fs.writeFile(path.join(__dirname, 'createdfile.txt'),'This file is created by Node js ', (err) => {
//     if (err) throw err
//     console.log("file created")
//     fs.appendFile(path.join(__dirname, 'createdfile.txt'), "This is Modified", (err) => {
//         if(err) throw err
//     }) 
// })
    
// })

// console.log("Helo....")





/**
 * 
 * Event Emitter
*/

// const { format } = require('date-fns')
// const { v4: uuid }=require('uuid')





/**
 * 
 * Creating a server
 */
const http=require('http')
const fs = require('fs');
const path = require('path')
const fsPromise=require('fs').promises

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
    console.log(req.url,req.method)
})


server.listen(PORT, () => {
    console.log("Server Running ")
})