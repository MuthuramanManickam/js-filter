// a=[1,2,3,4,5,6,7,8]

// b=[]
// var b=a.filter((e)=>{
//     if (e%2==0) {
//         b.push(e)
//     }
// })
// console.log(b)

a=[1,2,3,4,5,6,7,8]

b=[]
var b=a.filter((e)=>{
    return e%2==0 
})
console.log(b)