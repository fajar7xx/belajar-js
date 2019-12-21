// cara 1 - function declaration
function halo(){
    console.log(this);
    console.log('halo dari function declaration');
}

// cara panggilnya
halo();
// this mengembalikan objek global pada function declaration

// cara 2 - function literal
var obj = {
    a: 10,
    nama : 'fajar siagian'
};

// method halo
obj.halo1 = function(){
    console.log(this);
    console.log('halo dari object literal');
}
//  cara panggilnya
obj.halo1();
// this pada function literal adalah mengembalikan objek itu sendiri atau objek yang bersangkutan



// cara ke 3 - constructor
function Halo2(){
    console.log(this);
    console.log('Halo dari conbstructor');
}

new Halo2();

var obj1 = new Halo2();
// this pada var ini hanya mengembalikan objek pada var ini saja

var obj2 = new Halo2();
// this pada obj ini juga hanya mengembalikan pada objek inisaja

// this pada function constructor mengembalikan pada objek yang baru dibuat




// konsep this
console.log(this);
console.log(window);
console.log(window === this);

var a = 10;
console.log(this.a);