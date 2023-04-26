array=[
    {name:'muthu',hobbies:['swiming','cricket','games']},
    {name:'thangam',hobbies:['sing','cricket','games']},
    {name:'aravind',hobbies:['swiming','movies']},
    {name:'ponni',hobbies:['cricket','games']}
]
function fname(arr,hobby){
    return arr.filter(e=> e.hobbies.includes(hobby));
}
console.log(fname(array,'cricket'));
