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
        title={'아래는 카드 컴포넌트입니다.'}
        desc={
          'api 불러오기 버튼을 클릭하면 비동기 방식으로 데이터를 받아옵니다'
        }
      />
      <Card />
      <Guide />
      <Faqcard />
      <Resource />
      <Title
        title={'아래는 푸터 컴포넌트입니다.'}
        desc={
          '로컬 제이슨 파일을 이용해 비동기로 푸터 리스트의 데이터를 받아옵니다'
        }
      />
      <Footer />
    </>
  );
}

export default App;
