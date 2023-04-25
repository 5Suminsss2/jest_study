const fn = require("./fn");

// 비동기 코드 테스트
// async 형태의 비동기 테스트일 경우, jest는 promise가 리턴되면 resolve될 때까지 기다려줌
// done 해줄 필요x (callback 형태일 경우만 done넘겨주기)
// return 대신 await를 씀

test("3초 후에 받아온 나이는 30", async () => {
  //   const age = await fn.getAge();
  //   expect(age).toBe(30);
  await expect(fn.getAge()).resolves.toBe(30);
});
