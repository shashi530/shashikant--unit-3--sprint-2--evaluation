
let count=0;

let m=document.getElementById('container');
function cart(){
    count++;
    let mycount = JSON.stringify(count);

    console.log(mycount);

    var carts = document.createElement('div');
    carts.innerHTML=mycount;

    m.append(carts);

}