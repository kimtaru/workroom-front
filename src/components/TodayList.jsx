import React, { useState } from 'react';
import { Row, Col, Progress, Checkbox } from 'antd';
export default function TodayList() {
  const [checked, setChecked] = useState(false);
  const [percent, setPercent] = useState(0);
  const onChange = (e) => {
    console.log(e.target.checked);
    setChecked(e.target.checked);
  };

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
              <li>
                미팅 어레인지
                <Checkbox
                  checked={checked}
                  onChange={onChange}
                  style={{ float: 'right' }}
                />
              </li>
              <li>
                시안 컨펌{' '}
                <Checkbox style={{ float: 'right' }} />
              </li>
              <li>
                결산보고{' '}
                <Checkbox style={{ float: 'right' }} />
              </li>
              <li>
                회식 장소 예약{' '}
                <Checkbox style={{ float: 'right' }} />
              </li>
              <li>
                제안서 작성{' '}
                <Checkbox style={{ float: 'right' }} />
              </li>
              <li>
                업무 인수인계{' '}
                <Checkbox style={{ float: 'right' }} />
              </li>
              <li>
                지출결의{' '}
                <Checkbox style={{ float: 'right' }} />
              </li>
              {/* 리스트 7개가 맥스 그 이후로 페이징 처리  */}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}
