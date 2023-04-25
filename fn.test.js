const fn = require("./fn");

// Mock Function 목 함수
// mockReturnValueOnce 활용해보자 -> 홀짝 구분하기 (따로 callback 함수 만들지 않고 mockFn으로 사용해보자)

const mockFn = jest.fn();

mockFn
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValue(true);

const result = [1, 2, 3, 4, 5].filter((num) => mockFn(num));

test("홀수는 1,3,5", () => {
  expect(result).toStrictEqual([1, 3, 5]);
});
