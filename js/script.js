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

