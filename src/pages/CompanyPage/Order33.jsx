/*
import React, {useState, useEffect} from 'react';
import {MDBDataTableV5} from 'mdbreact';
import {Button, Table, Container, Row, Col} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

const Order = () => {
	const [estimateList, setEstimateList] = useState([]);
	const histroy = useHistory();

	/!*function handleFindUserId(id) {
		axios
			.get(`http://localhost:8080/estimates/findUser/${id}`)
			.then(({data}) => {
				console.log(data);
			})
			.catch(error => {
				throw error;
			});
	}*!/

	useEffect(() => {
		axios
			.get(`http://localhost:8080/orders/list`)
			.then(({data}) => {
				setEstimateList(data.list);
				console.log(data.list);
			})
			.catch(error => {
				throw error;
			});
	}, []);

	return (
		<div style={{padding: '4rem', margin: '0 auto', maxWidth: 1000}}>
			<form className='needs-validation' noValidate>
				<h2 style={{margin: '0 auto'}}> 이사 접수</h2>

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
							{estimateList.map((item, i) => (
								<tr>
									<td>{i + 1}</td>
									<td>
										<Link to={`/customerInfo/${item.id}`}>{item.name}</Link>
									</td>
									<td> {item.movingFrom}</td>
									<td>{item.movingTo} </td>
									<td>{item.movingType} </td>
									<td>{item.square} </td>
									<td>{item.movingDate} </td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</form>
		</div>
	);
};
export default Order;
*/
