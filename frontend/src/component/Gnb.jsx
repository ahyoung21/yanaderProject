import React from 'react';

const Gnb = () => {
  return (
    <div>
      <a
        href="https://www.atlassian.com/ko/software/jira/guides"
        target="_blank"
      >
        <img src="https://wac-cdn.atlassian.com/dam/jcr:e348b562-4152-4cdc-8a55-3d297e509cc8/Jira%20Software-blue.svg?cdnVersion=1547" />
      </a>
      <ul>
        <li>특징</li>
        <li>제품 가이드</li>
        <li>가격</li>
        <li>Enterprise</li>
      </ul>
      <button className="btn">무료로 시작</button>
    </div>
  );
};

export default Gnb;
