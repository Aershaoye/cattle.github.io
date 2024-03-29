import React from "react";

export default () => {
  return (
    <div className="phh-main">
      <div className="main-left">
        <img
          className="logoimg"
          src={require("../../img/logo图标.png")}
          alt=""
        />
      </div>
      <div className="main-right">
        <div className='btn-div'>
          <input className="input-back" type="text" placeholder="手机" />
          <button className="btn-back">搜索</button>
        </div>

        <ul className="ul-back">
          <li className="li-3">华为</li>
          <li className="li-2">|</li>
          <li className="li-3">小米</li>
          <li className="li-2">|</li>
          <li className="li-3">魅族</li>
          <li className="li-2">|</li>
          <li className="li-3">荣耀</li>
          <li className="li-2">|</li>
          <li className="li-3">华为手机</li>
          <li className="li-2">|</li>
          <li className="li-3">vivo</li>
          <li className="li-2">|</li>
          <li className="li-3">oppo</li>
          <li className="li-2">|</li>
          <li className="li-3">三星</li>
        </ul>
      </div>
    </div>
  );
};
