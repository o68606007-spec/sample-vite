import React, { useState, useEffect } from "react";
import "./App.css";
import { getAllTodos } from "../utils/supabasefunctions";
import { supabase } from "../utils/supabase";

export const App = () => {
  const [studyContent, setStudyContent] = useState("");
  const [studyTime, setStudyTime] = useState();
  const [records, setRecords] = useState([]);
  const [error, setError] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const defaultContent = studyContent == "" && studyTime == 0;

  const studyContents = (event) => {
    setStudyContent(event.target.value);
  };

  const studyTimes = (event) => {
    const newStudyTimes = parseInt(event.target.value);
    setStudyTime(newStudyTimes);
  };

  const fetchData = async () => {
    const { data, error } = await supabase.from("study-record").select("*");
    if (error) {
      console.error("データ取得エラー:", error);
      return;
    }
    setRecords(data);
  };

  const addContent = async () => {
    if (defaultContent) {
      setError("入力されていない項目があります");
    } else {
      setError("");
      const { data, error } = await supabase
        .from("study-record")
        .insert([{ studyContent, studyTime }]);
      if (error) {
        console.error("Error:2", error);
        return;
      }
      const newRecord = [...records, { studyContent, studyTime }];
      await fetchData();
      setRecords(newRecord);
      setStudyContent("");
      setStudyTime(0);
    }
  };

  const deleteContent = async (id) => {
    const newRecords = [...records];
    newRecords.splice(id, 1);
    setRecords(newRecords);
    const { error } = await supabase
      .from("study-record")
      .delete()
      .match({ id });
    if (error) {
      console.error("Error:3", error);
      return;
    }
    setTodos((prevRecords) => prevRecords.filter((todos) => todos.id !== id));
  };

  useEffect(() => {
    const getTodos = async () => {
      setIsLoading(true);
      const todos = await getAllTodos();
      setTodos(todos);
      setIsLoading(false);
      console.log(todos);
    };
    getTodos();
  }, []);

  if (loading) {
    return (
      <>
        <p>Loading</p>
      </>
    );
  }

  return (
    <div>
      <h1>学習記録一覧</h1>
      学習内容
      <input onChange={studyContents} value={studyContent} />
      学習時間
      <input type="number" onChange={studyTimes} value={studyTime} />
      時間
      <p>入力されている学習内容:{studyContent}</p>
      <p>入力されている時間:{studyTime} 時間</p>
      {todos.map((todo) => {
        return (
          <>
            <div key={todo.id}>
              <li>{todo.studyContent}</li>
              <button
                onClick={() => {
                  deleteContent(todo.id);
                }}
              >
                削除
              </button>
              <li>{todo.studyTime}</li>
            </div>
          </>
        );
      })}
      <button onClick={addContent}>登録</button>
      <ul>
        {records.map((record) => {
          return (
            <li key={record.studyContent}>
              {error && <p>{error}</p>}
              {record.studyContent}, {record.studyTime}時間
            </li>
          );
        })}
        <p>
          合計時間:{" "}
          {todos.reduce((total, todo) => {
            return total + parseInt(todo.studyTime);
          }, 0)}
          /1000時間
        </p>
      </ul>
    </div>
  );
};
