const fn = require("./fn");

// toBe와 toEqual의 차이점
// toBe 는 객체나 배열은 재귀적으로 돌면서 값을 확인해야하기 때문에 toEqual을 써줘야함
test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("Mike", 30)).toBe({
    // 실패
    name: "Mike",
    age: 30,
  });
});

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("Mike", 30)).toEqual({
    // 성공
    name: "Mike",
    age: 30,
  });
});
