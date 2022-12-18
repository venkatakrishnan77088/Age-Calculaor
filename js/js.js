n=prompt("enter the date mm-dd-yyyy")
v= new Date()
currYear=v.getFullYear()
//console.log(cy)
const bY = new Date(n);
const year = bY.getFullYear();
//console.log(year)
age=currYear-year;
document.write(`your age is : ${age}`)
