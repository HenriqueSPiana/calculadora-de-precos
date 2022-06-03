

function calcular(){

  var produto = Number(document.getElementById("produto").value)

  var frete = Number(document.getElementById("frete").value)

  



  var ipiPorcento = Number(document.getElementById('ipi').value)
  var ipiValor= Number(ipiPorcento/100)*produto


  
  var icmsPorcento =  Number(document.getElementById('icms').value)
  var icmsValor=Number(icmsPorcento/100)*produto

  var margemLucro = Number(document.getElementById('lucro').value)
                     

  var custo= icmsValor+ipiValor+produto+frete
  
  var lucro = (margemLucro/100)*custo
    
  var result = lucro + custo
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "<h3> O valor a ser cobrado é de R$" + result.toFixed(2) +"</h3>"  
  var coust = document.getElementById("coust");
  coust.innerHTML = "<h3> Seu produto tem custo de R$" + custo.toFixed(2) +"</h3>"  


}
