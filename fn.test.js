const fn = require("./fn");

// Mock Function 목 함수
// 유저 생성하는 테스트를 할때 매번 유저 생성하고 롤백하고 이러기 귀찮잖아 그럴때 mock을 사용하자

jest.mock("./fn");

// 가짜 createUser가 return 해줘서 실제 db에 반영x
fn.createUser.mockReturnValue({ name: "Mike" });

test("유저를 만든다", () => {
  const user = fn.createUser("Mike");
  expect(res.name).toBe("Mike");
});
