// Contribute A
const contributeA = document.getElementById('contribute');

contributeA.addEventListener('click', () =>{
    alert('This option isn\'t implemented yet');
})


// Languages Divs
const Python = document.getElementById('python');
const Cpp = document.getElementById('cpp');
const Java = document.getElementById('java');
const Rust = document.getElementById('rust');

// Languges Btn
const BtnPython = document.getElementById('Btnpython');
const BtnCpp = document.getElementById('Btncpp');
const BtnJava = document.getElementById('Btnjava');
const BtnRust = document.getElementById('Btnrust');

BtnPython.addEventListener('click', () =>{
    Python.classList.remove('hidden');
    Cpp.classList.add('hidden');
    Java.classList.add('hidden');
    Rust.classList.add('hidden');
}) 

BtnCpp.addEventListener('click', () =>{
    Python.classList.add('hidden');
    Cpp.classList.remove('hidden');
    Java.classList.add('hidden');
    Rust.classList.add('hidden');
})

BtnJava.addEventListener('click', () =>{
    Python.classList.add('hidden');
    Cpp.classList.add('hidden');
    Java.classList.remove('hidden');
    Rust.classList.add('hidden');
})

BtnRust.addEventListener('click', () =>{
    Python.classList.add('hidden');
    Cpp.classList.add('hidden');
    Java.classList.add('hidden');
    Rust.classList.remove('hidden');
})

// Python
const code1py = document.getElementById('code1py');
const BtnSolu1 = document.getElementById('solu1');
const code2py = document.getElementById('code2py');
const BtnSolu2 = document.getElementById('solu2');
const code3py = document.getElementById('code3py');
const BtnSolu3 = document.getElementById('solu3');
const code4py = document.getElementById('code4py');
const BtnSolu4 = document.getElementById('solu4');
const code5py = document.getElementById('code5py');
const BtnSolu5 = document.getElementById('solu5');

BtnSolu1.addEventListener('click', () =>{
    code1py.classList.remove('hidden');
})
BtnSolu2.addEventListener('click', () =>{
    code2py.classList.remove('hidden');
})
BtnSolu3.addEventListener('click', () =>{
    code3py.classList.remove('hidden');
})
BtnSolu4.addEventListener('click', () =>{
    code4py.classList.remove('hidden');
})
BtnSolu5.addEventListener('click', () =>{
    code5py.classList.remove('hidden');
})

// C++
const code1cpp = document.getElementById('code1cpp');
const BtnSolu1cpp = document.getElementById('solu1cpp');
const code2cpp = document.getElementById('code2cpp');
const BtnSolu2cpp = document.getElementById('solu2cpp');
const code3cpp = document.getElementById('code3cpp');
const BtnSolu3cpp = document.getElementById('solu3cpp');
const code4cpp = document.getElementById('code4cpp');
const BtnSolu4cpp = document.getElementById('solu4cpp');
const code5cpp = document.getElementById('code5cpp');
const BtnSolu5cpp = document.getElementById('solu5cpp');

BtnSolu1cpp.addEventListener('click', () => {
    code1cpp.classList.remove('hidden');
})


BtnSolu2cpp.addEventListener('click', () => {
    code2cpp.classList.remove('hidden');
})


BtnSolu3cpp.addEventListener('click', () => {
    code3cpp.classList.remove('hidden');
})


BtnSolu4cpp.addEventListener('click', () => {
    code4cpp.classList.remove('hidden');
})


BtnSolu5cpp.addEventListener('click', () => {
    code5cpp.classList.remove('hidden');
})

// Java
const code1java = document.getElementById('code1java');
const BtnSolu1Java = document.getElementById('solu1java');
const code2java = document.getElementById('code2java');
const BtnSolu2Java = document.getElementById('solu2java');
const code3java = document.getElementById('code3java');
const BtnSolu3Java = document.getElementById('solu3java');

BtnSolu1Java.addEventListener('click', () => {
    code1java.classList.remove('hidden');
})

BtnSolu2Java.addEventListener('click', () => {
    code2java.classList.remove('hidden');
})

BtnSolu3Java.addEventListener('click', () => {
    code3java.classList.remove('hidden');
})

// Rust
const code1rust = document.getElementById('code1rust');
const BtnSolu1Rust = document.getElementById('solu1rust');
const code2rust = document.getElementById('code2rust');
const BtnSolu2Rust = document.getElementById('solu2rust');
const code3rust = document.getElementById('code3rust');
const BtnSolu3Rust = document.getElementById('solu3rust');

BtnSolu1Rust.addEventListener('click', () => {
    code1rust.classList.remove('hidden');
})

BtnSolu2Rust.addEventListener('click', () => {
    code2rust.classList.remove('hidden');
})

BtnSolu3Rust.addEventListener('click', () => {
    code3rust.classList.remove('hidden');
})