// Definir variables
let contador = 0;
let tipoVinoElegido='';
let vinoElegido='';
let eligioVino = false;
let total = 0;
let moneda = 'USD'

// Definición de Arreglos
const vinoElegidoTipo=[];
const vinoElegidoMarca=[];
const vinosTintos=['Tinto', 'Catena Zapata', 'Felipe Rutini', 'Susana Balbo'];
const vinosBlancos=['Blanco', 'Angelica Zapata', 'Walter Bressia', 'Zuccardi'];
const vinosRosados=['Rosado', 'Susana Balbo', 'Casa Boher', 'Salentein'];
const vinosEspumantes=['Espumante', 'Rosell Boher', 'Luigi Bosca', 'Baron B'];
const vinosTintosValor=['USD',100,80,60];
const vinosBlancosValor=['USD',30,40,25];
const vinosRosadosValor=['USD',35,25,10];
const vinosEspumantesValor=['USD',22,18,12];

// Identificar usuario
let nombre = null
while (nombre == null || nombre == '') {
    nombre = prompt("Por favor ingrese su nombre: ");
}

// Confirmar condiciones
confirmar=confirm(nombre+', aceptas nuestros reglas y condiciones?');

// Ciclo de selección de Tipo de Vino y Botella
if (confirmar) {
    while (contador >= 0) {
        tipoVinoElegido=prompt('Indique que tipo de vino prefiere: '+
        'T para Tinto, B para Blanco, R para Rosado y E para Espumante,  S para Salir');
        if (tipoVinoElegido == 'S') {
            contador = -1;
        } else {
            switch (tipoVinoElegido) {
                case 'T':
                    alert('Seleccionó tipo de vino ' + vinosTintos[0]);
                    pedirVino(tipoVinoElegido);
                    if ((vinoElegido >= 1) && (vinoElegido <= 3))  {
                        alert('Seleccionó el vino ' + vinosTintos[vinoElegido]);
                        guardarVinos(vinosTintos[vinoElegido], 'Tinto');
                        total = total + vinosTintosValor[vinoElegido];
                        contador++;
                    }
                    break;
                case 'B':
                    alert('Seleccionó tipo de vino ' + vinosBlancos[0]);
                    pedirVino(tipoVinoElegido);
                    if ((vinoElegido >= 1) && (vinoElegido <= 3))  {
                        alert('Seleccionó el vino ' + vinosBlancos[vinoElegido]);
                        guardarVinos(vinosBlancos[vinoElegido], 'Blanco');
                        total = total + vinosBlancosValor[vinoElegido];
                        contador++;
                    } 
                    break;
                case 'R':
                    alert('Seleccionó tipo de vino ' + vinosRosados[0]);
                    pedirVino(tipoVinoElegido);
                    if ((vinoElegido >= 1) && (vinoElegido <= 3))  {
                        alert('Seleccionó el vino ' + vinosRosados[vinoElegido]);
                        guardarVinos(vinosRosados[vinoElegido],'Rosado');
                        total = total + vinosRosadosValor[vinoElegido];
                        contador++;
                    } 
                    break;
                case 'E':
                    alert('Seleccionó tipo de vino ' + vinosEspumantes[0]);
                    pedirVino(tipoVinoElegido);
                    if ((vinoElegido >= 1) && (vinoElegido <= 3))  {
                        alert('Seleccionó el vino ' + vinosEspumantes[vinoElegido]);
                        guardarVinos(vinosEspumantes[vinoElegido]),'Espumante';
                        total = total + vinosEspumantesValor[vinoElegido];
                        contador++;
                    } 
                    break;
                case 'S':
                    alert('Seleccionó SALIR');
                    contador = -1;
                    break;
                default:
                    alert('Introdujiste una opción no válida '+ tipoVinoElegido);
                    break;
            }
            if (contador = 0) {
                alert('No ha elegido ningún tipo de vino'); 
            }
        }
    }
}

// Mostrar la selección final
for (let i=0;i<vinoElegidoMarca.length;i++) {
    alert('Ha pedido: ' + vinoElegidoTipo[i] + ', de marca: ' + vinoElegidoMarca[i]);
}

if (total > 0) {
    alert('El importe total es de: ' + moneda + total); 
}  else {
    alert('Vuelve cuando quieras!')
}

// Función para ofrecer los vinos según el tipo de vino elegido
function pedirVino (tipo) {
    if (tipo == 'T') {
        vinoElegido=prompt('Indique que vino ' + vinosTintos[0] + ' prefiere: ' +
             '1 para ' + vinosTintos[1] + ' de USD' + vinosTintosValor[1] +
             ', 2 para ' + vinosTintos[2] + ' de USD' + vinosTintosValor[2] +
             ', 3 para '+ vinosTintos[3] + ' de USD' + vinosTintosValor[3] +
            ' o bien ingrese 0 para Salir');
    } else if (tipo == 'B') {
            vinoElegido=prompt('Indique que vino ' + vinosBlancos[0] + ' prefiere: ' +
                '1 para ' + vinosBlancos[1] + ' de USD' + vinosBlancosValor[1] +
                ', 2 para ' + vinosBlancos[2] + ' de USD' + vinosBlancosValor[2] +
                ', 3 para '+ vinosBlancos[3] + ' de USD' + vinosBlancosValor[3] +
                ' o bien ingrese 0 para Salir');
        } else if (tipo == 'R') {
                vinoElegido=prompt('Indique que vino ' + vinosRosados[0] + ' prefiere: ' +
                    '1 para ' + vinosRosados[1] + ' de USD' + vinosRosadosValor[1] +
                    ', 2 para ' + vinosRosados[2] + ' de USD' + vinosRosadosValor[2] +
                    ', 3 para '+ vinosRosados[3] + ' de USD' + vinosRosadosValor[3] +
                    ' o bien ingrese 0 para Salir');
            } else if (tipo == 'E') {
                vinoElegido=prompt('Indique que vino ' + vinosEspumantes[0] + ' prefiere: ' +
                    '1 para ' + vinosEspumantes[1] + ' de USD' + vinosEspumantesValor[1] +
                    ', 2 para ' + vinosEspumantes[2] + ' de USD' + vinosEspumantesValor[2] +
                    ', 3 para '+ vinosEspumantes[3] + ' de USD' + vinosEspumantesValor[3] +
                    ' o bien ingrese 0 para Salir');
                } else {
                    return false;
                   }
    return vinoElegido;
}

// Función para almacenar los vinos seleccionados
function guardarVinos (vino, clase) {
    vinoElegidoTipo.push(clase);
    vinoElegidoMarca.push(vino);
    console.log(clase);
    console.log(vinoElegidoMarca);
}
