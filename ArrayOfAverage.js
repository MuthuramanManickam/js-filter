array=[
    {name:'muthu',grade:[50,40,60,89,90]},
    {name:'thanagam',grade:[90,65,77,80,94]},
    {name:'aravindh',grade:[45,65,75,80,76]},
    {name:'ponni',grade:[73,64,23,43,45]},
    {name:'mauthu',grade:[20,67,90,76,43]},
]

// function  fname(arr,averageGrade){
//    return arr.filter(e=>{
//         ave=e.grade.reduce((sum,grade) => sum+grade,0)/e.grade.length;
//         return ave>averageGrade
//     })
// }
// filtave=fname(array,68);
// console.log(filtave)

function fname(arr,minAve){
    return arr.filter(e=>{
        sum=0;
        for(i=0;i<e.grade.length;i++){
            sum=sum+e.grade[i]
        }
        average=sum/e.grade.length
        return average>minAve
    })
}
a=fname(array,70)
console.log(a)