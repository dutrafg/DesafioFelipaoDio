 //function determinarNivelHeroi(nome, xp): Define uma nova função chamada determinarNivelHeroi que recebe dois parâmetros:
  //nome: Uma string que representa o nome do herói.
  //xp: Um número que representa a quantidade de experiência do herói.
function classificarHeroi(nome, xp) {
  
  let nivel;
  //let nivel;: Declara uma variável nivel que será usada para armazenar o nível do herói. Seu valor será definido dentro da estrutura condicional.

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }
  //Cada if ou else if representa um intervalo de XP e o nível correspondente.
  //Os operadores >= e <= são usados para comparar a XP com os limites de cada intervalo.
  //O último else é um caso padrão, que significa que se a XP não se encaixar em nenhum dos intervalos anteriores, o herói será classificado como "Radiante".
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

}

classificarHeroi("Eternatus", 10000);
//determinarNivelHeroi("Eternatus", 10000);: Essa linha chama a função determinarNivelHeroi com os argumentos "Eternatus" como nome e 10000 como XP. Isso significa que o código irá classificar o herói "Eternatus" com 10000 de XP e imprimir o resultado no console.