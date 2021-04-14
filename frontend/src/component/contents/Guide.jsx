import React from 'react';
import Title from './Title';

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
              <li>
                <strong>Jira Software Cloud 데모</strong>
                <a href="#">
                  Jira Software Cloud 시작하는 방법 알아보기(실시간 Q&A 옵션
                  제공)
                </a>
              </li>
              <li>
                <strong>애자일 자습서</strong>
                <a href="#">
                  이 자습서를 통해 Jira Software Cloud 클래식 프로젝트의
                  애자일에 대해 알아보기
                </a>
              </li>
              <li>
                <strong>Jira 관리</strong>
                <a href="#">
                  무료 Jira 관리자 가이드를 살펴보거나 Atlassian의 관리자 인증
                  과정 수강하기
                </a>
              </li>
            </ul>
          </dd>
        </dl>
      </section>
    </>
  );
};

export default Guide;
