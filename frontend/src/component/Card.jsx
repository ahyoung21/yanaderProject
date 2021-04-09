import React from 'react';

const Card = () => {
  return (
    <>
      <ul>
        <li>
          <img src="https://wac-cdn.atlassian.com/dam/jcr:2ed4d99c-a07c-4795-8212-3452e3e1fd94/book-lightbulb.svg?cdnVersion=1547" />
          <span>1부</span>
          <strong className="card-tit">Jira 개요</strong>
          <p className="card-desc">
            새로운 사용자이거나, 실력이 예전 같지 않거나, 한동안 Jira를 보지
            못한 사용자라면 여기에서 시작하세요. 자신에게 적합한 제품 및 호스팅
            옵션을 확인할 수 있습니다. 또한 Jira 용어에 대한 설명도 있습니다!
          </p>
          <a href="#;" className="btn-move">
            가이드로 이동
          </a>
        </li>
        <li>
          <img src="https://wac-cdn.atlassian.com/dam/jcr:2ed4d99c-a07c-4795-8212-3452e3e1fd94/book-lightbulb.svg?cdnVersion=1547" />
          <span>파트 2</span>
          <strong className="card-tit">빠른 시작 가이드</strong>
          <p className="card-desc">
            이 빠른 시작 가이드의 간단한 6단계로 손쉽게 Jira Software Cloud를
            시작할 수 있습니다.&nbsp;첫 프로젝트를 만들고, 보드를 구축하고, 팀을
            초대해 보세요.&nbsp;
          </p>
          <a href="#;" className="btn-move">
            가이드로 이동
          </a>
        </li>
        <li>
          <img src="https://wac-cdn.atlassian.com/dam/jcr:2ed4d99c-a07c-4795-8212-3452e3e1fd94/book-lightbulb.svg?cdnVersion=1547" />
          <span>3부</span>
          <strong className="card-tit">모범 사례</strong>
          <p className="card-desc">
            이 가이드는 프로젝트에서 워크플로, 신규 사용자에서 관리자에
            이르기까지 Jira Software와 관련된 모든 사항에 대한 모범 사례 목록을
            소개합니다.
          </p>
          <a href="#;" className="btn-move">
            가이드로 이동
          </a>
        </li>
      </ul>
    </>
  );
};

export default Card;
