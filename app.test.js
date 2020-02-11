const { BowlingGame } = require('./app');

test('BowlingGame should exist and is a class', () => {
  expect(new BowlingGame().constructor.name).toBe('BowlingGame');
});

test('Score should be 0 if bowl 0 in all shoots', () => {
  const game = new BowlingGame([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

  expect(game.score).toBe(0)
});

test('Bowl 0-9 for every round', () => {
  const game = new BowlingGame([2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3]);

  expect(game.score).toBe(50)
});

test('spare should be sum of next round', () => {
  const game1 = new BowlingGame([5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  const game2 = new BowlingGame([0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

  expect(game1.score).toBe(20);
  expect(game2.score).toBe(10);
});

test('all 10s', () => {
  const game = new BowlingGame([10,10,10,10,10,10,10,10,10,10,10,10]);

  expect(game.score).toBe(300)
})