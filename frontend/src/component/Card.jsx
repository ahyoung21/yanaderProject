import React, { useState } from 'react';
import axios from 'axios';

const Card = () => {
  const [data, setData] = useState(null);

  const handleClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setData(response.data);
    });
  };

  // handleClick();
  return (
    <>
      <ul>
        {data &&
          data.map((item) => {
            return (
              <li key={item.id}>
                <img src="https://wac-cdn.atlassian.com/dam/jcr:2ed4d99c-a07c-4795-8212-3452e3e1fd94/book-lightbulb.svg?cdnVersion=1547" />
                <strong>{item.key}</strong>
                <p>{item.title}</p>
                <a href="#;" className="btn-move">
                  가이드로 이동
                </a>
              </li>
            );
          })}
      </ul>
      <button onClick={handleClick}>api불러오기</button>
    </>
  );
};

export default Card;
