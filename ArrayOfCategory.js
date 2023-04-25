a=[
    {id:1,name:'muthuraman',category:'bca'},
    {id:2,name:'maruthu',category:'it'},
    {id:4,name:'sarvana',category:'it'},
    {id:6,name:'madhavan',category:'bio'},
    {id:8,name:'thangam',category:'bsc'},
    {id:3,name:'Aarthi',category:'mba'}
]

let output  = {}
b=a.filter(e=>{
  if (!(e.category in output)) {
    output[e.category] = [];
  }  
  output[e.category].push(e);
})
console.log(output)