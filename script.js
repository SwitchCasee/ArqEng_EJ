// Constante e função para criar o efeito de carrossel
const imgs = document.getElementById("img");
const imgElements = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > imgElements.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 4500);
// End Carrossel


// Formulario:

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão


    // Validação dos campos
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("tel").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" |telefone === ""| message === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert("Formulário enviado com sucesso!");

});

// 


