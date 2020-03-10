// asyncronous function
//  sebuah fungsi yg bekerja scara asyncronous (melalui event loop)
//  yang menghasilkan (implisit) promise sebagai return IDBCursorWithValue, tapi ccara penulisan code-nya menggunakan penulisan syncronous(standard)

//  1. fungsi yang berjalan secara async
//  2. menghasilkan promise
//  3. cara penulisannya seperti biasa

// bikin promise
// const coba = new Promise(resolve => {
//     // resolve('selesai')
//     setTimeout(() => {
//         resolve('selesai')
//     }, 2000);
// });
// console.log(coba);
// coba.then(() => console.log(coba))

function cobaPromise(){
    return new Promise((resolve, reject) => {
        const waktu = 5100;
        if(waktu < 5000){
            setTimeout(() => {
                resolve('selesai')
            }, waktu);
        }else{
            reject('kelamaan');
        }
    });
}

// const coba = cobaPromise();
// coba.then(() => console.log(coba));

async function cobaAsync(){
    // const coba = await cobaPromise();
    // console.log(coba);
    // try untuk yang resolve
    try{
        const coba = await cobaPromise();
        console.log(coba);
    }
    // catch untuk yang reject
    catch(err){
        // console.log(err);
        console.error(err);
    }
}

cobaAsync();

// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba));