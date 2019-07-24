// 入力が2値の1層ネットワーク
let a = [1, 1], b = 1;
let D = [[1, 2], [3, 4], [-1, 1]];

let LOOP = 10000;
let ALPHA = 0.05;

function t(x){
    return 3*x[0] -4*x[1] +10;
}

function f(x){
    return x;
}

function df(x){
    return 1;
}

function u(x){
    //return a[0]*x[0] + a[1]*x[1] + b;
    let r = 0;
    for(let idx in x){
        r += a[idx] * x[idx];
    }
    return r + b;
}

function y(u){
    return f(u);
}

for(let l = 0; l < LOOP; l++){
    let da = [0, 0], db = 0;
    for(let d of D){
        //console.log(d);
        let uu = u(d);
        let yy = y(uu);
        for(let idx in d){
            let pa = (yy - t(d)) * df(uu) * d[idx];
            da[idx] += pa;
        }
        let pb = (yy - t(d)) * df(uu);
        db += pb;
        //console.log(da,db,pb,a,b);
    }
    for(let idx in a){
        a[idx] -= ALPHA * da[idx];
    }
    b -= ALPHA * db;
}
console.log(a, b);

