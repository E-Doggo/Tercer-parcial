function contar(texto) {
  let arrText = texto.split(' ')
  let resultado ='';
  for(let i = 0;i <arrText.length; i++){
     resultado += `${arrText[i]} = 1 `

  }
  return resultado;
}

export default contar;
