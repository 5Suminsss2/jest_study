import Timer from "./Timer";

// 스냅샷을 해도 매번 초가 바뀌어서 에러가 날 가능성이 엄청 높다.
// 계속 바뀔 가능성이 많은 것들은 mock 함수를 만들어 하나로 고정하자

test("초 표시", () => {
  Date.now = jest.fn(() => 12345); // 테스트할때만 숫자 고정
  const el = render(<Timer />);
  expect(el).toMatchSnapshot();
});
