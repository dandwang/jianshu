import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
export  const HeaderWrapper  = styled.div`
	height :56px;
	border-bottom:1px solid #f0f0f0;
	position:relative;
`
export const Logo = styled.a`
	position:absolute;
	top:0;
	left:0;
	height:56px;
	width:100px;
	background:url(${logoPic});
	background-size:contain;
	cursor:pointer;
`
export const Nav = styled.div`
	width:960px;
	padding-right:70px;
	box-sizing:border-box;
	height:100%;
	margin:0 auto;
	

`
export const NavItem = styled.div`
	line-height:56px;
	padding 0 15px;
	font-size:17px;
	color:#333;
	cursor:pointer;
	&.left{
		float:left;
	}
	&.right{
		float:right;
		color:#969696;
	}
	&.active{
		color:#ea6f5a;

	}
`;
export const SearchWrapper =styled.div`
	float:left;
	position:relative;
	.iconfont{
		position:absolute;
		top:13px;
		width:30px;
		height:30px;
		right:0;
		border-radius:15px;
		
		text-align:center;
		line-height:30px;
		&.focused{
			background-color:#777;
		}
	}
`;
export const NavSearch = styled.input.attrs({
	placeholder:'搜索'
})`
	width:160px;
	height :38px;
	padding:0 30px 0 20px;
	margin-top:9px;
	margin-left:20px;
	box-sizing:border-box;
	font-size:15px;
	border:none;
	outline:none;
	border-radius:19px;
	background:#eee;
	color:#666;
	transition:all 0.2s;
	&::placeholder{
		color:#999;
	}
	&.focused{
		width:240px;
	}
`;
export const Addition = styled.div`
	position:absolute;
	right:0;
	top:0;
	height:56px;
`;
export const Button= styled.div`
	float:right;
	margin-top:9px;
	margin-right:20px;
	padding:0 20px;
	line-height:38px;
	border-radius:19px;
	border:1px solid #ec6149;
	cursor:pointer;
	&.reg{
		color:#ec6149;
	}
	&.writting{
		color:#fff;
		background:#ec6149
	}
`