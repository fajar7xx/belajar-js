// const nama  = 'fajar siagian';
// const umur = 23;

// // ...values => array yang berisi semuanya berisis template literal

// function coba(paramStrings, ...values){
//     // let result = '';
//     // paramStrings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });

//     // return result;

//     return paramStrings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo nama saya ${nama} dan berumur ${umur} tahun saat ini`;
// console.log(str);


// hightliahg

const nama = 'Fajar siagian';
const umur = 23;

function highlight(strings, ...values){
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

document.body.innerHTML = str;