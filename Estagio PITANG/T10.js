let M1 = []
let M2 = []
for (let x = 1; x <= 3; x++) {
    for (let z = 1; z <= 3; z++) {
        M1[x,z] = x + (2 * z)
    }
}
for (let x = 1; x <= 3; x++) {
    for (let z = 1; z <= 3; z++) {
        M2[x,z] = M1[z,x]
    }
}

  // if (M1[x, z] = M2[x, z]) {
  //   console.log("A");
  // }
  // if (M1[x, z] = 2 * M2[x, z]) {
  //   console.log("B");
  // }
  // if (M2[x, z] = 2 * M1[x, z]) {
  //   console.log("C");
  // }
  // if (M1[x, x] = M2[x, x]) {
  //   console.log("D");
  // }
  // if (M2[x, z] = 3 * M1[x, z]) {
  //   console.log("E");
  // }
 
console.log(M1[2,2] + M2[3,3]);
console.log(M1[2,2], M2[3,3]);

// function verifica(x,z){
//   if (M1[x, z] = M2[x, z]) {
//     console.log("A");
//   }
//   if (M1[x, z] = 2 * M2[x, z]) {
//     console.log("B");
//   }
//   if (M2[x, z] = 2 * M1[x, z]) {
//     return console.log("C");
//   }
//   if (M1[x, x] = M2[x, x]) {
//     console.log("D");
//   }
//   if (M2[x, z] = 3 * M1[x, z]) {
//     console.log("E");
//   }
//  }
// verifica(2, 3)