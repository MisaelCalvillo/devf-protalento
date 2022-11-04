const prompt = require('prompt-sync')({ sigint: true });

const nombre = prompt('Cómo te llamas? ');

let keepRunning = true;
while(keepRunning) {
  const res = prompt(`Cuál es tu respuesta ${nombre}? `);

  if (res === 'exit') {
    console.log('Bye bye...');
    keepRunning = false;
  }
}
