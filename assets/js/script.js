/* var - variável de escopo (fronteira) global */
/* let - variável local */
/* const - constante global */

/* Podemos acessar o DOM por:
    - Tag: getElementyByTagName()
    - Id: getElementyById() 
    - Nome: getElementyByNome()
    - Classe: getElementsByClassName()
    - Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeok = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = '100%'
email.style.width = '100%'

function validaNome()  
{
    let txt = document.querySelector('#txtNome')

    if (nome.value.length < 3)
    {
        txt.innerHTML = "Insira um nome válido"  /*validação do campo nome */
        txt.style.color = 'red'                 /*coloração da validação */
    }
    else 
    {
        txt.innerHTML = " "           /*  em branco pois a qtde de caracter está correta*/
        nomeok = true
    }
}

function validaEmail() 
{
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1)
    {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    }
    else 
    {
        txtEmail.innerHTML = " "
        emailOk = true
    }
}

function validaAssunto()
{
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100 )
    {
        txtAssunto.innerHTML = "Máximo de 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }
    else 
    {
        txtAssunto.style.display = "none"
        
    }
}

function enviar() 
{

    if ( nomeok == true && emailOk == true && assuntoOk == true) 
    {
        alert ("Formulário enviado com sucesso.")
    }
    else 
    {
        alert ("Preencha o formulário corretamente antes de enviar!")
    }

}

function zoomMapa()
{
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function normalMapa()
{
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}