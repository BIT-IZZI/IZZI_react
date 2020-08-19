import React, {useEffect, useState} from 'react';

import {SideBar} from '../../commons/index';
import axios from 'axios';
import '../../assets/css/sb-admin-2.css';
import {Link} from 'react-router-dom';
import {MDBBtn} from 'mdbreact';

const Market = () => {
	const [articlesList, setArticlesList] = useState([]);
	useEffect(() => {
		axios
			.get(`http://localhost:8080/articles/list`)
			.then(({data}) => {
				setArticlesList(data.list);
				console.log(data.list);
			})
			.catch(error => {
				throw error;
			});
	}, []);

	return (
		<>
			<SideBar />
			<div id='wrapper'>
				<div id='page-wrapper'>
					<div className='row'>
						<div className='col-lg-12'>
							<br />
							<h2 className='page-header'>중고 거래</h2>
							<br />
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='panel panel-default'>
								{/*<div className="panel-heading">
                                        <h3>후기</h3>
                                    </div>*/}
								{/* /.panel-heading */}
								<div className='panel-body'>
									<table
										width='100%'
										className='table table-striped table-bordered table-hover'
										id='dataTables-example'
									>
										<thead>
											<tr>
												<th>번호</th>
												<th>제목</th>
												<th>작성자</th>
												<th>내용</th>
												<th>희망 거래 장소</th>
												<th>날짜 </th>
												<th>View</th>
											</tr>
										</thead>
										<tbody>
											{articlesList.map((item, i) => (
												<tr>
													<td>{i + 1}</td>
													<td>
														<Link to={`/userInfo/${item.articleId}`}>
															{' '}
															{item.title}
														</Link>
													</td>
													<td>{item.writer}</td>
													<td>{item.contents}</td>
													<td>{item.address} </td>
													<td>날짜 </td>
												</tr>
											))}
										</tbody>
									</table>
									{sessionStorage.userData && (
										<Link to='/write'>
											<MDBBtn className='btn blue-gradient'>글쓰기</MDBBtn>
										</Link>
									)}
								</div>
								{/* /.panel-body */}
							</div>
							{/* /.panel */}
						</div>
						{/* /.col-lg-12 */}
					</div>
				</div>
				{/* /#page-wrapper */}
			</div>
		</>
	);
};

export default Market;
