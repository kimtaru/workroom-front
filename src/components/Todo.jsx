import React, { useState, useEffect } from 'react';
import { Checkbox } from 'antd';

export default function Todo({ todo, complete }) {
  const [checked, setChecked] = useState(0);

  const onChange = (e) => {
    setChecked(e.target.checked);
    //서버를 가서 값을 수정함
  };

  useEffect(() => {
    setChecked(complete);
  }, [complete]);

  return (
    <li>
      {todo}
      <Checkbox
        checked={checked}
        onChange={onChange}
        style={{ float: 'right' }}
      />
    </li>
  );
}
