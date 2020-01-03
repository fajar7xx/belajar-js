// function kerjakantugas di sebut hoigher order function
// sedangkan function sebagai argumen disebut argumen

// function kerjakanTugas(matakuliah, selesai){
//     console.log(`Mulai mengerjakan tugas ${matakuliah}....`);
//     selesai();
// }

// function selesai(){
//     alert('Selesai mengerjakan tugas');
// }

// kerjakanTugas('WEb Dev', selesai);

let total = 0, count = 1;
while(count <= 10){
    total += count;
    count++;
}
console.log(total);

function repeat(n, action){
    for(let i = 0 ; i<n; i++){
        action(i);
    }
}

repeat(10, console.log);