let z, b, a = 0;
let veet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (z = 1; z <= 14; z++) {
    b = z + 1;
    veet[z] = b + (3 * z);
    if (z > 0) {
        if (veet[b] < veet[z]) {
            a = a + 2;
        } else {
            a = a - 1;
        }
    }
}
if (veet[5] > veet[10]){
    for(z = 5; z <= 15; z++){
        veet[z] = veet[z] + 1
    }
} else{
    for(z = 1; z <= 10; z++){
        veet[z] = veet[z] - 2;
    }
}
console.log(veet[5])