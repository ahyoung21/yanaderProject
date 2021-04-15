import React from 'react';

class ResourceC extends React.Component {
  state = {
    number: 0,
  };
  componentDidMount() {
    console.log('컴포넌트가 첫 렌더링된 후 componentDidMount 함수 실행!');
  }
  componentDidUpdate() {
    console.log('리렌더링이 되었어요. componentDidUpdate 함수 실행!');
  }
  componentWillUnmount() {
    console.log(
      '컴포넌트가 제거되기 직전에 실행되는 componentWillUnmount 함수입니다.'
    );
  }
  handleClickIncrement = () => {
    this.setState((state) => ({
      number: state.number + 1,
    }));
  };
  handleClickDecrement = () => {
    this.setState((state) => ({
      number: state.number - 1,
    }));
  };
  render() {
    return (
      <>
        <section className="section-resource">
          <div className="resource-box">
            <strong>
              클래스형 컴포넌트 ({this.state.number})
              <button onClick={this.handleClickIncrement}>+</button>
              <button onClick={this.handleClickDecrement}>-</button>
            </strong>
            <p>
              이러한 리소스를 즐겨찾기에 연결하여 동료 Jira Software 사용자와
              연결 상태를 유지하고,
              <br /> Jira Software Cloud의 새로운 기능에 대한 지속적인 업데이트
              및 최신 설명서를 받으십시오.
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
  }
}

export default ResourceC;
