/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});


let cartao = document.querySelector('#cardpadrao')
let alerta1 = document.getElementById("alerta1")
let alerta2 = document.getElementById("alerta2")
console.log(cartao.classList)

function alterar1() {
    cartao.classList.remove('text-center')
    console.log(cartao.classList)
}

function alterar2() {
    cartao.classList.toggle('text-center')
    console.log(cartao.classList)
}

function exibir(){
    alerta1.style.display = "block";
    alerta2.style.display = "block";
}

