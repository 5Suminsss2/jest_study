const fn = require("./fn");

// 비동기 코드 테스트
// done을 인자로 받아와서 호출하면 비동기 코드 테스트 가능 (안쓰면 1초만에 pass 하고 난리남)

test("3초 후에 받아온 이름은 Mike", (done) => {
  function callback(name) {
    expect(name).toBe("Mike");
    done();
  }
  fn.getName(callback);
});
