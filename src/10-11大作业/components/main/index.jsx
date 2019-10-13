import React from 'react';

import './css/index.css';
import Son from './son';
export default class Index extends React.Component {
  render() {
    const imgs = [
      {
        src: require('./img/huaweimate30pro.png'),
        $: '3999',
        name: '华为 mate 30 pro',
        diss: '华为旗舰店',
        count: '10万笔',
        srcr: require('./img/wangwang.png')
      },
      {
        src: require('./img/iphone8plus.jpg'),
        $: '4999',
        name: 'iPhone 8 plus',
        diss: '苹果旗舰店',
        count: '7万笔',
        srcr: require('./img/wangwang.png')
      },
      {
        src: require('./img/iphoneXR.jpg'),
        $: '6999',
        name: 'iPhone XR',
        diss: '苹果旗舰店',
        count: '5万笔',
        srcr: require('./img/wangwang.png')
      },
      {
        src: require('./img/vivox27.jpg'),
        $: '1999',
        name: 'vivo x27',
        diss: 'vivo旗舰店',
        count: '19万笔',
        srcr: require('./img/wangwang.png')
      },
      {
        src: require('./img/vivox27.jpg'),
        $: '2777',
        name: 'vivo x27',
        diss: 'vivo旗舰店',
        count: '19万笔',
        srcr: require('./img/wangwang.png')
      },
      {
        src: require('./img/huaweimate30pro.png'),
        $: '3888',
        name: '华为 mate 30 pro',
        diss: '华为旗舰店',
        count: '10万笔',
        srcr: require('./img/wangwang.png')
      },
      {
        src: require('./img/iphone8plus.jpg'),
        $: '4999',
        name: 'iPhone 8 plus',
        diss: '苹果旗舰店',
        count: '7万笔',
        srcr: require('./img/wangwang.png')
      },
      {
        src: require('./img/iphoneXR.jpg'),
        $: '5999',
        name: 'iPhone XR',
        diss: '苹果旗舰店',
        count: '5万笔',
        srcr: require('./img/wangwang.png')
      },
      {
        src: require('./img/vivox27.jpg'),
        $: '7999',
        name: 'vivo x27',
        diss: 'vivo旗舰店',
        count: '19万笔',
        srcr: require('./img/wangwang.png')
      },
      {
        src: require('./img/vivox27.jpg'),
        $: '2999',
        name: 'vivo x27',
        diss: 'vivo旗舰店',
        count: '19万笔',
        srcr: require('./img/wangwang.png')
      }
    ];
    return (
      <div className="lex">
        {imgs.map((item, index) => {
          return (
            <Son
              src={item.src}
              $={item.$}
              name={item.name}
              diss={item.diss}
              count={item.count}
              key={index}
              srcr={item.srcr}
            />
          );
        })}
      </div>
    );
  }
}
