const fn = require("./fn");

// 사용자가 입력한 값이 글자수를 초과하거나 미만일 때 주로 사용,
// 파일의 크기 적당한지 판별할 때도 사용
// toBeGreaterThan : 크다
// toBeGreaterTahnOrEqual : 크거나 같다
// toBeLessThan : 작다
// toBeLessThanOrEqual : 작거나 같다
// toBeCloseTo : 0.1+0.2 = 0.30000004 이렇게 나와서 fail처리하는 걸 막아줌 (값이 가까운지, 근사치인지 판별)
// toMatch : 정규 표현식으로 해당 글자가 포함되어있는지 확인하기
// toContain : 배열에 해당 요소가 있는지 판별하기
// toThrow : 어떤 상황이든 예외가 발생하면 pass 함 + toThorw()안에 값을 넣어서 원하는 에러가 나오는지 판단 가능
// 추가 : https://jestjs.io/docs/en/expect

test("ID는 10자 이하여야 합니다", () => {
  const id = "THE_BLACK_ORDER";
  expect(id.length.toBeLessThanOrEqual(10));
});

test("비밀번호 4자리", () => {
  const pw = "1234";
  expect(pw.length).toBe(4);
});

test("비밀번호 4자리", () => {
  const pw = "1234";
  expect(pw.length).toEqual(4);
});

test("0.1 + 0.2 = 0.3 이다", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("Hello world에 a라는 글자가 있어?", () => {
  expect("Hello World").toMatch(/a/);
});

test("유저 리스트에 mike가 있어?", () => {
  const user = "mike";
  const userList = ["tom", "mike", "kai"];
  expect(userList).toContain(user);
});

test("이거 에러가 나요?", () => {
  expect(() => fn.throwErr()).toThrow("xx"); // xx를 집어넣으면 fail, 왜냐하면 oo로 에러메시지를 뱉어내고 있기 때문에 xx말고 oo를 쓰면 pass 된다.
});
