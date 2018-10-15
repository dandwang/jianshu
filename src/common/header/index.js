import React,{Component} from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,SearchWrapper,NavSearch,Addition,Button} from './styled.js'
class Header extends Component{
	constructor(props){
		super(props);
		this.state={isFocus:false}
		this.searchFocused=this.searchFocused.bind(this)
		this.searchBlur=this.searchBlur.bind(this)
	}	
	searchFocused(){
		this.setState({
			isFocus:true
		})
	}
	searchBlur(){
		this.setState({
			isFocus:false
		})
	}
	render(){
		return(
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
					<NavSearch onBlur={this.searchBlur} onFocus={this.searchFocused} className={this.state.isFocus?'focused':''}/>
					<i  className={this.searchBlur} onFocus={this.searchFocused} className={this.state.isFocus?'focused iconfont':'iconfont'}>&#xe614;</i>
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
}

export default Header;