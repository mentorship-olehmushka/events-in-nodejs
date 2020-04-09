const events = require('events');
const calc  = require('./calc');
const timer  = require('./timer');
const github = require('./github-user-repo');

const eventEmitter = new events.EventEmitter();
const eventName = process.argv[2];
const args = process.argv.slice(3);

eventEmitter.addListener('calc', () => calc(...args));
eventEmitter.addListener('github', () => github(...args));
eventEmitter.addListener('timer', () => timer(...args));
eventEmitter.addListener('error', error => console.log('Ooops', error));

eventEmitter.emit(eventName);
