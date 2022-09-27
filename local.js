let impArray = ['Heera' ,'peela','Mushka'];
// This is used to add key and values in local storage
localStorage.setItem('Name', 'Heera');
localStorage.setItem('Name2', 'peela');
localStorage.setItem('Murga',JSON.stringify(impArray));



// This is used to clear local storage 
// localStorage.clear();

// this is used to removeItem name
// localStorage.removeItem('Name2');


let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Murga'));
console.log(name);
// let name = localStorage.getItem('Name2');
// console.log(name);


// SESSION Storage

sessionStorage.setItem('sessionName', 'Heera');
sessionStorage.setItem('sessionName2', 'peela');
sessionStorage.setItem('sessionMurga',JSON.stringify(impArray));
