const icon = document.getElementById('icon');
const input = document.getElementById('password');

icon.addEventListener('click', () =>{
    if (input.getAttribute('type') ==='password'){
        input.setAttribute('type','text');
    }else{
        input.setAttribute('type','password');
    }
})