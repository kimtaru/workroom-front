import React, { useState, useEffect } from 'react';
import { Checkbox } from 'antd';

export default function Todo({
  todo,
  complete,
  modifyTodos,
  todoId,
}) {
  const [checked, setChecked] = useState(false);

  const onChange = (e) => {
    const reversedCheck = e.target.checked;
    setChecked(e.target.checked);
    modifyTodos({ todoId, reversedCheck });
  };

  useEffect(() => {
    setChecked(complete);
  }, []);

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
