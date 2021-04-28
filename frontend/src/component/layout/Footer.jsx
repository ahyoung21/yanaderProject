import React from 'react';
import FooterData from '../json/FooterData.json';

// const Footer = function () {}

const Footer = () => {
  return (
    <>
      <footer>
        <div className="inner">
          <h1>
            <a href="#">ATLASSIAN</a>
          </h1>
          <ul>
            {FooterData &&
              FooterData.map((item) => {
                return (
                  <li key={item.id}>
                    <strong>{item.menuName}</strong>
                    <ul>
                      {
                        FooterData[item.id - 1] &&
                          FooterData[item.id - 1].list.map((subItem) => {
                          return (
                            <li key={subItem.id}>
                              <a href={subItem.link}>
                                {subItem.subMenuName}
                              </a>
                            </li>
                          );
                        })
                      }
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
