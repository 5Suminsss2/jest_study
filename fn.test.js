const fn = require("./fn");

// Mock Function 목 함수
// mockResolvedValue : 비동기 함수를 흉내낼 수 있음

const mockFn = jest.fn();

mockFn.mockResolvedValue({ name: "Mike" });

test("홀수는 1,3,5", () => {
  mockFn().then((res) => {
    expect(res.name).toBe("Mike");
  });
});
