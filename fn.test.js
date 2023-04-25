const fn = require("./fn");

// 테스트 전후 작업
// 여러 db를 가져와야할 경우 테스트 전후 작업을 해보자
// describe를 사용했을 때 각 순서 어떻게 진행되는지 체크해보자
// beforeAll과 afterAll은 describe 내에서만 작동하게 됨
// befroeEach는 describe내부의 beforeEach보다 밖의 beforeEach가 먼저 실행됨 (afterEach도 반대)

beforeAll(async () => {
  console.log("밖 befroeAll"); // 1
});

beforeEach(() => {
  console.log("밖 beforeEach"); //2, 6
});

afterAll(() => {
  console.log("밖 afterAll"); // 마지막
});

afterEach(async () => {
  console.log("밖 afterEach"); // 4
});

test("0+1=1", async () => {
  expect(fn.add(0, 1)).toBe(1); // 3
});

// decribe로 하나로 뭉칠 수 있음
decribe("Car 관련 작업", () => {
  beforeAll(async () => {
    console.log("안 befroeAll"); // 5
  });

  beforeEach(() => {
    console.log("안 beforeEach"); // 7
  });

  afterEach(async () => {
    console.log("안 afterEach"); // 9
  });

  afterAll(() => {
    console.log("안 afterAll"); // 마지막 -1
  });

  test("0+1=1", async () => {
    expect(fn.add(0, 1)).toBe(1); // 8
  });
});
