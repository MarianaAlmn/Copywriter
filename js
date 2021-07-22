function datos() {
var producto = document.getElementById('producto').value;
var marca = document.getElementById('marca').value;
var composicion = document.getElementById('composicion').value;
var mangas = document.getElementById('mangas').value;
var color = document.getElementById('color').value;
var cuello = document.getElementById('cuello'.value);
var cantcopis = document.getElementById('cantcopies').value;
var inicio = ['Apuesta por el mejor look esta temporada utilizando una '+producto+' de mujer','Actualiza tu estilo, agrega a tu guardarropa la nueva '+producto+' de moda','Viste a la moda utilizando la nueva ' +producto+' de mujer', 'Siéntete segura con el estilo de tu nueva ' +producto+' de moda', 'Mejora tu look con una ' +producto+' de mujer', 'Crea un nuevo estilo que te haga ver genial con la nueva '+producto+' de ']
var inic = ['para hacerte lucir genial gracias a su cuello '+cuello+'.',', logra atuendos llenos de glamour combinandola con prendas básicas resaltando su cuello '+cuello+'.',' para hacerte lucir genial.']
var comp = ['por lo que aseguras un ajuste suave y cómodo en tu cuerpo',' así aseguras suavidad, comodidad y ajuste ligero en tu cuerpo',' por lo que complementas tus prendas favoritas fácil y cómodamente']
var final = ['Adquiere hoy mismo esta '+producto+' ' +marca+' ; añádela a tu carrito y con un par de clics finalizas tu compra.','Refresca tu guardarropa con esta '+producto+' ¡adquiérela en línea!','Refresca tu estilo con esta '+producto+' ' +marca+' ¡adquiérela en línea!','Es momento de renovar tu armario, complementa tu carrito de compra con esta '+producto+' ' +marca+'. Llega a tu casa haciendo un pedido en línea.','Da solo un par de clics en el botón comprar.']
var cuatroRandom = [];
var posicionesElegibles = [];
var lista = document.getElementById('lista');

var r;


    switch (color) {
        case 'blanco':
          console.log('; básico y muy combinable');
          break;
        case 'azul':
          console.log('; un tono único que resalta entre los neutros');
          break;
        case 'amarillo':
          console.log('; el tono perfecto para lucir alegre');
          break;
        case 'negro':
          console.log('; la pieza perfecta para combinar con todo');
        break;
        default: console.log('; un tono divino');
      }
  
  
      for (var i = 0; i < cantcopis; i++) {
      
      
      	let rdmInicio = Math.floor(Math.random() * ((inicio.length-1) - 0 + 1) + 0);
      	let rdmComp = Math.floor(Math.random() * ((comp.length-1) - 0 + 1) + 0);
				let rdmFinal = Math.floor(Math.random() * ((final.length-1) - 0 + 1) + 0);
          
         var copy = `${inicio[rdmInicio]} marca ${marca}. Este modelo se encuentra disponible en color ${color}. Tiene una composición de ${composicion}; su diseño es con mangas ${mangas} ${comp[rdmComp]}, ideal para esta temporada. ${final[rdmFinal]} `;
        
        cuatroRandom.push(copy[posicionesElegibles[r]]);
        var word_list = `${copy.split(" ").length}  -  ${copy}`;
        console.log(word_list);
        var item = document.createElement('li');
        item.textContent = word_list;
        item.classList.add('list-group-item');
        lista.appendChild(item);
      }
    }
