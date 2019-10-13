import React from 'react';
//引入样式
import './style/indxe.css'
//引入haeder组件
import Phhheader from './component/phhheader/phh-header'
//引入main组件
import Phhmain from './component/phhmain/phh-main'

export default class Index extends React.Component{
	render(){
		return(
			<div>
				<Phhheader/>
				<Phhmain/>
			</div>
		)
	}
} 

