import React, { useState, useEffect } from 'react';
import Button from '../contents/Button';
import GnbData from '../json/GnbData.json';

const Gnb = () => {
  const [button, setButton] = useState('click!');
  const [data, setData] = useState([]);

  // const onClickButton = useCallback(() => {
  //   setButton('clicked');
  // }, [button]);

  // useEffect(() => {
  //   const newArray = GnbData.map((item, index) => {
  //     return <li key={index}>{item.text}</li>;
  //   });
  //   console.log(newArray);
  // }, []);

  const onClickGetUsers = async () => {
    // await, async 로 비동기 통신
    // let url = 'https://api.github.com/users/ahyoung21';
    // let response = await fetch(url);
    // let infoLists = await response.json();

    // setData(infoLists);

    // Promise then 으로 비동기통신
    console.log('start');
    fetch('https://jsonplaceholder.typicode.com/users') //
      .then((response) => response.json())
      .catch((error) => console.log(error.message))
      .then((userlists) => {
        setData(userlists);
        console.log(userlists);
      });
    console.log('end');
  };

  return (
    <>
      <a
        href='https://www.atlassian.com/ko/software/jira/guides'
        target='_blank'
      >
        <img
          style={{ width: 215 }}
          src='https://wac-cdn.atlassian.com/dam/jcr:e348b562-4152-4cdc-8a55-3d297e509cc8/Jira%20Software-blue.svg?cdnVersion=1547'
        />
      </a>
      <ul>
        {GnbData &&
          GnbData.map((item, index) => {
            return <li key={index}>{item.text}</li>;
          })}
      </ul>
      <Button onClick={onClickGetUsers} buttonTxt={button} />
      <ul>
        {data &&
          data.map((item) => {
            return <li key={item.id}>{item.username}</li>;
          })}
      </ul>
    </>
  );
};

export default Gnb;
