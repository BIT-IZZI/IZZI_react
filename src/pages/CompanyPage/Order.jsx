import React, {useState, useEffect} from 'react';
import {MDBDataTableV5} from 'mdbreact';
import {Button, Table, Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Pagination from '../../commons/Paginations';

const Order = () => {
	const [estimateList, setEstimateList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);
	useEffect(() => {
		axios
			.get(`http://localhost:8080/estimates/list`)
			.then(({data}) => {
				setEstimateList(data.list);
				console.log(data.list);
			})
			.catch(error => {
				throw error;
			});
	}, []);

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = estimateList.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);
	return (
		<>
			<div list={currentPosts} className='content-title'>
				<h2 className='menu-h2'> - 공지사항</h2>
				<div id='select-search-bar'>
					<select id='select' className='form-control'>
						<option value=''>선택</option>
						<option>제목</option>
						<option>내용</option>
						<option>제목 및 내용</option>
					</select>
					<select className='form-control' id='select'>
						<option value=''>카테고리</option>
						<option>지역</option>
						<option>사이트</option>
					</select>
					<span id='search-bar'>서치바</span>
				</div>
			</div>

			<div>
				<Table responsive hover style={{textAlign: 'center'}}>
					<thead>
						<tr>
							<th>번호</th>
							<th>이름</th>
							<th>출발지</th>
							<th>도착지</th>
							<th>이사종류</th>
							<th>평수</th>
							<th>이사 희망일</th>
						</tr>
					</thead>
					<tbody>
						{estimateList.map((info, i) => (
							<tr>
								<td>{i + 1}</td>
								<Link to='/customerInfo'>
									<td>{info.name}</td>
								</Link>
								<td> {info.movingFrom}</td>
								<td>{info.movingTo} </td>
								<td>{info.movingType} </td>
								<td>{info.square} </td>
								<td>{info.movingDate} </td>
							</tr>
						))}
					</tbody>
				</Table>
				<Container fluid>
					<Row noGutters>
						<Col sm={11}>
							{' '}
							<Pagination
								postsPerPage={postsPerPage}
								totalPosts={estimateList.length}
								paginate={paginate}
							/>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};
export default Order;
