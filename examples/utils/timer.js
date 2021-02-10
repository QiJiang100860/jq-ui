// export default function timer(){
//     var time = 0
//     var loop = null

//     var clear = function(){
//         if(loop){
//             clearInterval(loop)
//             loop = null
//         }
//     }

//     this.start = function(){
//         loop = setInterval(function(){
//             ++time
//             console.log(time)
//         },1000)
//     }

//     this.stop = function(){
//         clear()
//     }

//     this.reset = function(){
//         time = 0
//         clear()
//     }
// }


console.log('start')

setImmediate(() => {
    console.log('timer4')
    Promise.resolve().then(function () {
        console.log('promise4')
    })
})

Promise.resolve().then(function () {
    console.log('promise3')
})


setTimeout(() => {
    console.log('timer1')
    Promise.resolve().then(function () {
        console.log('promise1')
    })
}, 0)
setTimeout(() => {
    console.log('timer2')
    Promise.resolve().then(function () {
        console.log('promise2')
    })
}, 0)



console.log('end')