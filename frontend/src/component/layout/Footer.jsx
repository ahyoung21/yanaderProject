import React, { useState, useEffect } from 'react';
import FooterData from '../json/FooterData.json';

const Footer = () => {
  const [data, setData] = useState([]);
  return (
    <>
      <footer>
        <div className="inner">
          <h1>
            <a href="#">ATLASSIAN</a>
          </h1>
          <ul>
            {FooterData &&
              FooterData.map((item, index) => {
                return (
                  <li key={index}>
                    <strong>{item.menuName}</strong>
                    <ul>
                      <li>
                        <a href={item.list[0].link}>
                          {item.list[0].subMenuName}
                        </a>
                      </li>
                      <li>
                        <a href={item.list[1].link}>
                          {item.list[1].subMenuName}
                        </a>
                      </li>
                      <li>
                        <a href={item.list[2].link}>
                          {item.list[2].subMenuName}
                        </a>
                      </li>
                      <li>
                        <a href={item.list[3].link}>
                          {item.list[3].subMenuName}
                        </a>
                      </li>
                      <li>
                        <a href={item.list[4].link}>
                          {item.list[4].subMenuName}
                        </a>
                      </li>
                      <li>
                        <a href={item.list[5].link}>
                          {item.list[5].subMenuName}
                        </a>
                      </li>
                      <li>
                        <a href={item.list[6].link}>
                          {item.list[6].subMenuName}
                        </a>
                      </li>
                    </ul>
                  </li>
                );
              })}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
