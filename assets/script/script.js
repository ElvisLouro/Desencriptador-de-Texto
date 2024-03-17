// set variables and 'dictionary' for cryptography
let mensagem = '';
let novaMensagem = '';
let dicionario = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'};

// hide copy 'Copia' button
function desapareceCopia() {
    let botao = document.getElementById('botaoCopia');
    botao.style.display = none;
}

// Display text - insere o texto na tag no HTML
function exibirTextoNaTela(tag, texto) {
    let campo = document.getElementById(tag);
    campo.textContent = texto;
}

// get input from textArea, lowercase it and remove any accents
function getInput() {
    let texto = document.getElementById('texto_inicial');
    mensagem_suja = texto.value;
    mensagem = mensagem_suja.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    return mensagem;
}

// clear input
function eraseInput() {
    let texto = document.getElementById('texto_inicial');
    texto.value = '';
}

// 'Crypto': replace chars using iteration of chars from input str and replace it using the 'dictionary' to build a new str  
function criptografar() {
    novaMensagem = '';
    getInput();
    if (mensagem == '') {
        return
    } else {
    for (let letra of mensagem) {
        if (letra in dicionario) {
            novaMensagem += dicionario[letra];
        } else {
            novaMensagem += letra;
        }
    }
    // display the new str in the output area, shows copy button and clear the input textArea
    document.getElementById("svgPessoaLupa").style.display = "none";
    document.getElementById("mensagem__inicial").style.display = "none";
    document.getElementById("resultado").style.display = "flex";
    exibirTextoNaTela('resultado', novaMensagem);
    eraseInput();
    document.getElementById("botaoCopia").style.display = "flex";
    }
}

// 'Decrypto': slice the input and replace a set of chars for the correspondent char from the 'dictionary' 
function descriptografar() {
    getInput();
    if (mensagem == '') {
        return
    } else {
    novaMensagem = mensagem;
        for (let i in dicionario) {
            novaMensagem = novaMensagem.split(`${dicionario[i]}`).join(`${i}`);
        }
        exibirTextoNaTela('resultado', novaMensagem);
        eraseInput();
    }
}

// copy output
function copiar() {
    let copyText = document.getElementById('resultado');
    navigator.clipboard.writeText(copyText.textContent);
}

