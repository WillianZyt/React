
function qualquer(z, k) {
    if ((z = k) || (z = 0)) {
        return 1
    } else {
        return qualquer(z - 1, k) + qualquer(z - 1, k - 1)
    }
    console.log()
}
t = qualquer(4, 4-1)
console.log(t)



