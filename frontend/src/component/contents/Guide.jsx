import React from 'react';
import Title from './Title';
import GuideData from '../json/GuideData.json';

const Guide = () => {
  return (
    <>
      <section className="section-guide">
        <Title
          title="Jira Software 알아보기 - 자습서 및 관리자 가이드"
          desc="Jira Software 사용법 알아보기 및 팀 교육"
        />
        <dl>
          <dt>
            <img
              src="https://wac-cdn.atlassian.com/dam/jcr:f79ec55e-02d6-42ad-a994-fcce2cd1dab1/dev-tools-ticketview.png?cdnVersion=1553"
              alt=""
            />
          </dt>
          <dd>
            <ul>
              {GuideData &&
                GuideData.map((item) => {
                  return (
                    <li key={item.id}>
                      <strong>{item.title}</strong>
                      <a href="#">{item.content}</a>
                    </li>
                  );
                })}
            </ul>
          </dd>
        </dl>
      </section>
    </>
  );
};

export default Guide;
