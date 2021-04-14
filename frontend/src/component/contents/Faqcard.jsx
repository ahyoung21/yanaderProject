import React from 'react';

const Faqcard = () => {
  return (
    <>
      <ul>
        <li>
          <img
            style={{ width: 100 }}
            src="https://wac-cdn.atlassian.com/dam/jcr:ede71922-35b1-4429-bcfe-8d0ff7c0acb7/Security.svg?cdnVersion=1548"
            alt=""
          />
          <strong>Jira Software Cloud는 SOC2를 준수하나요?</strong>
          <p>
            Atlassian Cloud는 SOC2 Type II, ISO/IEC 27001, ISO/IEC 27018 및
            PCI를 포함하여 광범위하게 인정되는 표준 및 규정을 준수합니다.
          </p>
          <a href="#">자세히 보기</a>
        </li>
        <li>
          <img
            style={{ width: 100 }}
            src="https://wac-cdn.atlassian.com/dam/jcr:78fb8b00-7733-4e8c-9200-9d6cd016e2e6/Trust%20and%20Security.svg?cdnVersion=1548"
            alt=""
          />
          <strong>Atlassian은 정보 보안 표준을 준수하나요?</strong>
          <p>
            Jira 및 Confluence Cloud는 ISO/IEC 27001 인증을 받았습니다. 보안
            관리 프로그램의 구조에 대한 자세한 내용을 읽고 ISO/IEC 27001
            인증서를 여기에서 또는 Atlassian 규정 준수 페이지에서 다운로드할 수
            있습니다.
          </p>
          <a href="#">자세히 보기</a>
        </li>
        <li>
          <img
            src="https://wac-cdn.atlassian.com/dam/jcr:90bc7f25-5a1f-4a61-973f-fb7a30f54418/Privacy.svg?cdnVersion=1548"
            alt=""
          />
          <strong>데이터가 암호화되어 있나요?</strong>
          <p>
            Atlassian은 TLS를 사용하여 인터넷을 통해 전송 중인 정보를
            보호합니다. Atlassian은 데이터 보호에 대한 지원을 강화하기 위해
            TLS1.2 및 PFS (Perfect Forward Secrecy) 를 구현했습니다.
          </p>
          <a href="#">자세히 보기</a>
        </li>
      </ul>
    </>
  );
};

export default Faqcard;
