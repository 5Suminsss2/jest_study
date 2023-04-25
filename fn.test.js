const fn = require("./fn");

// toBe는 matcher이다.
// matcher은 숫자열이나 문자열 등 기본 타입값을 비교할 때 사용

// 성공
test("1은 1이야", () => {
  // expect에 검증할 값을 넣어주고, toBe에 기대되는 값을 넣어줌
  expect(1).toBe(1);
});

test("2 더하기 3은 5야", () => {
  // expect에 검증할 값을 넣어주고, toBe에 기대되는 값을 넣어줌
  expect(fn.add(2, 3)).toBe(5);
});

test("3 더하기 3은 5가 아니야", () => {
  // expect에 검증할 값을 넣어주고, toBe에 기대되는 값을 넣어줌
  expect(fn.add(3, 3)).not.toBe(5);
});

// 실패
test("3 더하기 3은 5야", () => {
  // expect에 검증할 값을 넣어주고, toBe에 기대되는 값을 넣어줌
  expect(fn.add(3, 3)).toBe(5);
});
