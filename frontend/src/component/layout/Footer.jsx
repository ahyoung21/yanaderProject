import React from 'react';
// import axios from 'axios';

const footerInfo = [
  {
    title: '제품',
    list: [
      { link: '제품링크1', title: 'Jira Software' },
      { link: '제품링크2', title: 'Jira Align' },
      { link: '제품링크3', title: 'Jira Service Management' },
      { link: '제품링크4', title: 'Confluence' },
      { link: '제품링크5', title: 'Trello' },
      { link: '제품링크6', title: 'Bitbucket' },
      { link: '제품링크7', title: '모든 제품 보기' },
    ],
  },
  {
    title: '리소스',
    list: [
      { link: '리소스링크1', title: 'Jira Software' },
      { link: '리소스링크2', title: '기술 지원' },
      { link: '리소스링크3', title: '구매 및 라이센싱' },
      { link: '리소스링크4', title: 'Atlassian 커뮤니티' },
      { link: '리소스링크5', title: '지식 베이스' },
      { link: '리소스링크6', title: '내 계정' },
      { link: '리소스링크7', title: '지원 티켓 생성하기' },
    ],
  },
  {
    title: '확장 및 학습',
    list: [
      { link: '확장 및 학습 링크1', title: '파트너' },
      { link: '확장 및 학습 링크2', title: '교육 및 인증' },
      { link: '확장 및 학습 링크3', title: '기술문서 및 매뉴얼' },
      { link: '확장 및 학습 링크4', title: '개발자 리소스' },
      { link: '확장 및 학습 링크5', title: '구매 관련 FAQ' },
      { link: '확장 및 학습 링크6', title: 'Enterprise 서비스' },
      { link: '확장 및 학습 링크7', title: '모든 리소스 보기' },
    ],
  },
];

const Footer = () => {
  // const menus = ['Menu1', 'Menu2', 'Menu3', 'Menu4'];
  // const menuList = menus.map((menu, index) => <li key={index}>{menu}</li>);

  // function FooterList(props) {
  //   const footerInfo = props.footerInfo;
  //   const listItems = footerInfo.map((item, index) => (
  //     <li key={index}>
  //       <strong>{item.title}</strong>
  //     </li>
  //   ));
  //   return <ul>{listItems}</ul>;
  // }

  // {people.filter(person => person.age < 60).map(filteredPerson => (
  //   <li>
  //     {filteredPerson.name}
  //   </li>
  // ))}

  function ListItem(props) {
    const footerInfo = props.footerInfo;
    return (
      <li>
        <strong>{props.title}</strong>
        <ul>
          <a href={props.link}>{props.menuName}</a>
        </ul>
      </li>
    );
  }

  function FooterList(props) {
    const footerInfo = props.footerInfo;
    const listItems = footerInfo.map((item, index) => {
      <ListItem
        key={index}
        title={item.title}
        link={item.list[1].link}
        menuName={item.list[1].title}
      />;
    });
    return <ul>{listItems}</ul>;
  }

  return (
    <>
      <footer>
        <div className="inner">
          <h1>
            <a href="#">ATLASSIAN</a>
          </h1>
          <ul>
            <li>
              <strong>제품</strong>
              <ul>
                <li>
                  <a href="#">Jira Software</a>
                </li>
                <li>
                  <a href="#">Jira Align</a>
                </li>
                <li>
                  <a href="#">Jira Service Management</a>
                </li>
                <li>
                  <a href="#">Confluence</a>
                </li>
                <li>
                  <a href="#">Trello</a>
                </li>
                <li>
                  <a href="#">Bitbucket</a>
                </li>
                <li>
                  <a href="#">모든 제품 보기</a>
                </li>
              </ul>
            </li>
            <li>
              <strong>리소스</strong>
              <ul>
                <li>
                  <a href="#">Jira Software</a>
                </li>
                <li>
                  <a href="#">기술 지원</a>
                </li>
                <li>
                  <a href="#">구매 및 라이센싱</a>
                </li>
                <li>
                  <a href="#">Atlassian 커뮤니티</a>
                </li>
                <li>
                  <a href="#">지식 베이스</a>
                </li>
                <li>
                  <a href="#">내 계정</a>
                </li>
                <li>
                  <a href="#">지원 티켓 생성하기</a>
                </li>
              </ul>
            </li>
            <li>
              <strong>확장 및 학습</strong>
              <ul>
                <li>
                  <a href="#">파트너</a>
                </li>
                <li>
                  <a href="#">교육 및 인증</a>
                </li>
                <li>
                  <a href="#">기술문서 및 매뉴얼</a>
                </li>
                <li>
                  <a href="#">개발자 리소스</a>
                </li>
                <li>
                  <a href="#">구매 관련 FAQ</a>
                </li>
                <li>
                  <a href="#">Enterprise 서비스</a>
                </li>
                <li>
                  <a href="#">모든 리소스 보기</a>
                </li>
              </ul>
            </li>
            <li>
              <strong>ATLASSIAN 소개</strong>
              <ul>
                <li>
                  <a href="#">회사</a>
                </li>
                <li>
                  <a href="#">구직</a>
                </li>
                <li>
                  <a href="#">이벤트</a>
                </li>
                <li>
                  <a href="#">블로그</a>
                </li>
                <li>
                  <a href="#">투자자 관계</a>
                </li>
                <li>
                  <a href="#">신뢰 및 보안</a>
                </li>
                <li>
                  <a href="#">연락처</a>
                </li>
              </ul>
            </li>
          </ul>
          <FooterList footerInfo={footerInfo} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
