let a = 1, b=1;
let D = [1, -1, 2];

let LOOP = 100;
let ALPHA = 0.05;

function t(x){
    return 9*x - 22;
}

function f(x){
    return x;
}

function df(x){
    return 1;
}

function u(x){
    return a*x + b;
}

function y(u){
    return f(u);
}

for(let l = 0; l < LOOP; l++){
    let da = 0, db = 0;
    for(let d of D){
        //console.log(d);
        let uu = u(d);
        let yy = y(uu);
        let pa = (yy - t(d)) * df(uu) * d;
        let pb = (yy - t(d)) * df(uu);
        da += pa;
        db += pb;
        //console.log(da,db,pa,pb);
    }
    a -= ALPHA * da;
    b -= ALPHA * db;
}
console.log(a, b);

