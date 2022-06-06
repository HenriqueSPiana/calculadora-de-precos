# Calculadora-de-precos
*Calculadora de preços/precificação de produtos, com base em impostos.*

A funcionalidade do site é calcular o valor a ser cobrado em seu produto, com base em porcentagem de impostos, e preço de frete
que varia dependendo do tipo de produto e qual estado ele foi fabricado e transportando, para facilitar esse calculo tive a ideia
dessa aplicação.


No javascript ao clicar no botão calcular, primeiramente é coletado as variaveis que o usuario fornece, sendo ela:
produto,frete,ipi do produto, icms do produto (de acordo com o estado e origem), e a margem de lucro desejada.

  
  
Logo após os valores que são necessarios em percentual são convertido para porcentagem.

Em seguida é calculado o valor de custo a partir da multiplicação das valores em porcentagem e a soma com o valor base do produto e frete,e é apresentado na tela.

A partir do valor de custo é apresentado o valor do produto após a aplicação da margem de lucro e é apresentado na tela.

segue a função:


```js

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
```



*Product price calculator*

The site's functionality is to calculate the amount to be charged for your product, based on tax percentage, and shipping price
which varies depending on the type of product and what state it was manufactured and transported, to facilitate this calculation I had the idea
of that application.

In javascript, when clicking on the calculate button, the variables that the user provides are first collected, namely:
product, shipping, product tax, product icms (according to state and origin), and the desired profit margin.

  
  
After that, the values ​​that are needed in percentage are converted to percentage.

Then the cost value is calculated from the multiplication of the values ​​in percentage and the sum with the base value of the product and freight, and it is displayed on the screen.

From the cost value, the value of the product is displayed after applying the profit margin and is displayed on the screen.

follows the function:

```js 
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
```
