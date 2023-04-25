const fn = require("./fn");

// toBeNull, toBeUndefined, toBeDefined : 각각 null, undefined, defined인 경우 통과
// 성공
test("null은 null입니다.", () => {
  expect(null).toBeNull();
});

// toBeTruthy, toBeFalsy : true인지 false인지 boolean값을 판별
// 성공
test("0은 false입니다.", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

// 성공
test("비어있지 않은 문자열은 true입니다.", () => {
  expect(fn.add("hello", "world")).toBeTruthy();
});
