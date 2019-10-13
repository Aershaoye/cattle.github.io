import React from 'react'
// 引入头部的css
import './index.css'
const fixedDate = [
    { id: '1', content: '综合 ↓', class: 'fixed-text red' },
    { id: '2', content: '人气 ↓', class: 'fixed-text' },
    { id: '3', content: '新品 ↓', class: 'fixed-text' },
    { id: '4', content: '销量 ↓', class: 'fixed-text' },
    { id: '5', content: '价格 ^', class: 'fixed-text' }
]

export default () => {
    return <div className="top">
        <div className="top-bottom">
            <div className="top-bottom-h1 flex">
                <ul className="top-bottom-ul flex">
                    <li>
                        <a href="" className="top-bottom-a">电器城首页</a>
                    </li>
                    <li>
                        <a href="" className="top-bottom-a">手机馆</a>
                    </li>
                    <li>
                        <a href="" className="top-bottom-a">苏宁易购</a>
                    </li>
                </ul>
                <div style={{ fontSize: '14px' }}>
                    电器城服务台
				</div>
            </div>
            <div className="top-bottom-sou flex">
                <div className="top-bottom-sou-left">
                    全部 >
					<input type="text" title="搜索关键字" autoComplete="off" placeholder="手机" className="top-bottom-input" />
                    <i className="top-bottom-i"></i>
                </div>
                <div className="top-bottom-sou-right">
                    共
					<span className="top-bottom-sou-right-span">1795703</span>
                    件商品
				</div>
            </div>
            <div className="top-bottom-xuanxiang flex">
                <div className="top-bottom-xx-left">
                    品牌
				</div>
                <ul className="top-bottom-logo-ul flex">
                    <li>
                        <img src="https://img.alicdn.com/bao/uploaded/TB1vDvUKpXXXXaKXFXXSutbFXXX.jpg" alt="苹果" width="80" height="37" />
                    </li>
                    <li>
                        <img src="https://img.alicdn.com/bao/uploaded/TB1Z.mzyMmTBuNjy1XbXXaMrVXa" alt="华为" width="80" height="37" />
                    </li>
                    <li>
                        <img src="https://img.alicdn.com/bao/uploaded/TB1r23ZRXXXXXaxXXXXXXXXXXXX" alt="小米" width="80" height="37" />
                    </li>
                    <li>
                        <img src="https://img.alicdn.com/bao/uploaded/TB1UWloLzTpK1RjSZKPXXa3UpXa" alt="oppo" width="80" height="37" />
                    </li>
                    <li>
                        <img src="https://img.alicdn.com/bao/uploaded/TB1.OyOKXXXXXX.XVXXSutbFXXX.jpg" alt="酷派" width="80" height="37" />
                    </li>
                    <li>
                        <img src="https://img.alicdn.com/bao/uploaded/TB1lsMhLFXXXXb1XFXXSutbFXXX.jpg" alt="三星" width="80" height="37" />
                    </li>
                    <li className="right-li">
                        <img src="https://img.alicdn.com/bao/uploaded/TB1gR9vsyrpK1RjSZFhXXXSdXXa" alt="荣耀" width="80" height="37" />
                    </li>
                </ul>
                <div className="top-gengduo">
                    <div className="top-jiao">
                        +多选
					</div>
                    <div className="top-jiao-more">更多 Ⅴ </div>
                </div>
            </div>
            <div className="top-jiao-bottom flex">
                <div className="top-bottom-xx-left" style={{ height: '23px', width: '110px', lineHeight: '13px' }}>
                    ▶ 分类
				</div>
                <span className="top-span-ipho">手机</span>
                <div className="top-jiao-more">更多 Ⅴ </div>
            </div>
        </div>
        <div className='fixed'>
            {fixedDate.map((items, index) => {
                return <div className={items.class} key={index}>{items.content}</div>
            })}
            <div className='site'>
                <div className='site-left'>收获地:</div>
                <div className='site-right'>杭州</div>
            </div>
            <div className='site br'>
                <div className='site-text'>￥请输入</div>
                <div className='drop'>-</div>
                <div className='site-text'>￥请输入</div>
            </div>
            <div className='fM-con'>
                <label htmlFor="" className='new'><input className='inp' type="checkbox" />新到商品</label>
                <label htmlFor=""><input className='inp' type="checkbox" />包邮</label>
                <label htmlFor=""><input className='inp' type="checkbox" />折扣</label>
                <div className='more'>更多 V</div>
            </div>
            <div className='fType'>
                <div className='fType-w'><i className='icon-black'></i>店铺</div>
                <div className='fType-w red'><i className='icon-red'></i>大图</div>
            </div>
            <div className='right'>
                1/80
             <div className='right-1 gray'> ^ </div>
                <div className='right-1 fff'> > </div>
            </div>
        </div>
    </div >
}