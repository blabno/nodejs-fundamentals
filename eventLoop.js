const events = require('events');

const eventEmitter = new events.EventEmitter();

function log() {
  console.log.apply(null, [`${Date.now()}:`, ...arguments]);
}

eventEmitter.on('ourCustomEvent', e => log('on ourCustomEvent', e));
eventEmitter.on('ourCustomEvent', e => process.nextTick(() => log('on ourCustomEvent with nextTick', e)));
eventEmitter.on('ourCustomEvent', e => setImmediate(() => log('on ourCustomEvent with setImmediate', e)));
//eventEmitter.on('error', e => log('on error', e));


function emit() {
  const now = Date.now();
  log('About to emit', now);
  eventEmitter.emit('ourCustomEvent', { now });
  log('Emitted', now)
}

const timeOfImmediateSchedule = Date.now();
setImmediate(() => log('Immediate', timeOfImmediateSchedule));
emit();
emit();
//eventEmitter.emit('error', new Error('I want to crush you'));
