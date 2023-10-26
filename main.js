let form=document.querySelector('.search-form');
let loginForm=document.querySelector('.login-form1');
let shoppingCart=document.querySelector('.shopping-cart');
let navBar=document.querySelector('.navbar'); 
let regForm=document.querySelector('.regForm'); 
 
let new_pass=document.querySelector('.new_pass'); 
let delet=document.querySelector('.delete'); 

document.querySelector('#search-btn').onclick= () =>
{
    form.classList.toggle('activ');
    shoppingCart.classList.remove('activ');
    loginForm.classList.remove('activ');
    navBar.classList.remove('activ');
    
    regForm.classList.remove('activ'); 
    new_pass.classList.remove('activ');
}

document.querySelector('#shopping-btn').onclick= () =>
{
    form.classList.remove('activ');
    shoppingCart.classList.toggle('activ');
    loginForm.classList.remove('activ');
    navBar.classList.remove('activ');
    regForm.classList.remove('activ');
    new_pass.classList.remove('activ');
}

document.querySelector('#login-btn').onclick= () =>
{
    form.classList.remove('activ');
    shoppingCart.classList.remove('activ');
    loginForm.classList.toggle('activ');
    navBar.classList.remove('activ');
    regForm.classList.remove('activ');
    new_pass.classList.remove('activ');
}
 
document.querySelector('#menu-btn').onclick= () =>
{
    form.classList.remove('activ');
    shoppingCart.classList.remove('activ');
    loginForm.classList.remove('activ');
    navBar.classList.toggle('activ');
    regForm.classList.remove('activ');
    new_pass.classList.remove('activ');
}
document.querySelector('#reg').onclick= () =>
{
    regForm.classList.toggle('activ');
    form.classList.remove('activ');
    shoppingCart.classList.remove('activ');
    loginForm.classList.remove('activ');
    navBar.classList.remove('activ');-
    new_pass.classList.remove('activ');
}
document.querySelector('.set_pass').onclick= () =>
{
    new_pass.classList.toggle('activ');
    regForm.classList.rempve('activ');
    shoppingCart.classList.remove('activ');
    loginForm.classList.remove('activ');
    navBar.classList.remove('activ');
    regForm.classList.remove('activ');
}
//set_pass
//new_pass

document.querySelector('#del').onclick= () =>
{
    delet.classList.toggle('activ');
    form.classList.remove('activ');
    shoppingCart.classList.remove('activ');
    loginForm.classList.remove('activ');
    navBar.classList.remove('activ');
    
    regForm.classList.remove('activ'); 
    new_pass.classList.remove('activ');
}
