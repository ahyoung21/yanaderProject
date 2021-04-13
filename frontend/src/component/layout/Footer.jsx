import React, { useState, useEffect } from 'react';
import FooterData from '../json/FooterData.json';
// import axios from 'axios';

const Footer = () => {
  const [data, setData] = useState([]);
  // const menus = ['Menu1', 'Menu2', 'Menu3', 'Menu4'];
  // const menuList = menus.map((menu, index) => <li key={index}>{menu}</li>);

  // function FooterList(props) {
  //   const footerInfo = props.footerInfo;
  //   const listItems = footerInfo.map((item, index) => (
  //     <li key={index}>
  //       <strong>{item.title}</strong>
  //     </li>
  //   ));
  //   return <ul>{listItems}</ul>;
  // }

  // {people.filter(person => person.age < 60).map(filteredPerson => (
  //   <li>
  //     {filteredPerson.name}
  //   </li>
  // ))}

  // function ListItem(props) {
  //   const footerInfo = props.footerInfo;
  //   return (
  //     <li>
  //       <strong>{props.title}</strong>
  //       <ul>
  //         <a href={props.link}>{props.menuName}</a>
  //       </ul>
  //     </li>
  //   );
  // }

  // function FooterList(props) {
  //   const footerInfo = props.footerInfo;
  //   const listItems = footerInfo.map((item, index) => {
  //     <ListItem
  //       key={index}
  //       title={item.title}
  //       link={item.list[1].link}
  //       menuName={item.list[1].title}
  //     />;
  //   });
  //   return <ul>{listItems}</ul>;
  // }

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
                  <li
                    key={index}
                    title={item.title}
                    link={item.list[index].link}
                    menuName={item.list[index].title}
                  >
                    {item.title}
                    {item.list[index].link}
                    {item.list[index].title}
                    {item.list.length}
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
