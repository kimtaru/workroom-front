import React from 'react';
import { Row, Col } from 'antd';
import Issue from '../components/Issue';

export default function IssueContainer() {
  // 카드는 4장까지 출력
  const issues = [
    {
      name: 'david',
      dept: 'online-marketing',
      agenda: `2021 하반기 아이템 마케팅 전략 회의`,
      date: '2020-11-4',
      attendent: 'A,B,C',
    },
    {
      name: 'Ken',
      dept: 'Front-end Developing',
      agenda: `There is a bug on our web-site`,
      date: '2020-11-7',
      attendent: 'A,B,C,E',
    },
    {
      name: 'Kotaro',
      dept: '경영지원실',
      agenda: `we have to complete our report it's remider`,
      date: '2020-11-10',
      attendent: 'A,B',
    },
    {
      name: 'Choi',
      dept: '기획팀',
      agenda: `2020 하반기 사업 결과 보고회`,
      date: '2020-11-13',
      attendent: 'A,B,C,D,E',
    },
  ];
  return (
    <Col flex="3 200px">
      <h4>ISSUES</h4>
      <Row>
        {issues.map((issue, idx) => {
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
        })}
      </Row>
    </Col>
  );
}
