console.log('works');
import '../js/tape.js';
import Tape from '../js/tape.js';

const tape = new Tape({
  rootElem: document.querySelector('.my-tape'),
  cssGap: '50',
  speed: 1.3,
});

testRun(tape);

function testRun(tape) {
  // tape.toggleDirection();
  tape.start();

  setTimeout(() => {
    tape.stop();
  }, 1000);

  setTimeout(() => {
    tape.start();
  }, 2000);

  setInterval(() => {
    tape.toggleDirection();
  }, 10000);
}
