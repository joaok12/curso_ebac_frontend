let elementNomeCompleto = document.getElementById("anoNascimento")
let elementConta = document.getElementById("anoAtual")
let elementH1 = document.getElementById("titulo")


//mudança da cor do body e do h1 quando clicar no input "Nome Completo"

elementNomeCompleto.addEventListener("focus", function(){

document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(39, 39, 39)"
})

elementNomeCompleto.addEventListener("blur", function() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white"
;
});

elementNomeCompleto.addEventListener("focus", function(){

    elementH1.style.color = "white"
    })
    
    elementNomeCompleto.addEventListener("blur", function() {
        elementH1.style.color = "rgb(39, 39, 39)" 
    ;
    });



//mudança da cor do body e do h1 quando clicar no input "conta"

elementConta.addEventListener("focus", function(){

    document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(3, 102, 66)"
    })
    
    elementConta.addEventListener("blur", function() {
        document.getElementsByTagName("body")[0].style.backgroundColor = "white"
    ;
    });

        //h1

    elementConta.addEventListener("focus", function(){
    
        elementH1.style.color = "yellow"
        })
        
        elementConta.addEventListener("blur", function() {
            elementH1.style.color = "rgb(39, 39, 39)" 
        ;
        });

        document.getElementById("meuBotao").addEventListener("click", function() {



            //animaçao de clicl

        var botao = document.getElementById("meuBotao");
        botao.classList.add("clicked-animation");
        setTimeout(function() {
            botao.classList.remove("clicked-animation");
        }, 100);
        })

            // Calcular idade

        

        let form = document.getElementById("form-deposit")
        form.addEventListener("submit",function(e){
            
            function calculaIdade( elementConta, elementNomeCompleto){
            
                return parseInt(elementConta) > parseInt(elementNomeCompleto);
            }
            let idade = parseInt(elementConta.value) - parseInt(elementNomeCompleto.value);
            let idadestring = idade.toString()

            let formEvalido = false 
            e.preventDefault();

            formEvalido = calculaIdade(elementConta.value, elementNomeCompleto.value)
            
            if (formEvalido){
                document.getElementById("incorrect").style.display = "none"
                document.getElementById("anoNascimento").style.borderColor = "rgb(82, 196, 82)"
                document.getElementById("anoNascimento").style.outlineColor = "rgb(82, 196, 82)"
                document.getElementById("anoNascimento").style.borderStyle = "solid"
                document.getElementById("anoAtual").style.borderColor = "rgb(82, 196, 82)"
                document.getElementById("anoAtual").style.outlineColor = "rgb(82, 196, 82)"
                document.getElementById("anoAtual").style.borderStyle = "solid"
                document.getElementById("success-mensage").style.display = "flex"
                document.getElementById("success-mensage").innerHTML = `Sua idade é: ${idade}`;
                document.getElementById("success-mensage").style.backgroundColor = "green";
                
                

            } else{
                document.getElementById("anoNascimento").style.borderColor = "red"
                document.getElementById("anoNascimento").style.outlineColor = "red"
                document.getElementById("anoNascimento").style.borderStyle = "solid"
                document.getElementById("anoAtual").style.borderColor = "red"
                document.getElementById("anoAtual").style.outlineColor = "red"
                document.getElementById("anoAtual").style.borderStyle = "solid"
                document.getElementById("success-mensage").style.display = "flex"
                document.getElementById("success-mensage").innerHTML = "Ano de nascimento nao pode ser maior que o Ano atual"
                document.getElementById("success-mensage").style.backgroundColor = "red"
                

                
            }
        })

