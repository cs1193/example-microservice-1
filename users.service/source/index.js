import {EventEmitter} from 'events';

const reporter = new EventEmitter();

process.on('uncaughtException', (error) => {
  console.error('Unhandled Exception', error);
});

process.on('uncaughtRejection', (error, promise) => {
  console.error('Unhandled Rejection', error);
});

reporter.on('database.ready', (database) => {
  console.log('Database Ready');
});

reporter.on('database.error', (error) => {
  console.log(error);
});

reporter.emit('service.boot.ready');
