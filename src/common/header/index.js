import React from 'react';
import {connect} from 'react-redux';
import {HeaderWrapper,Logo,Nav,NavItem,SearchWrapper,NavSearch,Addition,Button} from './styled.js'

import {actionCreator} from './store'
const Header =(props)=>{
	return (
			<HeaderWrapper>
				<Logo href='/'/>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					<NavItem className='right'>登录</NavItem>
					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
					<NavSearch onBlur={props.searchBlur} onFocus={props.searchFocused} className={props.isFocus?'focused':''}/>
					<i  className={props.searchBlur} onFocus={props.searchFocused} className={props.isFocus?'focused iconfont':'iconfont'}>&#xe614;</i>
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='writting'>
						<i className="iconfont">&#xe601;</i>
					写文章</Button>
					<Button className='reg'>注册</Button>
				</Addition>	
			</HeaderWrapper>
		)
}

const mapStateToProps=(state)=>{
	return{
		isFocus:state.getIn(['header','focused'])
	}
}

const mapDisPatchToProps=(dispatch)=>{
	return {
		searchFocused(){
			dispatch(actionCreator.searchFocused())
		},
		searchBlur(){
			
			dispatch(actionCreator.searchBlur())
		}
	}
}	
export default connect(mapStateToProps,mapDisPatchToProps)(Header);