import React from 'react';
import Table from './Table';
import Title from './Title';

const Visual = () => {
  return (
    <div className='visual'>
      <Title
        title='가이드 및 자습서'
        desc='Jira Software를 구입, 사용 및 커스터마이즈하는 데 필요한 모든 것.'
      />
      <img
        style={{ display: 'inline-block', width: 374, textAlign: 'center' }}
        src='https://wac-cdn.atlassian.com/dam/jcr:a7960549-075b-411c-b61a-285cd071b807/Create,Share-Team%20Onboarding.svg?cdnVersion=1547'
      />
      <Table />
    </div>
  );
};

export default Visual;
