import './App.css';
import Gnb from './component/layout/Gnb';
import Visual from './component/contents/Visual';
import Card from './component/contents/Card';
import Guide from './component/contents/Guide';
import Faqcard from './component/contents/Faqcard';
import Resource from './component/contents/Resource';
import Footer from './component/layout/Footer';
import Title from './component/contents/Title';

function App() {
  return (
    <>
      <Gnb />
      <Visual />
      <Card />
      <Guide />
      <Title
        title={'상위 FAQ: Jira Software Cloud가 나에게 도움이 될까요?'}
        desc={
          '클라우드 개인 정보 보호, 보안, 안정성 및 규정 준수에 대한 Atlassian의 상위 FAQ를 확인하세요. 규정 준수 인증 및 세부 정보는 신뢰 사이트 를 참조하세요.'
        }
      />
      <Faqcard />
      <Resource />
      <Footer />
    </>
  );
}

export default App;
