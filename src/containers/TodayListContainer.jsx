import React, { useCallback } from 'react';
import { Col } from 'antd';
import TodayList from '../components/TodayList';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  startGetTodos,
  startModifyTodos,
} from '../redux/modules/content';

export default function TodayListContainer() {
  const dateInstance = new Date();
  const dayArray = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  const month = dateInstance.getMonth() + 1;
  const date = dateInstance.getDate();
  const day = dateInstance.getDay();
  const today = month + '.' + date + ' ' + dayArray[day];
  const Current = styled.span`
    padding-left: 5px;
    font-size: 15px;
  `;

  const { todos, loading, error } = useSelector(
    (state) => state.content,
  );

  const dispatch = useDispatch();

  const getTodos = useCallback(() => {
    dispatch(startGetTodos());
  }, [dispatch]);

  const modifyTodos = useCallback(
    (idx, checked) => {
      dispatch(startModifyTodos(idx, checked));
    },
    [dispatch],
  );

  return (
    <Col
      flex="1 250px"
      style={
        {
          //border: '1px solid black',
        }
      }
    >
      <div id="Container">
        <span className="title">
          TODAY
          <Current>
            {`(`}
            {today}
            {`)`}
          </Current>
        </span>
        <TodayList
          todos={todos}
          loading={loading}
          error={error}
          getTodos={getTodos}
          modifyTodos={modifyTodos}
        />
      </div>
    </Col>
  );
}
