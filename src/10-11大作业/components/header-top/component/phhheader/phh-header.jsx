import React from 'react';

export default () => {
  return (
    <React.Fragment>
      <div className="phh-header">
        <div className="flex">
          <ul className="flex flex-one">
            <li>
              <img className="img" src={require('../../img/首页.png')} alt="" />
            </li>
            <li className="li-1">天猫首页</li>
            <li className="li-1">喵，欢迎来天猫</li>
            <li className="li-1">请登录</li>
            <li className="li-1">免费注册</li>
          </ul>
          <ul className="flex flex-two">
            <li className="li-1">我的淘宝</li>
            <li className="img1"></li>
            <li>
              <img
                className="img"
                src={require('../../img/购物车.png')}
                alt=""
              />
            </li>
            <li className="li-1">购物车0件</li>
            <li className="li-1">收藏夹</li>
            <li className="img1">
              <img className="img" src={require('../../img/下拉.png')} alt="" />
            </li>
            <li>|</li>
            <li>
              <img className="img" src={require('../../img/手机.png')} alt="" />
            </li>
            <li className="li-1">手机版</li>
            <li className="li-1">淘宝网</li>
            <li className="li-1">商家支持</li>
            <li className="img1"></li>
            <li>
              <img className="img" src={require('../../img/网站.png')} alt="" />
            </li>
            <li className="li-1">网络导航</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
