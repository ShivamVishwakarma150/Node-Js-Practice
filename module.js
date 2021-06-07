

// immediately invoke function
// (function(exports,module,__dirname,__filename){
    
// //npm module

// // const color=require('cli-color')


//     var age = 21;

//     comsole.log(name)

// })('Shivam')

// NPM module 
// const color=require('cli-color')

// console.log(color.yellow('Hello nodejs'))

//Locale module

// const auth=require('./auth')

// auth.register('ShivamVishwakarma')
// auth.login('ShivamVishwakarma','secret')


// Core Modules (Inbuilt modules)

// Core modules
const path = require('path')


// dirname 

// console.log('Folder name: ', path.dirname(__filename))


// filename 

// console.log('Folder name: ', path.basename(__filename))


// Extension

// console.log('Ext name: ', path.extname(__filename))


// parse 

// console.log('Parse : ', path.parse(__filename))


// Join 

// console.log('Join : ', path.join(__dirname, 'order', 'app.js'))




//File System Modules

const fs = require('fs')
const { errorMonitor } = require('events')

//Make a Directory

// fs.mkdir(path.join(__dirname,'/test'), (err)=>{
//     if(err){
//         console.log('Something Went Wrong')
//         return
//     }
//     console.log('Folder Created...')
// })

//Create a File

// fs.writeFile(path.join(__dirname,'test','test.txt'),
// 'Hello Node\n',(err)=>{
//     if(err)
//     {
//         throw err
//     }
//     fs.appendFile(path.join(__dirname,'test','test.txt'), 'More Data',(err)=>{
//         if(err)
//         {
//             throw err
//         }
//         console.log('Data Added')

//     })
//     console.log('File Created')

// })



// //Read a File

// fs.readFile(path.join(__dirname,'test','test.txt'),'utf-8',(err,data)=>{
//     if(err)
//     {
//         throw error
//     }
//     // const content= Buffer.from(data)


//     // console.log(content.toString())
    
    
//     console.log(data)

// })

// Os module 
const os = require('os')

// console.log('Os type: ', os.type())

// console.log('Os platform: ', os.platform()) 

// console.log('Cpu architecture: ', os.arch())

// console.log('Cpu details: ', os.cpus())

// console.log('Free memory : ', os.freemem())

// console.log('Total memory : ', os.totalmem())

// console.log('Uptime : ', os.uptime())


// Events module  
const Emitter = require('events')

const myEmitter = new Emitter()

// myEmitter.on('somename', (data) => {
//     console.log(data)
// })

// myEmitter.emit('somename', {
//     name: 'Shivam'
// })

// class Auth extends Emitter{
//     register(username) {
//         console.log('Registered successfully...')
//         this.emit('registered', username)
//     }
// }

// const auth = new Auth()

// // Listen

// // Verify email
// auth.on('registered', (data) =>{
//     console.log(`Sending email to ${data}`)
// })

// // welcome email 
// auth.on('registered', (data) =>{
//     console.log(`Sending welcome email to ${data}`)
// })

// auth.register("Shivam")






