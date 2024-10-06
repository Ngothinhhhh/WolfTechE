const a = [
    {name : "thinh" , phone : "0969"},
    {name : "quan" , phone :"1234"}
]
// adđ attribute to object array
a[0]['sdt'] = 1221
a.length = 0 
console.log(a);


let letter = ["a" ,"b"]

letter.push(function () {
    alert(this)  
})
letter[2]()

console.log(letter);