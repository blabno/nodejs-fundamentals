const events = require('events');

const eventEmitter = new events.EventEmitter();

function log() {
  console.log.apply(null, [`${Date.now()}:`, ...arguments]);
}

eventEmitter.on('ourCustomEvent', e => log('on ourCustomEvent', e));


function emit() {
  const now = Date.now();
  log('About to emit', now);
  eventEmitter.emit('ourCustomEvent', { now });
  log('Emitted', now)
}

emit();
