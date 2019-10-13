import React, { Component } from 'react';

//引入底部
import Footer from './components/footer/footer';

//底部工具部分的数据
const data = [
  {
    href: '#',
    src: require('./components/footer/img/1.jpg'),
    label: '天猫直送·预约配送',
    text: '大家电提前预约，准时到家'
  },
  {
    href: '#',
    label: '送货上门',
    src: require('./components/footer/img/2.jpg'),
    text: '大家电搬货上楼，直送到家'
  },
  {
    href: '#',
    label: '预约安装',
    src: require('./components/footer/img/3.jpg'),
    text: '无需电话申请，坐等上门安装'
  },
  {
    href: '#',
    label: '只换不修',
    src: require('./components/footer/img/4.jpg'),
    text: '质量问题。365天包换'
  }
];

//底部列表数据
const list = [
  {
    list2: '购物指南',
    list3: '免费注册',
    list4: '开通支付宝',
    list5: '支付宝充值'
  },
  {
    list2: '电器城保障',
    list3: '花呗分期',
    list4: '预约配送',
    list5: '送货入户',
    list6: '全国联保'
  },
  {
    list2: '支付方式',
    list3: '支付宝快捷支付',
    list4: '支付宝余额付款',
    list5: '支付宝钱包付款',
    list6: '货到付款',
    list7: '新人支付'
  },
  {
    list2: '商家服务',
    list3: '入驻天猫电器城',
    list4: '加入电器城服务保障',
    list5: '电器城喵言喵语圈子',
    list6: '电器城商家管理规范'
  }
];
//底部背景蓝色的部分的数据
const about = [
  {
    one: '关于天猫',
    two: '帮助中心',
    three: '开放平台',
    four: '诚聘英才',
    five: '联系我们',
    six: '网站合作',
    seven: '法律声明',
    eight: '隐私权政策',
    nine: '知识产权',
    ten: '廉正举报'
  },
  {
    one: '阿里巴巴集团|',
    two: '淘宝网|',
    three: '天猫|',
    four: '聚划算|',
    five: '全球速卖通|',
    six: '阿里巴巴国际交易市场|',
    seven: '1688|',
    eight: '阿里妈妈|',
    nine: '飞猪|',
    ten: '阿里云计算|',
    eleven: 'AliOS|',
    twelve: '阿里通信|',
    thirteen: '万网|',
    fourteen: '高德|',
    fifteen: 'UC|',
    sixteen: '友盟|',
    seventeen: '虾米|',
    eighteen: '钉钉|',
    nineteen: '支付宝|'
  },
  {
    one: '增值电信业务经营许可证：浙B2-20110446',
    two: ' 市场名称登记证：工商网市字3301004119号',
    three: ' 出版物网络交易平台服务经营备案证： 新出发浙备字第001号 '
  },
  {
    one: '互联网违法和不良信息举报电话：0571-81683755 ',
    two:
      ' blxxjb@alibaba-inc.com 互联网药品信息服务资质证书编号：浙-（经营性）-2017-0005',
    three: '浙公网安备 33010002000120号'
  },
  {
    one:
      ' 医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00002号-81683755 ',
    two: ' 互联网药品交易服务资格证书：国A20150001'
  },
  {
    one: '浙江省网络食品销售第三方平台提供者备案：浙网食A33010002 ',
    two: ' 12318举报'
  },
  {
    one: '© 2003-2019 TMALL.COM 版权所有'
  }
];


export default class Index extends Component {
  render() {
    return (
      <div>
        <Footer data={data} list={list} about={about} />
      </div>
    );
  }
}
