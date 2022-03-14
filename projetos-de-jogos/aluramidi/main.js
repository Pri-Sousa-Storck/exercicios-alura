function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio); 
  
  if (elemento == null) {
    console.log('Elemento não encontrado');
  }
  
  if (elemento!= null) {
    if(elemento.localName === 'audio'){
      elemento.play();
    }
  }
}

  const listaDeTeclas = document.querySelectorAll('.tecla');
  /*const tipo uma var mas que não varia*/
   
  for (let contador = 0; contador <listaDeTeclas.length; contador++ ) {
    
    const tecla = listaDeTeclas[contador];
    const instrumentos = tecla.classList[1];
    const idAudio = `#som_${instrumentos}`; 
    //tempalte string
  
    tecla.onclick = function () {
      tocaSom(idAudio);
    }
    
    tecla.onkeyDow = function (evento) {
      if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
      }
    }

    tecla.oneKeyUp = function (){
      tecla.classList.remove('ativa');
    }
}
