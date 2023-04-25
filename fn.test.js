const fn = require("./fn");

// Mock Function 목 함수
// 목 함수 : 테스트 하기 위해 흉내만 내는 함수
// userDB에 접근해서 user list를 select 해오는 작업이 필요
// mockFn.mock.calls의 mock은 호출되었던 property가 저장되어있음
// => 알 수 있는 것 : 함수가 몇번 호출되었는지, 호출될때 전달된 인수는 무엇인가

const mockFn = jest.fn();

mockFn();
mockFn(1);

test("함수는 2번 호출됩니다.", () => {
  expect(mockFn.mock.calls.length).toBe(2);
});

test("2번째로 호출된 함수에 전달된 첫번째 인수는 1 입니다.", () => {
  expect(mockFn.mock.calls[1][0]).toBe(1);
});
