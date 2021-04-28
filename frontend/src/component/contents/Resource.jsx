import React, { useState, useEffect } from 'react';

const Resource = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('렌더링, 리렌더링 될때마다 실행 됩니다.');
  });

  return (
    <>
      <section className="section-resource">
        <div className="resource-box">
          <strong>
            함수형 컴포넌트 ({number})
            <button onClick={() => setNumber(number + 1)}>+</button>
            <button onClick={() => setNumber(number - 1)}>-</button>
          </strong>
          <p>
            이러한 리소스를 즐겨찾기에 연결하여 동료 Jira Software 사용자와 연결
            상태를 유지하고, Jira Software Cloud의 새로운 기능에 대한 지속적인
            업데이트 및 최신 설명서를 받으십시오.
          </p>
          <ul>
            <li>
              기술문서 및 매뉴얼 <a href="#">자세히 보기</a>
            </li>
            <li>
              Jira 커뮤니티 <a href="#">자세히 보기</a>
            </li>
            <li>
              새 소식 보기 <a href="#">자세히 보기</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Resource;
