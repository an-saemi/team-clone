const local = localStorage.getItem('name');
let obg = local.split('법');
console.log(obg[0]);
localStorage.setItem(`${obg[0]}`);