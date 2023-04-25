const fn = require("./fn");

// 테스트 전후 작업
// 초기화가 안되는 변수를 초기화 해야할때 사용하는 beforeEach, afterEach
// beforeEach : 테스트 전
// afterEach : 테스트 후
// beforeEach를 안쓰면 num이 계속 저장되어서 0 1 3 6 10 이렇게 돼버린다

let num = 10;

beforeEach(() => {
  num = 0;
});

test("0 더하기 1은 1이야", async () => {
  num = fn.add(num, 1);
  expect(num).toBe(1);
});

test("0 더하기 2은 2이야", async () => {
  num = fn.add(num, 1);
  expect(num).toBe(1);
});

test("0 더하기 3은 3이야", async () => {
  num = fn.add(num, 1);
  expect(num).toBe(1);
});

test("0 더하기 4은 4이야", async () => {
  num = fn.add(num, 1);
  expect(num).toBe(1);
});
