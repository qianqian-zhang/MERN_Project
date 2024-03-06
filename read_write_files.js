//import the fs module

const fs = require('fs')

//the asynchronous forms of the methods always take a completion callback as the last argument. 
//For this callback, the first argument is reserved for an exception.
fs.readFile('data.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err)
        return
    }

    console.log(data)
})

console.log("this line prints first")

//write a file
const content = "this will be written in the file"

fs.writeFile('test.txt', content, (err) => {
    if(err) {
        console.error(err)
        return
    }

    console.log("successfully wrote a file")
})

fs.readFile('test.txt', 'utf-8', (err, data) => {
    if(err) {
        console.error(err)
        return
    }

    console.log(data)
})