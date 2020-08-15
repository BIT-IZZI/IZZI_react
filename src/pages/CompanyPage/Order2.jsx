/*
import React, {useState, useEffect} from 'react';
import {MDBDataTableV5} from 'mdbreact';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Table} from 'react-bootstrap';

const Order = () => {
	const [list, setList] = useState([]);
	const [tableDataRows, setTableDataRows] = useState([]);
	const tableData = {
		columns: [
			{
				label: '아이디',
			},
			{label: '이름'},
		],
		rows: tableDataRows,
	};
	useEffect(() => {
		axios
			.get(`http://localhost:8080/estimates/list`)
			.then(response => {
				const tempRows = [];
				console.log(response.data);
				setList(response.data.content);
				response.data.content.forEach(order => {
					const estimateData = {};
					estimateData.id = order.id;
					estimateData.name = order.name;
					tempRows.push(estimateData);
				});
				setTableDataRows(tempRows);
			})
			.catch(error => {
				throw error;
			});
	}, []);
	useEffect(() => {
		console.log(tableDataRows);
	}, [tableDataRows]);

	return (
		<div style={{padding: '1rem', margin: '0 auto', maxWidth: 1200}}>
			<h1 className='text-center' style={{padding: '1rem'}}>
				이사 접수{' '}
			</h1>
			<MDBDataTableV5
				// bordered 테두리
				hover
				entriesOptions={[5, 20, 25]}
				entries={10}
				pagesAmount={4}
				data={tableData}
				pagingTop
				searchTop
				searchBottom={false}
				barReverse
				style={{padding: '1rem', margin: '0 auto', maxWidth: 1200}}
			/>
		</div>
	);
};
export default Order;
*/
