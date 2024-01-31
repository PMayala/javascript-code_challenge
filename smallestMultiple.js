function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestMultipleInRange(start, end) {
  let multiple = start;

  for (let i = start + 1; i <= end; i++) {
    multiple = lcm(multiple, i);
  }

  return multiple;
}

const result = smallestMultipleInRange(1, 20);

console.log(result);
