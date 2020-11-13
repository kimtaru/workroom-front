import React, { useState } from 'react';
import { Row, Col, Radio } from 'antd';
import Issue from '../components/Issue';

export default function IssueContainer() {
  //------state 받아오는 곳
  const userNumber = '110110';
  //----------------------

  const [condition, setCondition] = useState('all');
  // 카드는 4장까지 출력
  const issues = [
    {
      name: 'david',
      dept: 'online-marketing',
      agenda: `2021 하반기 아이템 마케팅 전략 회의`,
      date: '2020-11-4',
      attendent: '110110,222023,333232',
    },
    {
      name: 'Ken',
      dept: 'Front-end Developing',
      agenda: `There is a bug on our web-site`,
      date: '2020-11-7',
      attendent: '222321,322233,423212',
    },
    {
      name: 'Kotaro',
      dept: '경영지원실',
      agenda: `we have to complete our report it's remider`,
      date: '2020-11-10',
      attendent: '110110,232323',
    },
    {
      name: 'Choi',
      dept: '기획팀',
      agenda: `2020 하반기 사업 결과 보고회`,
      date: '2020-11-13',
      attendent: '232323,123123,121212,232323,345343',
    },
  ];
  const onChange = (e) => {
    setCondition(e.target.value);
    console.log(condition);
  };
  return (
    <Col flex="3 200px">
      <div id="Container">
        <span className="title">ISSUES</span>
        <span className="radio">
          <Radio.Group
            onChange={onChange}
            name="radiogroup"
            defaultValue="all"
          >
            <Radio value="all">ALL</Radio>
            <Radio value="me">ME</Radio>
          </Radio.Group>
        </span>
      </div>
      <Row>
        {issues.map((issue, idx) => {
          switch (condition) {
            case 'all':
              return (
                <Issue
                  key={idx}
                  name={issue.name}
                  dept={issue.dept}
                  agenda={issue.agenda}
                  date={issue.date}
                  attendent={issue.attendent}
                />
              );
              break;
            case 'me':
              if (
                issue.attendent.indexOf(userNumber) === 0
              ) {
                return (
                  <Issue
                    key={idx}
                    name={issue.name}
                    dept={issue.dept}
                    agenda={issue.agenda}
                    date={issue.date}
                    attendent={issue.attendent}
                  />
                );
              }
              break;
            default:
              return null;
          }
        })}
      </Row>
    </Col>
  );
}
