       var ano;
       var idade;
       var resultado;

        function calcular(event) {
            event.preventDefault();
           
            ano = parseFloat(document.getElementById("ano").value);

         idade = 2023-ano;

            console.log(ano);

            if (idade < 12) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/> Seu resultado foi: " + idade + "<br/> Criança";
            } else if (idade >= 12 && idade <= 21) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/> Seu resultado foi: " + idade + "<br/> Adolescente";
            } else if (idade >= 21 && idade <= 65) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/> Seu resultado foi: " + idade + "<br/> Adulto";
            } else if (idade >= 65) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/> Seu resultado foi: " + idade + "<br/> Idoso";
        }
		
		document.getElementById("peso").value = "";
		document.getElementById("altura").value = "";
           
    }