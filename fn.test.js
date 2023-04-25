const fn = require("./fn");

// 테스트 전후 작업
// 테스트 전 유저 정보를 db에서 가져와서 테스트 후 db 종료하는 코드 작성하기
// beforeEach, afterEach를 쓰면 각 테스트마다 연결했다가 풀었다가 이러니까 너무 시간이 많이 들어!
// beforeAll, afterAll : 모든 테스트가 시작하기 전과 끝난 후에 1번씩만 호출하는 친구들을 사용하자
let user;

// beforeEach(async () => {
//   user = await fn.connectUserDb();
// });

// afterEach(() => {
//   return fn.disconnectDb();
// });

beforeAll(async () => {
  user = await fn.connectUserDb();
});

afterAll(() => {
  return fn.disconnectDb();
});

test("이름은 Mike야", async () => {
  expect(user.name).toBe("Mike");
});

test("나이는 30", async () => {
  expect(user.age).toBe(30);
});

test("성별은 남성", async () => {
  expect(user.gender).toBe("male");
});
