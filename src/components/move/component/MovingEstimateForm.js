import React, {useEffect, useState,useReducer} from 'react';
import { Table,Form, Modal, Button, Col} from 'react-bootstrap'
import {
    MDBBtn,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBContainer,
    MDBRow,
    MDBJumbotron,
    MDBCardTitle
} from 'mdbreact'

import {Postcode} from "../../../pages/account";
import axios from 'axios'
import SquareLg from "./dragdrop/SquareLg";
import UploadFiles from "../../videoUpload/UploadFiles";
import {useHistory} from "react-router";
import QRcode from "../../../assets/img/QRcode.png";
import DatePicker, {Calendar,utils} from "react-modern-calendar-datepicker";
import "../../../assets/css/calendar.css";
import '../../modalTest/modal.css'

import '../../../assets/css/sb-admin-2.css'

function MovingEstimateForm() {
    const initialState = {number: 0};

    const today = () => {new Date()};

    const count = (state, action) => {
        switch (action.type) {
            case 'increment':
                return {number: state.number + 0.5};
            case 'initialize':
                return {number: 0};
            default:
                throw new Error();
        }
    };
    const [state, dispatch] = useReducer(count, initialState);

    const history = useHistory();
    const [number, setNumber] = useState(0);
    const calSubmit = e => {
        e.preventDefault()
        const result = {
            movingPrice: (state.number * 50)
        }
        console.log(result)
        axios
            .post(`http://localhost:8080/orders/calculator`, result)
            .then(response => {
                alert('성공');
                history.push('/estimatetwo');
            })
            .catch(error => {
                alert('실패!');
                throw error;
            })
}
    const [accountInfo] = useState(JSON.parse(sessionStorage.getItem("userData")));
        const [validated, setValidated] = useState(false);
        const [movingName, setMovingName] = useState("");
        const [userId, setUserId] = useState('');
        const [id, setId] = useState('');
        const [movingPhone, setMovingPhone] = useState('');
        const [movingFrom, setMovingFrom] = useState('');
        const [movingTo, setMovingTo] = useState('');
        const [optionalAddrFrom, setOptionalAddrFrom] = useState('')
        const [optionalAddrTo, setOptionalAddrTo] = useState('')
        const [movingType, setMovingType] = useState('')
        const [show, setShow] = useState(false)
        const [qrshow, setQrshow] = useState(false)
        const [movingWriter, setMovingWriter] = useState('')
        const [movingDetail, setMovingDetail] = useState('')
        const [square, setSquare] = useState('')
        const [pbRain, setPbRain] = useState([])
        const [data, setData] = useState([]);
        const [check, setCheck] = useState(false)
        //   const [selectedDay, setSelectedDay] = useState(null);
        const [strSelectedDay, setStrSelectedDay] = useState("");
        const [selectedDay, setSelectedDay] = useState(utils().getToday());

    const [calDate, setCalDate] = useState(0);
        useEffect(() => {
            if (!accountInfo) {
                alert("로그인 후 작성 가능합니다.");

            } else {
                setMovingName(accountInfo.name);
                setMovingPhone(accountInfo.phoneNumber);
                setMovingFrom(accountInfo.address);
                setOptionalAddrFrom(accountInfo.optionalAddr);
                setUserId(accountInfo.userId);
                setId(accountInfo.id);

            }
        }, [])
        const regDate = (e) => {
            e.preventDefault();
            if (movingName === '' || movingPhone === '' || movingFrom === '' || movingFrom === '' || movingTo === '' || optionalAddrFrom === '' || optionalAddrTo === '' || check === false) {
                alert('입력창을 다채워주세요');
                setValidated(true);
            } else {
                const data = selectedDay;
                const movingDate = `${data.year}-${data.month}-${data.day}`;
                setStrSelectedDay(movingDate);
                handleSubmit();
            }
        }
        const handleSubmit = () => {
            console.log(strSelectedDay);
            const estiJsnon = {
                movingName: movingName,
                movingPhone: movingPhone,
                movingFrom: movingFrom,
                movingTo: movingTo,
                optionalAddrFrom: optionalAddrFrom,
                optionalAddrTo: optionalAddrTo,
                movingDate: strSelectedDay,
                movingType: movingType,
                movingWriter: movingWriter,
                movingDetail: movingDetail,
                square: square,
                userId: userId,
            };
            if (strSelectedDay === "") {
                alert("내용을 한번 더 확인해 주세요!");

            } else if (strSelectedDay !== "") {
                axios
                    .post(`http://localhost:8080/orders/esitmateform/${id}`, estiJsnon)
                    .then(response => {
                        alert('성공');
                        localStorage.setItem('estiDate', JSON.stringify(response.data));
                        window.location.href = '/videotest';
                        /*      history.push('/videotest');*/
                    })
                    .catch(error => {
                        alert('실패했어요!');
                        throw error;
                    });
            }

            //}
            /*const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }*/


        }
        const goodDays = [
            {
                year: 2020,
                month: 8,
                day: 18,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 8,
                day: 27,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 8,
                day: 28,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 9,
                day: 6,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 9,
                day: 7,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 9,
                day: 16,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 9,
                day: 25,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 9,
                day: 26,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 9,
                day: 30,
                className: 'holiDay'
            },
            {
                year: 2020,
                month: 10,
                day: 1,
                className: 'holiDay'
            },
            {
                year: 2020,
                month: 10,
                day: 2,
                className: 'holiDay'
            },
            {
                year: 2020,
                month: 10,
                day: 3,
                className: 'holiDay'
            },
            {
                year: 2020,
                month: 10,
                day: 5,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 10,
                day: 6,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 10,
                day: 9,
                className: 'holiDay'
            },
            {
                year: 2020,
                month: 10,
                day: 15,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 10,
                day: 16,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 10,
                day: 25,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 10,
                day: 26,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 11,
                day: 4,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 11,
                day: 5,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 11,
                day: 9,
                className: 'saleDay'
            },
            {
                year: 2020,
                month: 11,
                day: 10,
                className: 'saleDay'
            },
            {
                year: 2020,
                month: 11,
                day: 11,
                className: 'saleDay'
            },
            {
                year: 2020,
                month: 11,
                day: 12,
                className: 'saleDay'
            },
            {
                year: 2020,
                month: 11,
                day: 13,
                className: 'saleDay'
            },
            {
                year: 2020,
                month: 11,
                day: 16,
                className: 'saleDay'
            },
            {
                year: 2020,
                month: 11,
                day: 17,
                className: 'saleDay'
            },
            {
                year: 2020,
                month: 11,
                day: 18,
                className: 'saleDay'
            },
            {
                year: 2020,
                month: 11,
                day: 19,
                className: 'saleDay'
            },
            {
                year: 2020,
                month: 11,
                day: 20,
                className: 'saleDay'
            },
            {
                year: 2020,
                month: 11,
                day: 14,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 11,
                day: 23,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 11,
                day: 24,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 12,
                day: 3,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 12,
                day: 4,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 12,
                day: 13,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 12,
                day: 14,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 12,
                day: 23,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 12,
                day: 24,
                className: 'handDay'
            },
            {
                year: 2020,
                month: 12,
                day: 25,
                className: 'holiDay'
            },
        ];
        const priceStyle = {
            color: 'red'
        }
        useEffect(() => {
                axios.get(`http://localhost:8080/statistics/pbRain`)
                    .then((res) => {
                        const pBRainDate = [];
                        res.data.pbRain.forEach(one => {
                            let obj = {};
                            if (one.rainProb <= 20) {
                                obj.year = 2020;
                                obj.month = Number(one.precipitationDate.split("-")[0]);
                                obj.day = Number(one.precipitationDate.split("-")[1]);
                                obj.className = 'purpleDay';
                                pBRainDate.push(obj);
                            } else if (one.rainProb <= 40) {
                                obj.year = 2020;
                                obj.month = Number(one.precipitationDate.split("-")[0]);
                                obj.day = Number(one.precipitationDate.split("-")[1]);
                                obj.className = 'handDay';
                                pBRainDate.push(obj);
                            } else if (one.rainProb <= 60) {
                                obj.year = 2020;
                                obj.month = Number(one.precipitationDate.split("-")[0]);
                                obj.day = Number(one.precipitationDate.split("-")[1]);
                                obj.className = 'navyBlueDay';
                                pBRainDate.push(obj);
                            } else if (one.rainProb <= 80) {
                                obj.year = 2020;
                                obj.month = Number(one.precipitationDate.split("-")[0]);
                                obj.day = Number(one.precipitationDate.split("-")[1]);
                                obj.className = 'handDay';
                                pBRainDate.push(obj);
                            } else {
                                obj.year = 2020;
                                obj.month = Number(one.precipitationDate.split("-")[0]);
                                obj.day = Number(one.precipitationDate.split("-")[1]);
                                obj.className = "holiDay";
                                pBRainDate.push(obj);
                            }
                        });
                        setData(pBRainDate);
                        setPbRain(res.data.pbRain)
                    }).catch(
                    error => {
                        throw(error)
                    }
                )
                setData(goodDays)
            }
            , [])
        const renderCustomInput = ({ref}) => (
            <input
                readOnly="true"
                ref={ref}
                placeholder="Select a Day"
                value={`${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`}
                style={{
                    textAlign: 'center',
                    padding: '0.3rem 0.5rem',
                    fontSize: 'medium',
                    border: '1px solid #184f90',
                    borderRadius: '50px',
                    boxShadow: '0 0.5rem 1rem rgba(156, 136, 255, 0.2)',
                    color: '#184f90',
                    outline: 'none',
                    margin: '0.3rem'

                }}
                className="my-custom-input-class"

            />
        )
        const teacherStreamingTypes = {
            REQUEST: "teacherStreaming/REQUEST",
            POST: "teacherStreaming/POST",
            GETFILE: "teacherStreaming/GETFILE",
            DOWNLOAD: "teacherStreaming/DOWNLOAD",
            DELETE: "teacherStreaming/DELETE"
        }
        const Request = (data) => ({type: teacherStreamingTypes.REQUEST, payload: data})
        const Post = (data) => ({type: teacherStreamingTypes.POST, payload: data})
        const GetFile = (data) => ({type: teacherStreamingTypes.GETFILE, payload: data})
        const DownloadFile = (data) => ({type: teacherStreamingTypes.DOWNLOAD, payload: data})
        const DeleteFile = (data) => ({type: teacherStreamingTypes.DELETE, payload: data})

        const Apis = () => dispatch => {
            axios.get(`http://localhost:8080/streamings/teacher/100000301`)
                .then(({data}) => {
                    dispatch(Request(data))
                    console.log(data.classCode)
                    console.log(data.studentList)
                })
                .catch(error => {
                    throw (error)
                })
        }
        const fileListApis = () => dispatch => {
            axios.get(`http://localhost:8080/file/list/subject/1`)
                .then(({data}) => {
                    dispatch(GetFile(data))
                    console.log(data.fileList)
                })
        }
        const postApis = (payload) => {

            const orderId = JSON.parse(localStorage.estiDate).orderId
            axios.post(`http://localhost:8080/file/upload/${orderId}/null`, payload, {
                authorization: 'JWT fefege..',
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
            })
                .then(res =>
                    alert("성공")
                )
        }
        const fileDownloadApis = (fileId, fileName) => dispatch => {
            console.log(`fileDownloadApis ${fileId}`)
            axios.get(`http://localhost:8080/file/download/${fileId}`, {
                responseType: 'arraybuffer',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/pdf'
                }
            }).then(res => {
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
            })
        }
        const handlePost = () => {

            const formData = new FormData()
            formData.append('file', upload)
            postApis(formData)
            fileListApis()
        }

        const [upload, setUpload] = useState(null);


        return (
            <>
                <div id="wrapper">
                    <div>
                        <div className="row">
                            <div className="col-lg-12"><br/>
                                <h2 className="page-header">{userId}님의 견적 신청서</h2><br/>
                            </div>
                            <MDBContainer className="mt-5 text-center">
                                <MDBRow>
                                    <MDBCol>
                                        <MDBJumbotron>
                                            <MDBCardBody>

                                                <MDBCardTitle className="h2" style={{
                                                    textAlign: 'center',
                                                    marginButton: '2rem'
                                                }}>{/*가구배치*/}
                                                    1단계 내 방 비디오와 원하는 위치 가구배치도 올리기
                                                </MDBCardTitle>
                                                <MDBCol noValidate validated={validated} onSubmit={handleSubmit}>
                                                    <MDBCard style={{width: "100%", height: "200px"}}>
                                                        <MDBCardBody>
                                                            <h3>가구배치도</h3>
                                                            <MDBBtn color="amber" onClick={e => setShow(true)}>
                                                                58평
                                                            </MDBBtn>
                                                            <Modal
                                                                show={show}
                                                                onHide={() => setShow(false)}
                                                                dialogClassName='custom-dialog'
                                                                aria-labelledby="example-custom-modal-styling-title"
                                                            >
                                                                <Modal.Header closeButton>
                                                                    <Modal.Title
                                                                        id="example-custom-modal-styling-title">
                                                                        58평
                                                                    </Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    <a className="list">
                                                                        <SquareLg/>
                                                                    </a>
                                                                </Modal.Body>
                                                            </Modal>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                </MDBCol>

                                                <MDBCol>{/*파일업로드*/}
                                                    <MDBCard style={{width: "100%", height: "200px"}}>
                                                        <MDBCardBody>
                                                            <h3>내 방 비디오 올리기</h3>
                                                            <input type="file" name="file"
                                                                   onChange={e => setUpload(e.target.files[0])}/>
                                                            <button type="button" onClick={handlePost}>업로드</button>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                </MDBCol>
                                                <br/>
                                                <br/>

                                                <MDBCardTitle className="h2" style={{
                                                    textAlign: 'center',
                                                    marginButton: '2rem'
                                                }}>{/*가구배치*/}
                                                    2단계 상세내용 입력
                                                </MDBCardTitle>

                                                <Form noValidate validated={validated} onSubmit={handleSubmit}
                                                      style={{textAlign: 'center'}}>
                                                    <Form>
                                                        <Form.Group as={Col} md="10" controlId="validationCustom01">
                                                            <Form.Label>신청인 성함</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="name"
                                                                value={movingName}
                                                                onChange={e => setMovingName(e.target.value)}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                입력란이 비었습니다!
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="10" controlId="validationCustom02">
                                                            <Form.Label>신청인 연락처</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="Phone Number"
                                                                value={movingPhone}
                                                                onChange={e => setMovingPhone(e.target.value)}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                입력란이 비었습니다!
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="10" controlId="validationCustom03">
                                                            <Form.Label>출발지 정보</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="주소를 입력해 주세요"
                                                                required
                                                                value={movingFrom}
                                                                onChange={e => setMovingFrom(e.target.value)}/>
                                                            <div className='input-group-append'>
                                                                <Postcode onSelectedAddr={setMovingFrom}/>
                                                            </div>
                                                            <Form.Control.Feedback type="invalid">
                                                                입력란이 비었습니다!
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="10" controlId="validationCustom04">
                                                            <Form.Label>상세주소</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="상세주소"
                                                                required
                                                                value={optionalAddrFrom}
                                                                onChange={e => setOptionalAddrFrom(e.target.value)}/>
                                                            <Form.Control.Feedback type="invalid">
                                                                입력란이 비었습니다!
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                                            <Form.Label>평수 </Form.Label>
                                                            <Form.Control as="select"
                                                                          required
                                                                          value={square}
                                                                          onChange={e => setSquare(e.target.value)}>
                                                                <option>선택</option>
                                                                <option value={25}>25평 이하</option>
                                                                <option value={35}>35평 이하</option>
                                                                <option value={40}>40평 이하</option>
                                                                <option value={45}>45평 이상</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="10" controlId="validationCustom03">
                                                            <Form.Label>도착지 정보</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="주소를 입력해 주세요."
                                                                required
                                                                value={movingTo}
                                                                onChange={e => setMovingTo(e.target.value)}/>
                                                            <div className='input-group-append'>
                                                                <Postcode onSelectedAddr={setMovingTo}/>
                                                            </div>
                                                            <Form.Control.Feedback type="invalid">
                                                                입력란이 비었습니다!
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="10" controlId="validationCustom04">
                                                            <Form.Label>상세주소</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="상세주소"
                                                                required={true}
                                                                value={optionalAddrTo}
                                                                onChange={e => setOptionalAddrTo(e.target.value)}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                입력란이 비었습니다!
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Form>

                                                    <div onSubmit>
                                                        <br/>
                                                        <br/>
                                                        <MDBInput label={"제목"}
                                                                  onChange={e => setMovingWriter(e.target.value)}
                                                                  value={movingWriter}
                                                        />
                                                        <br/>
                                                        <br/>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleFormControlTextarea1">내용</label>
                                                            <textarea className="form-control"
                                                                      id="exampleFormControlTextarea1"
                                                                      name="contents" rows={10}
                                                                      required
                                                                      type="text"
                                                                      placeholder="설명"
                                                                      value={movingDetail}
                                                                      onChange={e => setMovingDetail(e.target.value)}>
                                                          </textarea>
                                                        </div>
                                                        <br/>
                                                        <br/>
                                                    </div>
                                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                                        <div id="wrapper">
                                                            <div id="page-wrap">
                                                                <section className="select">
                                                                    <Form.Label>이사 날짜</Form.Label>
                                                                    {/*   <DatePicker
                                                            value={selectedDay}
                                                            onChange={setSelectedDay}
                                                            inputPlaceholder="Select a day"
                                                            minimumDate={utils().getToday()}
                                                            shouldHighlightWeekends
                                                            customDaysClassName={data}
                                                        />*/}
                                                                    <div>
                                                                        <DatePicker
                                                                            value={selectedDay}
                                                                            renderInput={renderCustomInput}
                                                                            inputClassName="my-custom-input-class"
                                                                            shouldHighlightWeekends
                                                                        />
                                                                    </div>
                                                                    <div className="row">
                                                                        <Calendar
                                                                            value={selectedDay}
                                                                            onChange={setSelectedDay}
                                                                            minimumDate={utils().getToday()}
                                                                            colorPrimary="#00365a"
                                                                            calendarClassName="custom-calendar"
                                                                            shouldHighlightWeekends
                                                                            customDaysClassName={data}
                                                                        />
                                                                        <section className="card-body">
                                                                            <br/>
                                                                            <p className="color-a"><h4>＊손 없는 날</h4><h5
                                                                                style={priceStyle}>35% 추가 금액 적용</h5></p>
                                                                            <br/>
                                                                            <p className="color-b"><h4>＊공휴일</h4><h5
                                                                                style={priceStyle}>15% 추가 금액 적용</h5></p>
                                                                            <br/>
                                                                            <p className="color-c"><h4>＊특가 기간</h4><h5
                                                                                style={priceStyle}>20% 할인 금액 적용</h5></p>
                                                                        </section>
                                                                    </div>
                                                                </section>
                                                            </div>
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                                        <Form.Label>이사 유형</Form.Label>
                                                        <Form.Control as="select"
                                                                      required
                                                                      value={movingType}
                                                                      onChange={e => setMovingType(e.target.value)}>
                                                            <option>선택</option>
                                                            <option value={'집이사'}>집이사</option>
                                                            <option value={'사무실이사'}>사무실이사</option>
                                                            <option value={'보관이사'}>보관이사</option>
                                                            <option value={'소형이사'}>소형이사</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                    <div id="wrapper">
                                                        <div id="page-wrap">
                                                            <div className="row">
                                                                <div className="col-lg-12"><br/>
                                                                    <h2 className="mt-5 text-center">예상 금액 계산</h2><br/>
                                                                </div>
                                                                <MDBContainer className="mt-5 text-center">
                                                                    <MDBRow>
                                                                        <MDBCol>
                                                                            <MDBJumbotron>
                                                                                <MDBCardBody>
                                                                                    <Table>
                                                                                        <tbody>
                                                                                        <tr>
                                                                                            <th>가구</th>
                                                                                            <th>
                                                                                                <MDBBtn rounded outline
                                                                                                        color="warning"
                                                                                                        onClick={() => dispatch({type: 'increment'})}>
                                                                                                    장농</MDBBtn>
                                                                                                <MDBBtn rounded outline
                                                                                                        color="warning"
                                                                                                        onClick={() => dispatch({type: 'increment'})}>
                                                                                                    침대</MDBBtn>
                                                                                                <MDBBtn rounded outline
                                                                                                        color="warning"
                                                                                                        onClick={() => dispatch({type: 'increment'})}>
                                                                                                    쇼파</MDBBtn>
                                                                                                <MDBBtn rounded outline
                                                                                                        color="warning"
                                                                                                        onClick={() => dispatch({type: 'increment'})}>
                                                                                                    서랍장</MDBBtn>
                                                                                            </th>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th>전자 제품</th>
                                                                                            <th>
                                                                                                <MDBBtn rounded outline
                                                                                                        color="success"
                                                                                                        onClick={() => dispatch({type: 'increment'})}>
                                                                                                    냉장고</MDBBtn>
                                                                                                <MDBBtn rounded outline
                                                                                                        color="success"
                                                                                                        onClick={() => dispatch({type: 'increment'})}>
                                                                                                    TV</MDBBtn>
                                                                                                <MDBBtn rounded outline
                                                                                                        color="success"
                                                                                                        onClick={() => dispatch({type: 'increment'})}>
                                                                                                    에어컨</MDBBtn>
                                                                                                <MDBBtn rounded outline
                                                                                                        color="success"
                                                                                                        onClick={() => dispatch({type: 'increment'})}>
                                                                                                    세탁기</MDBBtn>
                                                                                            </th>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th>기타 용품</th>
                                                                                            <th>
                                                                                                <MDBBtn rounded outline
                                                                                                        color="danger"
                                                                                                        onClick={() => dispatch({type: 'increment'})}>
                                                                                                    가스레인지</MDBBtn>
                                                                                                <MDBBtn rounded outline
                                                                                                        color="danger"
                                                                                                        onClick={() => dispatch({type: 'increment'})}>
                                                                                                    식기세척기</MDBBtn>
                                                                                                <MDBBtn rounded outline
                                                                                                        color="danger"
                                                                                                        onClick={() => dispatch({type: 'increment'})}>
                                                                                                    헬스기구</MDBBtn>
                                                                                                <MDBBtn rounded outline
                                                                                                        color="danger"
                                                                                                        onClick={() => dispatch({type: 'increment'})}>
                                                                                                    난방기</MDBBtn>
                                                                                            </th>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th>예상 무게</th>
                                                                                            <th><h3
                                                                                                id="weight">{state.number}</h3>Ton
                                                                                            </th>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th>예상 가격</th>
                                                                                            <th><h3
                                                                                                value={number}
                                                                                                onChange={e => setNumber(e.target.value)}
                                                                                            >{state.number * 50}</h3>만원
                                                                                            </th>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th>날짜</th>
                                                                                            <th>
                                                                                                <input type="submit"
                                                                                                       value={today}
                                                                                                       onChange={e => setCalDate(e.target.value)}
                                                                                                />
                                                                                            </th>
                                                                                        </tr>
                                                                                        <th>
                                                                                            <MDBBtn outline
                                                                                                    color="danger"
                                                                                                    onClick={() => dispatch({type: 'initialize'})}>
                                                                                                초기화</MDBBtn>
                                                                                        </th>
                                                                                        <th>
                                                                                            <MDBBtn outline
                                                                                                    color="primary"
                                                                                                    onClick={calSubmit}>제출하기</MDBBtn>
                                                                                        </th>
                                                                                        </tbody>
                                                                                    </Table>
                                                                                </MDBCardBody>
                                                                            </MDBJumbotron>
                                                                        </MDBCol>
                                                                    </MDBRow>
                                                                </MDBContainer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Form.Group>
                                                        <Form.Check
                                                            required
                                                            label="개인정보 제공에 동의합니다."
                                                            feedback="You must agree before submitting."
                                                            value={check}
                                                            onClick={() => setCheck(true)}
                                                        />
                                                    </Form.Group>
                                                    <Button onClick={e => setQrshow(!qrshow)}>
                                                        어플다운받기
                                                        <Modal show={qrshow} size={"sm"}
                                                               onClick={e => setQrshow(!qrshow)}
                                                               onHide={() => false}>
                                                            <img src={QRcode}/>
                                                        </Modal>
                                                    </Button>
                                                    {sessionStorage.userData && (
                                                        <Button type="submit" onClick={regDate}>Submit form</Button>)}
                                                    {!sessionStorage.userData && (
                                                        <Button type="submit" onClick={() => alert("로그인을 해주세요")}>Submit
                                                            form</Button>)}
                                                </Form>

                                            </MDBCardBody>
                                        </MDBJumbotron>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{textAlign: 'center', marginButton: '2rem'}}>
                    </div>
                </div>
            </>
        );
    }



export default MovingEstimateForm;