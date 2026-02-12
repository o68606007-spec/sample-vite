const mockTodos = [{ id: 1, studyContent: "記録6", studyTime: 4 }];

jest.mock("../../utils/supabasefunctions", () => ({
  getAllTodos: jest.fn(() => Promise.resolve(mockTodos)),
}));

jest.mock("../../utils/supabase", () => ({
  supabase: {
    from: jest.fn(() => ({
      delete: jest.fn(() => ({
        match: jest.fn().mockResolvedValue({ error: null }),
      })),
      select: jest.fn().mockResolvedValue({ data: [], error: null }),
      insert: jest.fn().mockResolvedValue({ data: [{}], error: null }),
    })),
  },
}));

// import Test from "../Test";
import { App } from "../App";
import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthWeakPasswordError } from "@supabase/supabase-js";
// jest.mock("../../utils/supabasefunctions.ts", () => {
//   const data = [
//     { id: 1, title: "dummy", time: 1 },
//     { id: 2, title: "dummy2", time: 2 },
//   ];

//   return {
//     supabase: {
//       from: jest.fn(() => ({
//         select: jest.fn(() => {
//           return Promise.resolve({
//             data: data,
//             error: null,
//           });
//         }),
//         insert: jest.fn((newItem) => {
//           newItem.id = 2;
//           data = [...data, newItem];
//           return Promise.resolve({
//             data: newItem,
//             error: null,
//           });
//         }),
//         delete: jest.fn(() => {
//           return {
//             eq: jest.fn((key, value) => {
//               data = data.filter((item) => item[key] !== value);
//               return Promise.resolve({
//                 data: data,
//                 error: null,
//               });
//             }),
//           };
//         }),
//       })),
//     },
//   };
// });

beforeEach(() => {
  cleanup();
});
afterEach(() => {
  cleanup();
});
describe("Test", () => {
  test("タイトルが学習記録一覧であること", async () => {
    // testId(title)を指定して取得
    render(<App />);
    const title = await screen.findByTestId("title");
    expect(title).toHaveTextContent("学習記録一覧");
    screen.debug();
  });

  test("登録", async () => {
    render(<App />);

    // 初期の記録数を取得
    const initialItems = screen.queryAllByTestId("study-item").length;

    const user = userEvent.setup();
    const topicInput = await screen.findByTestId("topic-input");
    const timeInput = await screen.findByTestId("time-input");
    const button = screen.getByRole("button", { name: "登録" });

    await user.type(topicInput, "記録4");
    await user.type(timeInput, "5");
    await user.click(button);

    const updateItems = await screen.findAllByTestId("study-item");
    expect(updateItems.length).toBe(initialItems + 1);
  });

  test("削除", async () => {
    render(<App />);

    // 初期の記録数を取得
    // const initialItems = screen.queryAllByTestId("study-item").length;

    const user = userEvent.setup();

    expect(await screen.findByText("記録6")).toBeInTheDocument();
    const button = screen.getAllByRole("button", { name: "削除" });

    await user.click(button[0]);
    await waitFor(() => {
      expect(screen.queryByText("記録6")).not.toBeInTheDocument();
    });

    // const updateItems = await screen.findAllByTestId("study-item");
    // expect(updateItems.length).toBe(initialItems - 1);
  });

  test("入力されていない項目があります", async () => {
    render(<App />);
    const user = userEvent.setup();
    const topicInput = await screen.findByTestId("topic-input");
    const timeInput = await screen.findByTestId("time-input");
    const button = screen.getByRole("button", { name: "登録" });

    await user.type(topicInput, "記録6");
    await user.clear(timeInput);
    // await user.type(timeInput, "");
    await user.click(button);
    expect(await screen.findByTestId("error")).toHaveTextContent(
      "入力されていない項目があります",
    );
    screen.debug();
  });
});
