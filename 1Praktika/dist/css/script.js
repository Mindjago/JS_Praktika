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
// let metai = 2000;
// let m4 = metai % 10;

// if (metai % 4 == 0 && metai % 100 != 0) {
//     console.log ("keliamieji")
// } else {
//     console.log ("nekeliamieji")
// }
// // Septinta
// let s= 12331;
// let s5= s % 10;
// let s4=Math.floor (s/10) % 10;
// let s3=Math.floor (s/100) % 10;
// let s2=Math.floor (s/1000) % 10;
// let s1=Math.floor (s/10000);

// if (s1==s5 && s2==s4) {
//     console.log ("polindromas");
// } else {
//     console.log ("nepolindromas");
// }

// // Astunta
// let k=6;

// if (k % 2 == 0) {
//     console.log ("tvarko vyresnelis")
// } else {
//     console.log ("tvarko jaunelis")
// }

// // Devinta
// let p1= 5;
// let p2= 8;
// let p3= 9;

// if (p1>p2 && p1>p3) {
//     console.log ("p1 daugiausia");
// } else if (p2>p1 && p2>p3) {
//     console.log ("p2 daugiausia");
// } else if (p3>p2 && p3>p1) {
//     console.log ("p3 daugiausia");
// } else {
//     console.log ("nera daugiausiai");
// }

// // Desimta
// let day= 30;
// let day2= 31;
// let day3= 28;
// let men=8;

// if (men == 2){
//     console.log(day3);
// } else if (men == (4||6||9||11)) {
//     console.log (day);
// } else if (men == (1||3||5||7||8||12)) {
//     console.log (day2);
// } else {
//     console.log("nera tokio men")
// }

// // Vienuolikta

// let v1 = 8;
// let m1 = 29;
// let m2 = 23;
// let v = 9;
// let m = 5;

// if (v*60+m >= m1*60+m1+m2) {
//     console.log ("Petras nepaveluos")
// }else {
//     console.log("Petras paveluos")
// }

// Dvylika
// let n = 5;

// if (n%3== 0 && n!==0) {
//     console.log ("trikampis galimas")
// } else {
//     console.log ("trikampis negalimas")
// }
// // Trylika
// let start = 1896;
// let kartotinis = 4;
// let metai = 2005;

// if ((metai-start)%4==0) {
//     console.log(((metai-start)/4)+1);
// } else {
//     console.log("metai neolimpiniai");
// }
// Keturiolikta

// let a=1;
// let b=2;
// let c=1;

// let d= (b*b)-(4*a*c);
// console.log(d);

// let spr =-b/2*a;

// let spr1 = ((-b)+Math.sqrt(d))/(2*a);
// let spr2 = ((-b)-Math.sqrt(d))/(2*a);

// if(d===0){
//     console.log ("Vienas sprendinys: "+spr);
// }else if(d>0){
//     console.log ("du sprendiniai: "+spr1+" "+spr2);
// }else {
//     console.log ("Sprendiniu nera");
// }
// Penkiolikta
// let c=70;
// let p=20;
// let k=Math.floor(c/p);
// let m=c-(p*k); 

// if (c>=p){
//     console.log("Saulius pirks "+k+" "+"porciju, liks centu "+m);
// }else{
//     console.log("Saulius nenupirks nieko");
// }

// // Sesiolikta
// let n=100;//deziu
// let m=14;//dezes telpa

// let k=Math.ceil(n/m);
// console.log(k)

// // Septyniolika
// let a=5;
// let b=6;

// if(a>b){
//     console.log("a"+(a-1),"b"+(b+1))
// }else{
//     console.log("a"+(a+1),"b"+(b-1))
// }

// // Naujas Pirmas
// let v=120;
// let n=800;

// let k=Math.ceil((v*12)/n);
// console.log(k)

// // Naujas Antras
// let n=100; //keleiviu viso
// let m=20; //ne i Vilniu keleiviai
// let v=4; //vagonu

// let k=(n-m)/v;
// console.log(k)

// // Naujas trecias
// let n=54000;//pradine kaina
// let p=60000;//nauja kaina

// let np=n*1.25
// console.log(np)

// N Ketvirtas
let n=39.2;
let m=0.4;

let sur=n+(n-m);
console.log(sur);

// N Penkta
let r=1

let sr1=Math.PI*r;
let sr2=sr1*4;
let sr3=sr2*4;

console.log(sr1+" "+sr2+" "+sr3);

// N Sesta
let sk1= 1001;
let sk2= 8001;
let sk3= 6001;
let sk4= 5001;
let sk5= 3001;
let sk6= 2001;

if(sk1<sk2 && sk2<sk3 && sk3<sk4 && sk4<sk5 && sk5<sk6){
    console.log(sk1,sk2,sk3,sk4,sk5,sk6);
}else if(sk1>sk2 && sk2<sk3 && sk3<sk4 && sk4<sk5 && sk5<sk6){
    console.log(sk1,sk2,sk3,sk4,sk5,sk6);
};
if(sk1>sk2){
    if(sk2>sk3){
        if(sk2>sk3){
            if(sk3>sk4){
                if(sk4>sk5){
                    if(sk5>sk6){
                        console.log(sk6,sk5,sk4,sk3,sk2,sk1);
                    }
                }    
            }
        }
    }
};

