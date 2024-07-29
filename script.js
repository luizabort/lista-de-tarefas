const inputBox = document.getElementById("input-box");
const conteudoLista = document.getElementById("list-container");

function adicionarTarefa() {
  if (inputBox.value === "") {
    alert("Insira uma tarefa :)");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    conteudoLista.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  salvarDados();
}

function verificaEnter(e){
    if(e.code == "Enter"){
        adicionarTarefa();
    }
}

conteudoLista.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      salvarDados();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      salvarDados();
    }
  },
  false
);

function limparLista() {
    conteudoLista.innerHTML = "";
    salvarDados();
}

function salvarDados() {
  localStorage.setItem("tarefa", conteudoLista.innerHTML);
}

function mostrarDados() {
  conteudoLista.innerHTML = localStorage.getItem("tarefa");
}

mostrarDados();
