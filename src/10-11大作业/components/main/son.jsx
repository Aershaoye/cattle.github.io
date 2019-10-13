import React from 'react';

export default props => {
  return (
    <div className="box">
      <div className="box1">
        <img
          src={props.src || require('./img/default.jpg')}
          width={props.width || '210'}
          height={props.height || '210'}
          alt="产品-手机"
        />
        <p className="jiage">￥:{props.$ || '0.00'}元</p>
        <a href="#">
          <p className="mingzi">{props.name || '--'}</p>
        </a>
        <a href="#">
          <p className="dianzhang">{props.diss || '--'}</p>
        </a>
        <hr></hr>
        <div className="biankuang">
          <p>
            该款月成交
            <span className="kuan">{props.count || '0'}</span>
          </p>
          <img src={props.srcr} className="wangwang" />
        </div>
      </div>
    </div>
  );
};
