const fn = require("./fn");

// Mock Function 목 함수
// callback함수를 사용하지 않고 목함수를 이용해도 잘 동작하고 코드도 간결해짐
// mock.results에는 return 된 값이 남아있음
// mockReturnValue : 실행할때마다 각각 다른 리턴값을 내줌
// mockReturnValueOnce : 중간에 return 값을 바꿀때 사용

// 목함수 생성
const mockFn = jest.fn((num) => num + 1);

mockFn
  .mockReturnValueOnce(10)
  .mockReturnValueOnce(20)
  .mockReturnValueOnce(30)
  .mockReturnValue(40);

mockFn();
mockFn();
mockFn();
mockFn();

test("10에서 1 증가한 값이 반환됨 ", () => {
  expect(mockFn.mock.results[0].value).toBe(11);
});

test("20에서 1 증가한 값이 반환됨 ", () => {
  expect(mockFn.mock.results[1].value).toBe(21);
});
test("30에서 1 증가한 값이 반환됨 ", () => {
  expect(mockFn.mock.results[2].value).toBe(31);
});
