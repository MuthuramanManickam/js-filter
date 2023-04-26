// rite a function that takes an array of objects with a nameand emailproperty and returns a new array with only 
// the objects where the email address includes a given domain. 
// Use the filtermethod to accomplish this.

a=[
    {name:'muthu',mail:'muthu15072@gmail.com'},
    {name:'ponni',mail:'ponni3487@gamil.com'},
    {name:'thangam',mail:'thangaraja345@finstein.ai'},
    {name:'saravana',mail:'sarvan143@finstein.ai'}
]
obj={}

// function fname(arr,domain) {
//     return arr.filter(e=>e.mail.includes(domain))
// }
// console.log(fname(a,'.ai'))

b=a.filter(e=>{
    return e.mail.includes('.ai')
})
console.log(b)