// const express = require('express')
// const app =express()
// const path = require('path')
// const PORT = process.env.PORT || 3000;


// app.get('/', (req, res) => {
//     // res.sendFile('./index.html',{root:__dirname}) ///one Way
//     res.sendFile(path.join(__dirname,'index.html'))
// })

// app.get('/html', (req, res,next) => {
//     console.log("attempted")
//     next()
// }, (req, res) => {
//     res.send("Hello html")
// })

////////////////////////Another way to chain function

// const one = (req, res,next) => {
//     console.log('One')
//     next()
// }
// const two = (req, res,next) => {
//     console.log('two')
//     next()
// }

// const three = (req,res) => {
//     res.send("finished...")
// }


// app.get('/chain',[one,two,three])

/////////////////////////////////////////////////////////////////////////////////////

/**
 * Middleware--------
 * 
 */

const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000;

// custom middleware
// app.use((req, res, next) => {
//     console.log(`${req.method}  ${req.path}`)
//     next()
// })

// app.use(express.static(path.join(__dirname, 'public')))

 
// app.use('/views',require('./routes/subdir'))

// app.use('/employees',require('./routes/api/employees'))



// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'))
// })


app.use('/employees',require('./routes/api/employees'))

app.listen(PORT, () => {
    console.log(`Server Running At PORT ${PORT}`)
})


