const { add, err, promiseTest, arr, app } = require('../index');
const supertest = require('supertest');

test('toBe', () => {
  expect(add(1, 2)).toBe(3);
});

test('toEqual', () => {
  expect(add(1, 2)).toEqual(3);
});

test('toBeDefined', () => {
  expect(add(1, 2)).toBeDefined();
});

test('toBeNull', () => {
  expect(add(1, 2)).not.toBeNull();
});

test('toBeGreaterThan', () => {
  expect(add(1, 2)).toBeGreaterThan(1);
});

test('toBeLessThan', () => {
  expect(add(1, 2)).toBeLessThan(4);
});

test('toMatch', () => {
  expect(add('Hello', 'World')).toMatch(/Hello/);
});

test('toThrow', () => {
  expect(() => err()).toThrow('There are new error.');
});

describe('I am  block', () => {
  test('I am execute in a block', () => {
    expect(() => err()).toThrow('There are new error.');
  });
  test('toThrow', () => {
    expect(() => err()).toThrow('There are new error.');
  });
});

test('promiseTest old way', () => {
  promiseTest(1, 2)
    .then(data => {
      expect(data).toBe('+ve');
    })
    .catch(e => {
      expect(e).toBe('-ve');
    });
});

test('promiseTest resolves with "+ve" when a - b > 1', () => {
  return expect(promiseTest(2, 1)).resolves.toBe('+ve');
});

test('promiseTest rejects with "-ve" when a - b <= 1', () => {
  return expect(promiseTest(1, 2)).rejects.toBe('-ve');
});

test('toContain', () => {
  expect(arr()).toContain('Bat');
});

test('TEST GET Users API', async () => {
  await supertest(app)
    .get('/users')
    .expect(200)
    .then(result => {
      expect(result.body && typeof result.body === 'object');
    });
  expect(arr()).toContain('Bat');
});
