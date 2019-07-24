// 2層のネットワーク

let a = [1, 1], b = [1, 1];
let D = [1, -1, 2];

let LOOP = 10000 ;
let ALPHA = 0.0001;

// 教師データ
function t(x){
    return 5*x + 3;
}
// 活性化関数
function f(x){
    return x;
}

function df(x){
    return 1;
}

// 入力と重みの計算
function u(x,i){
    return a[i]*x + b[i];
}

function y(u){
    return f(u);
}

for(let l = 0; l < LOOP; l++){
    let da1 = 0, da2 = 0, db1 = 0,  db2 = 0;
    for(let d of D){
        // 1回目
        //console.log(d);
        let uu = u(d,0);  // 入力と重みの計算
        let yy = y(uu); // 活性化関数
        
        // // 2回目
        let uu2 = u(yy,1)
        let yy2 = y(uu2)

        // loop化
        // let nx = d;
        // let nu;
        // let h;
        // for(let layer = 0; layer < a.length; layer++){
        //     nu = u(nx, layer);
        //     nx = y(nu);
        // }
        // let ny = nx;
        

//        let pa1 = (u(yy,1) - t(d)) * df(uu) * d;
        let pa1 = (yy2 - t(d)) * df(uu2) * a[1] * df(uu) * d;
        let pa2 = (yy2 - t(d)) * df(uu2) * yy;
        let pb1 = (yy2 - t(d)) * df(uu) * a[1] *df(uu) * 1;
        let pb2 = (yy2 - t(d)) * df(uu2);
        
        da1 += pa1;
        da2 += pa2;
        db1 += pb1;
        db2 += pb2;
        //console.log(da1,db1,pa1,pb1);
    }
    a[0] -= ALPHA * da1;
    b[0] -= ALPHA * db1;
    a[1] -= ALPHA * da2;
    b[1] -= ALPHA * db2;
}
console.log(a[0]*a[1], a[1]*b[0]+b[1]);

