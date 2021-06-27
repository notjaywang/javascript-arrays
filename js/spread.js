const middle = ['lettuce', 'cheese', 'patty'];
const burger = ['top bun', ...middle, 'bottom bun'];

const brass = [ "trumpet", "trombone", "french horn", "baritone", "tuba" ];
const woodwind = [ "flute", "oboe", "clarinet", "saxophone", "bassoon" ];
const instruments = [ ...brass, ...woodwind];
brass.push( "flugelhorn" );

console.log(instruments);
console.log(brass);

const numbers = [ 10, 20, 30, 40 ];

console.log ( Math.max( numbers ) );