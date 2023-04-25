let a=[
    {fname:'apple',price:400},
    {fname:'orange',price:300}, 
    {fname:'banaana',price:1000},
    {fname:'mango',price:240},
    {fname:'grap',price:700},
    {fname:'guava',price:1100},
]

var b=a.filter(e=>{
    return e.price<1000
})
console.log(b)