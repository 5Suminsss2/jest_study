const fn = require("./fn");

// 비동기 코드 테스트
// promise 형태의 비동기 테스트일 경우, jest는 promise가 리턴되면 resolve될 때까지 기다려줌
// done 해줄 필요x (callback 형태일 경우만 done넘겨주기)
// promise를 사용하면 return 꼭 해줘야함

test("3초 후에 받아온 나이는 30", (done) => {
  return fn.getAge().then((age) => {
    expect(age).toBe(30);
  });
  // return expect(fn.getAge()).resolves.toBe(30); // 더 간결하게 resolve 테스트하는 방법
});
