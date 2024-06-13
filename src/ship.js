export default function Ship(_length, _hitCounter = 0, _sinkStatus = false) {
  let length = _length;
  let hitCounter = _hitCounter;
  let sinkStatus = _sinkStatus;

  function hit() {
    hitCounter++;
  }

  function isSunk() {
    if (hitCounter >= length) {
      return true;
    }
    return false;
  }

  return {
    hit,
    isSunk,
  };
}
