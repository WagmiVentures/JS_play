let f_older = 0;
let f_old = 1;
let n = 10;

for (i=2; i<=n; i++){
    let f_new = f_old + f_older;
    f_older = f_old;
    f_old = f_new;
    console.log(f_new);
}