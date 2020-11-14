import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;
export default function FooterContainer() {
  return (
    <Footer
      style={{
        backgroundColor: '#E6E4E4',
      }}
    >
      <div>
        <h4>Contact</h4>
        <div>010-9507-0488</div>
        <div>kimtaru2@gmail.com</div>
        <div>
          https://github.com/kimtaru/workroom-front.git
        </div>
      </div>
    </Footer>
  );
}
