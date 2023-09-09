import Validator from '../app.js';

test('examination validateUsername function', () => {
  const username = new Validator('John_Wick-09');
  const result = username.validateUsername();
  expect(result).toBeTruthy();
});

test('examination validateUsername function with bad name', () => {
  const username = new Validator('_John_Wick-0909');
  const result = username.validateUsername();
  expect(result).toBeFalsy();
});
