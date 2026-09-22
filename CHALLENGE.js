let y=[ 10 ,50 ,70 ,60];  
let min=100000;
y.push(6)
for (let i =0 ; i<y.length ; i++){
if (min>y[i] )
    min =y[i];
}
console.log(min);