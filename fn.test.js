const fn = require("./fn");

// 테스트 전후 작업
// only : only를 붙이면 해당 테스트만 테스트할 수 있어짐
// skip : skip을 붙이면 해당 테스트만 skip 가능

let num = 0;

test(" 0 더하기 1은 1", () => {
  expect(fn.add(num, 1)).toBe(1);
});

test(" 0 더하기 2은 2", () => {
  expect(fn.add(num, 2)).toBe(2);
});

test(" 0 더하기 3은 3", () => {
  expect(fn.add(num, 3)).toBe(3);
});

test.skip(" 0 더하기 4은 4", () => {
  expect(fn.add(num, 4)).toBe(4);
  num = 10;
});

test.only(" 0 더하기 5은 5", () => {
  expect(fn.add(num, 5)).toBe(6);
});
