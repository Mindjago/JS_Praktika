// Ciklai 1 uzd
function sayOne() {
    for (let i = 0; i < 5; i++)
        console.log("Labas");
};

// Ciklai 2 uzd
function sayTwo() {
    for (let i = 0; i < 5; i++)
        console.log(i);
};

// Ciklai 3 uzd
function sayThree() {
    for (let i = 0; i < 50; i += 10)
        console.log(i);
};
// Ciklai 4 uzd
function sayFour() {
    for (let i = 49; i < 54; i++)
        console.log(i);
};

// Ciklai 5 uzd
function sayFife() {
    for (let i = 4; i >= 0; i--)
        console.log(i);
};
// Ciklai 6 uzd
function Six() {
    for (let i = 0; i < 5; i++)
        console.log(Math.floor(Math.random(i) * 11));
};
// Ciklai 7 uzd
function Seven() {
    let x = 0;
    while (x !== 5) {
        x = Math.floor(Math.random() * 11);
        console.log(x);
    }
};
// Ciklai 8 uzd
function Eight() {
    let sum = 0;
    while (sum < 100) {
        let x = Math.round(Math.random() * 11);
        sum = x + sum;
        console.log(x);
    }
    console.log(sum);
};
// Ciklai 9 uzd
function Nine() {
    let x = 0;
    while ((x !== 7) && (x !== 5)) {
        x = Math.floor(Math.random() * 11)
        console.log(x);
        count++;
    }
    console.log("Ciklu sk. "+count);
};
// Ciklai 10 uzd
function Ten() {
    let n=10
    for (let i=1; i<=n; i++){
        console.log(i+" Cm yra "+i/2.54+" col");
    }
    for (let i=1; i<=n; i++){
        console.log(i+" Col yra "+i*2.54+" cm");
    }
};
// Ciklai 11 uzd
function Eleven() {
    let n = 5;
    let p = 0.02;
    let ind = 100;
    for (let i=1; i<=n; i++){
        let x=(1+p);
        let FV=Math.round((ind*(Math.pow(x,i)))*100)/100;
        let pal=Math.round((FV-ind)*100)/100;
        console.log(i+" Metai, "+pal+" palukanos, "+FV+" indelis");
    }
};