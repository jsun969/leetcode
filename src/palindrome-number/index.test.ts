import { isPalindrome } from './index';

test('1', () => {
  expect(isPalindrome(121)).toEqual(true);
});

test('2', () => {
  expect(isPalindrome(-121)).toEqual(false);
});

test('3', () => {
  expect(isPalindrome(10)).toEqual(false);
});
