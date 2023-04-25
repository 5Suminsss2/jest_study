const fn = require("./fn");

// toEqual과 toStrictEqaul의 차이점
// toStrictEqual이 좀 더 엄격하게 테스트함

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("Mike", 30)).toEqual({
    // 성공
    name: "Mike",
    age: 30,
  });
});

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("Mike", 30)).toStrictEqual({
    // 실패 : gender를 안써주면 실패로 뜨는 strict 모드
    name: "Mike",
    age: 30,
  });
});
