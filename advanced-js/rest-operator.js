// rest parameter mmereppresentasikan argument
// pada function dengan jumlah yang tidak terbatas
// menjadi sebuah array

// rest harus di akhir dari formal parameter


// function myFunc(a,b,...myArgs){
//     // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//     return myArgs;

//     // argument bukan array tetapi bentuk objek
// }

// console.log(myFunc(1,2,3,4,5));

// function jumlahkan(...params){
//     // let total = 0;
//     // for(const t of params){
//     //     total += t;
//     // }

//     // return total

//     return params.reduce((a,b)=> a + b);
// }

// console.log(jumlahkan(1,2,3,4,5,6,7));

// menggunakan rest parameter pada 
// array destructuring

const kel1 = ['ali', 'jabar', 'ahmad', 'sueb'];
const [ketua, wakil, ...anggota] = kel1;
console.log(ketua);
console.log(anggota);

// untuk object
const team = {
    pm : 'abil abbas habibi',
    frontend1: 'addlin',
    frontend2: 'naldi',
    backend: 'Fajar',
    ux: 'iqbal',
    devops: 'crisman'
}

const{pm, ...myTeam} = team;
console.log(pm);
console.log(myTeam);

// filtering
function filterBy(type, ...values){
    return values.filter(v =>typeof v === type);
}

console.log(filterBy('number', 1,3,4, false,true, 'makan'));
