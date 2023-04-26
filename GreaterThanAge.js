array=[
    {name:'muthu',age:18},
    {name:'thangam',age:21},
    {name:'aravind',age:24},
    {name:'ponni',age:24},
    {name:'maruthu',age:26},
    {name:'sarvan',age:16},
]

amt=20
b=array.filter(e=>{
    return e.age>amt
})
console.log(b)