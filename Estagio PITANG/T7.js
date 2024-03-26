let a = 0, b, c = 0;
while (a<4){
    b = CALC(a)
    c = c+b;
    a = a +1;
}
console.log(c)
function CALC(a){
    if(a<1) return 0;
    if(a ==1) return 1;
    if(a>1) return a+CALC(a-1);
}