import React from 'react';
import {Nav, Navbar, Form} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import '../assets/css/main.css';
import logo from '../assets/img/logo2.png';

export const Navigator = () => {
	const history = useHistory();
	const handleLogout = () => {
		sessionStorage.clear();
		history.push('/');
		window.location.reload(); // 새로고침버튼처럼 현재 리소스를 다시불러옴
	};
	return (
		<div>
			<Navbar className='navbar-collapse' variant='dark'>
				<Link to='/'>
					<Navbar.Brand>
						<img
							alt=''
							src={logo}
							width='75'
							height='75'
							className='d-inline-block align-top'
						/>{' '}
					</Navbar.Brand>
				</Link>
				<Nav className='ml-auto'>
					<Link to='/'>
						<Navbar.Brand>HOME</Navbar.Brand>
					</Link>
					<Link to='/notice'>
						<Navbar.Brand>공지사항</Navbar.Brand>
					</Link>
					<Link to='/community'>
						<Navbar.Brand>커뮤니티</Navbar.Brand>
					</Link>
					<Link to='/contacts'>
						<Navbar.Brand>고객지원</Navbar.Brand>
					</Link>
					<Link to='/estimate'>
						<Navbar.Brand>견적신청서</Navbar.Brand>
					</Link>
				</Nav>
				<Form inline className='ml-auto'>
					{!sessionStorage.userData && (
						<Link to='/login'>
							<Navbar.Brand>로그인</Navbar.Brand>
						</Link>
					)}
					{sessionStorage.userData && (
						<Navbar.Brand onClick={handleLogout}>로그아웃</Navbar.Brand>
					)}
					{!sessionStorage.userData && (
						<Link to='/signup'>
							<Navbar.Brand>회원가입</Navbar.Brand>
						</Link>
					)}
					{sessionStorage.userData &&
						(JSON.parse(sessionStorage.userData).userId === 'slimshady20' ? (
							<Link to='/mypage'>
								<Navbar.Brand>관리자 MyPage</Navbar.Brand>
							</Link>
						) : (
							<Link to='/userMyPage'>
								<Navbar.Brand>Mypage</Navbar.Brand>
							</Link>
						))}
					{/*{JSON.parse(sessionStorage.userData).userId === 'slimshady20' && (
						<Link to='/mypage'>
							<Navbar.Brand>마이페이지2</Navbar.Brand>
						</Link>
					)}*/}
				</Form>
			</Navbar>
		</div>
	);
};
export default Navigator;
