function isPalindrome(number) {
  return String(number) === String(number).split("").reverse().join("");
}

function largestPalindromeProduct() {
  let largestPalindrome = 0;

  for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
      const product = i * j;

      if (isPalindrome(product) && product > largestPalindrome) {
        largestPalindrome = product;
      }
    }
  }

  return largestPalindrome;
}
