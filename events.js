const EventEmitter = require('events');

const ring = () => {
  console.log('door bell ring');
};

let n = 0;

const count = function () {
  n++;
  console.log(`you clicked ${n} times!`);
};

myEmitter = new EventEmitter();

myEmitter.on('door bell', ring);

myEmitter.on('click', count);

myEmitter.on('order', (food) => {
  console.log('Order placed for', food);
});

myEmitter.on('doorbell', () => {
  console.log('RING RING!');
});

myEmitter.on('payment', (food) => {
  console.log('Enjoy your', food);
});

myEmitter.emit('door bell');
myEmitter.emit('click');
myEmitter.emit('click');
myEmitter.emit('order', 'sushi');
