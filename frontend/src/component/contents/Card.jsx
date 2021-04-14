import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Title from './Title';

const Card = () => {
  const [data, setData] = useState(null);

  // const handleClick = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
  //     setData(response.data);
  //   });
  // };

  const handleClick = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setData(response.data);
    } catch (e) {
      console.log('error');
    }
  };

  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch(new Error('error'));
  // }, []);

  // const handleClick = (number) => {
  //   console.log('hi');
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const result = number + 10;
  //       resolve(result);
  //     }, 1000);
  //   });
  // };

  // handleClick();
  // console.log(typeof data);
  return (
    <div className='card'>
      <Title
        title={'Jira Software 시작하기'}
        desc={
          'Jira Software 초보에서 히어로를 만들어주는 개인 가이드입니다. 전에 Jira Software를 사용해 본 적이 있는 분도, Jira Software에 대해 들어본 적이 없는 분도 올바른 제품을 선택하고, 제품을 설치하고, 모범 사례를 배울 수 있도록 안내해 드립니다. 단단히 준비하고 함께 시작해 보세요!'
        }
      />
      <ul>
        {data &&
          data.map((item) => {
            return (
              <li key={item.id}>
                <img src='https://wac-cdn.atlassian.com/dam/jcr:2ed4d99c-a07c-4795-8212-3452e3e1fd94/book-lightbulb.svg?cdnVersion=1547' />
                <strong>{item.key}</strong>
                <p>{item.title}</p>
                <a href='#;' className='btn-move'>
                  가이드로 이동
                </a>
              </li>
            );
          })}
      </ul>
      <button onClick={handleClick}>api불러오기</button>
    </div>
  );
};

export default Card;
