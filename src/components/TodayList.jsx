import React, { useState } from 'react';
import { Row, Col, Progress, Checkbox } from 'antd';
import Todo from './Todo';
import { useEffect } from 'react';
export default function TodayList({
  todos,
  loading,
  error,
  getTodos,
  modifyTodos,
}) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  useEffect(() => {
    let cnt = 0;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].complete === true) {
        cnt++;
      }
    }
    const x = (100 / todos.length) * cnt;
    setPercent(Math.floor(x));
  });

  return (
    <div className="compDiv" id="ShowProgress">
      <Row>
        <Col span={11}>
          <div className="graph">
            <div className="circleProgress">
              <Progress
                type="circle"
                percent={percent}
                width={150}
              />
            </div>
          </div>
        </Col>
        <Col span={13}>
          <div className="checkList">
            <ul>
              {/* li component화 props를 받는 */}
              {todos.map((todo, idx) => {
                return (
                  <Todo
                    modifyTodos={modifyTodos}
                    todo={todo.todo}
                    complete={todo.complete}
                    todoId={idx}
                    key={idx}
                  />
                );
              })}

              {/* 리스트 7개가 맥스 그 이후로 페이징 처리  */}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}
