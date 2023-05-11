       var ano;
       var idade;
       var resultado;
       var nome;

        function calcular(event) {
            event.preventDefault();
           
            ano = parseFloat(document.getElementById("ano").value);

            nome = document.getElementById("nome").value;
            
            idade = 2023-ano;

            console.log(ano);

            if (idade <= -0.1) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br>" + nome + "<br/> Você nasceu no futuro?";
            } else if (idade >= 1 && idade <= 12) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/>" + nome + " sua idade é " + idade + "<br/> Você está na fase Criança";
            } else if (idade >= 12 && idade <= 21) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/>" + nome + " sua idade é " + idade + "<br/> Você está na fase Adolescente";
            } else if (idade >= 21 && idade <= 65) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/>" + nome + " sua idade é " + idade + "<br/> Você está na fase Adulto";
            } else if (idade >= 65 && idade <= 130) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/>" + nome + " sua idade é " + idade + "<br/> Você está na fase Idoso";
			} else if (idade >= 130) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/>" + nome + " sua idade é " + idade + "<br/> Pode ir para um museu";
        }
           
    }