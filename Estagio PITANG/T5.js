let w = [2, 13, 11, 9, 7, 0];
let z = [3, 10, 11, 8, 0, 4];

let i
let x
// let U = [1, 2, 3, 4, 5, 6];
// let P = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < 6; i++) {
    if (w[i] > z[i]) {
        x = z[i];
        z[i] = w[i];
        w[i] = x;
    } else {
        w[i] = w[i] * 2;
        z[i] = z[i] * 3;
    }
}

U = 0;
P = 0;
for (let i = 0; i < 6; i++) {
    U = U + w[i];
    P = P + z[i];
    console.log(U, P);
}
