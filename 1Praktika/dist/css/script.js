// // Pirmas
// let skaicius = 20;

// if (skaicius>=20) {
//     console.log ("Geras");
// } else {
//     console.log ("Blogas");
// }
// // Antra
// let spalvos = 2;

// if (spalvos==1) {
//     console.log ("Zalia");
// } else if (spalvos==2) {
//     console.log ("Geltona.Palaukite");
// } else if (spalvos==3) {
//     console.log ("Raudona");
// } else {
//     console.log ("netinkamas skaicius")
// }

// // trecia
// let dezes = 3;
// let knygos = 18;
// let talpa = 5;
// let max = talpa*dezes;

// if (max>=knygos) {
//     console.log ("Knygos telpa i dezes");
// } else {
//     console.log ("Knygos netelpa i dezes");
// }

// // ketvrirta
// let sk= 1221;
// let s4= sk % 10;
// let s3= Math.floor(sk / 10) % 10;
// let s2= Math.floor(sk / 100) % 10;
// let s1= Math.floor(sk / 1000);

// if (s1==s4) {
//     if (s2==s3){
//     console.log ("Skaicius polindromas");} 
//     else {
//     console.log ("neteisinga");
// }}

// Penkta

// let bil=222442;
// let b6= bil % 10;
// let b5= Math.floor(bil/10) % 10; 
// let b4= Math.floor(bil/100) % 10; 
// let b3= Math.floor(bil/1000) % 10; 
// let b2= Math.floor(bil/10000) % 10; 
// let b1= Math.floor(bil/100000);
// let bilsum=b1+b2+b3+b4+b5+b6;

// if (bilsum % 4 == 0) {
//     console.log ("laimingas");
// } else {
//     console.log ("nelaimingas");
// }

// Sesta
let metai = 2000;
let m4 = metai % 10;

if (metai % 4 == 0 && metai % 100 != 0) {
    console.log ("keliamieji")
} else {
    console.log ("nekeliamieji")
}
// Septinta
let s= 12331;
let s5= s % 10;
let s4=Math.floor (s/10) % 10;
let s3=Math.floor (s/100) % 10;
let s2=Math.floor (s/1000) % 10;
let s1=Math.floor (s/10000);

if (s1==s5 && s2==s4) {
    console.log ("polindromas");
} else {
    console.log ("nepolindromas");
}

// Astunta
let k=6;

if (k % 2 == 0) {
    console.log ("tvarko vyresnelis")
} else {
    console.log ("tvarko jaunelis")
}

// Devinta
let p1= 5;
let p2= 8;
let p3= 9;

if (p1>p2 && p1>p3) {
    console.log ("p1 daugiausia");
} else if (p2>p1 && p2>p3) {
    console.log ("p2 daugiausia");
} else if (p3>p2 && p3>p1) {
    console.log ("p3 daugiausia");
} else {
    console.log ("nera daugiausiai");
}

// Desimta
let day= 30;
let day2= 31;
let day3= 28;
let men=3;

if (men == 2){
    console.log(day3);
} else if (men % 2 == 0) {
    console.log (day);
} else {
    console.log (day2);
}