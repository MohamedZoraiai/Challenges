let tab1 = [1, 2, 3, 4, 5, 6];
let tab2 = []
for(let i=0 ; i >=tab1.length-1 ; i++){
    if(tab1%2 == 0)
        tab1=tab2
    console.log("tab2 : " + tab2)
}