import React, { useEffect } from 'react';

export default function TestComponent({
  sample,
  loading,
  error,
  getSample,
}) {
  useEffect(() => {
    getSample();
  }, [getSample]);

  console.log('aaa', sample);
  return (
    <div>
      <h1>asd</h1>
    </div>
  );
}
