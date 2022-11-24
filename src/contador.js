function contar(texto) {
  let text = texto.toLowerCase()
  let arrText = text.split(/[ \-\,\;\.]/)
  let resultado ={};
  for(let i = 0;i <arrText.length; i++){
    var palabra = arrText[i];
    if(resultado[palabra] == undefined){
      resultado[palabra] = 1;
    }
    else{
      resultado[palabra] += 1;
    }
  }
  return resultado;
}

export default contar;
