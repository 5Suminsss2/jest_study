import { render, screen } from "@testing-library/react";

import Hello from "./Hello";

// 스냅샷 : 렌더링된 화면과 찍어놓은 화면이 다를 경우를 감지

// name이 있는 경우와 없는 경우로 나눠서 테스트 진행
const user = {
  name: "Mike",
  age: 30,
};

const user2 = {
  age: 30,
};

test("snapshot: name 있음", () => {
  const el = render(<Hello user={user} />);
  expect(el).toMatchSnapshot();
});

test("snapshot: name 없음", () => {
  const el = render(<Hello />);
  expect(el).toMatchSnapshot();
});

test("Hello라는 글자가 포함되는가?", () => {
  render(<Hello user={user} />);
  const helloEl = screen.getByText(/Hello/i);
  expect(helloEl).toBeInTheDocument();
});
