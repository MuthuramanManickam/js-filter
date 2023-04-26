a=['malayalam','madam','dad','muthu','ram']
// b={}
function fname(array) {
    
    return array.filter(e=> e.split('').reverse().join(''))

}
console.log(fname(a))