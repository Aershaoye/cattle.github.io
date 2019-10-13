import React from 'react';
//引入样式
import './css/index.css';
export default props => {
  return (
    <React.Fragment>
      <div className="zrb-titel">
        <p>
          喵~在此反馈您的意见和建议吧,<a href="#">立刻反馈</a>
        </p>
      </div>
      <div className="zrb-tool flex flex-between">
        {props.data.map((item, index) => {
          return (
            <a href={item.href || '#'} key={index} className="zrb-a">
              <img src={item.src} alt="" />
              <p style={{ fontSize: '20px', margin: '-50px 0px 0px 66px' }}>
                {item.label || '-·-'}
              </p>
              <p>{item.text || '-·-'}</p>
            </a>
          );
        })}
      </div>
      <div className="zrb-list flex flex-between">
        <img
          src="//img.alicdn.com/tfs/TB1bFfkNFXXXXb5XFXXXXXXXXXX-120-180.png"
          alt=""
        />
        {props.list.map((item, index) => {
          return (
            <ul key={index}>
              <li>{item.list2}</li>
              <li>{item.list3}</li>
              <li>{item.list4}</li>
              <li>{item.list5}</li>
              <li>{item.list6}</li>
              <li>{item.list7}</li>
            </ul>
          );
        })}
        <ul>
          <li>手机电器城</li>
          <img
            src="//img.alicdn.com/tps/i1/T1N64NFrxcXXb.IvUG-116-112.png"
            alt=""
          />
        </ul>
      </div>
      <div className="zrb-introduce">
        <div className="zrb-introduce-2">
          {props.about.map((item, index) => {
            return (
              <ul key={index} className="zrb-introduce-3 flex">
                <li>{item.one}</li>
                <li>{item.two}</li>
                <li>{item.three}</li>
                <li>{item.four}</li>
                <li>{item.five}</li>
                <li>{item.six}</li>
                <li>{item.seven}</li>
                <li>{item.eight}</li>
                <li>{item.nine}</li>
                <li>{item.ten}</li>
                <li>{item.eleven}</li>
                <li>{item.twelve}</li>
                <li>{item.thirteen}</li>
                <li>{item.fourteen}</li>
                <li>{item.fifteen}</li>
                <li>{item.sixteen}</li>
                <li>{item.seventeen}</li>
                <li>{item.eighteen}</li>
                <li>{item.nineteen}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
