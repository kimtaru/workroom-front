import React from 'react';
import { Col, Avatar, Tooltip } from 'antd';

export default function Issue({
  name,
  dept,
  agenda,
  date,
  attendent,
}) {
  //box-shadow: 1px 1px 4px #f2095a;
  //#Issue:hover {
  //border: 3px solid #09caf2;
  //}
  function testPlay() {
    alert('haha');
  }
  const attdList = attendent.split(',');
  return (
    <Col
      style={{
        minWidth: '200px',
        paddingBottom: '10px',
      }}
      span="6"
    >
      <div id="Issue" onClick={testPlay}>
        <div className="throwerPhoto" />
        <div className="throwerName">{name}</div>
        <div className="throwerDept">{dept}</div>
        <div className="agenda">{agenda}</div>
        <div className="throwDate">{date}</div>
        <div className="attendent-list">
          <Avatar.Group
            maxCount={3}
            size="small"
            maxPopoverPlacement="none"
            maxStyle={{
              color: 'white',
              backgroundColor: 'orange',
            }}
          >
            {attdList.map((attd, idx) => {
              return (
                <Tooltip
                  key={idx}
                  title={attd}
                  placement="top"
                >
                  <Avatar size="small">{attd}</Avatar>
                  {/* 이미지 렌더링 해야함 */}
                </Tooltip>
              );
            })}
          </Avatar.Group>
        </div>
      </div>
    </Col>
  );
}
