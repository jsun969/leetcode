export function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x === 0) return true;
  const str = `${x}`;
  const reverseStr = str.split('').reverse().join('');
  return str === reverseStr;
}
