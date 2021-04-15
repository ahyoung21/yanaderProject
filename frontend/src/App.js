import './App.css';
import Gnb from './component/layout/Gnb';
import Visual from './component/contents/Visual';
import Card from './component/contents/Card';
import Guide from './component/contents/Guide';
import Faqcard from './component/contents/Faqcard';
import Resource from './component/contents/Resource';
import ResourceC from './component/contents/ResourceC';
import Footer from './component/layout/Footer';

function App() {
  return (
    <>
      <Gnb />
      <Visual />
      <Card />
      <Guide />
      <Faqcard />
      <Resource />
      <ResourceC />
      <Footer />
    </>
  );
}

export default App;
