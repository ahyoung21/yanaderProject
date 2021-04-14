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
      <Title
        title={'Jira Software 시작하기'}
        desc={
          'Jira Software 초보에서 히어로를 만들어주는 개인 가이드입니다. 전에 Jira Software를 사용해 본 적이 있는 분도, Jira Software에 대해 들어본 적이 없는 분도 올바른 제품을 선택하고, 제품을 설치하고, 모범 사례를 배울 수 있도록 안내해 드립니다. 단단히 준비하고 함께 시작해 보세요!'
        }
      />
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
