import React,{useState} from 'react';
import {Card, Form, Modal, Button, Col} from 'react-bootstrap'
import {MDBBtn, MDBCol, MDBCard, MDBCardBody, MDBInput} from 'mdbreact'
import {Link, useHistory} from 'react-router-dom'
import {MCalendar} from "../../../pages";
import {Postcode} from "../../../pages/account";
import axios from 'axios'
import SquareLg from "./dragdrop/SquareLg";
import UploadFiles from "../../videoUpload/UploadFiles";
import QRcode from "../../../assets/img/QRcode.png";
function MovingEstimateForm() {
    const [validated, setValidated] = useState(false);
    const [movingName,setMovingName]=useState('');
    const [movingPhone,setMovingPhone]=useState('');
    const [movingFrom, setMovingFrom] = useState('');
    const [movingTo,setMovingTo] = useState('');
    const [optionalAddrFrom,setOptionalAddrFrom]=useState('')
    const [optionalAddrTo,setOptionalAddrTo]=useState('')
    const [movingDate,setMovingDate]=useState('')
    const [movingType,setMovingType]=useState('')
    const [show,setShow]=useState(false)
    const [qrshow,setQrshow]=useState(false)
    const [movingWriter,setMovingWriter]=useState('')
    const [movingDetail,setMovingDetail]=useState('')
    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault()
        const estiJsnon={
            movingName:movingName,
            movingPhone:movingPhone,
            movingFrom:movingFrom,
            movingTo:movingTo,
            optionalAddrFrom:optionalAddrFrom,
            optionalAddrTo:optionalAddrTo,
            movingDate:movingDate,
            movingType:movingType,
            movingWriter:movingWriter,
            movingDetail:movingWriter,
        };
        axios
            .post(`http://localhost:8080/orders/esitmateform`,estiJsnon)
            .then(response => {
                alert('성공');
                sessionStorage.setItem('estiDate', JSON.stringify(response.data));
                console.log(sessionStorage.estiDate);

                history.push('/videotest');
            })
            .catch(error => {
                alert('로그인을 먼저 해주세요!');
                throw error;
            });
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <>
        <div>
            <Card border="success" style={{ width: '110rem' }}>
                <Card.Header> <Card.Title> 이사견적 신청서</Card.Title></Card.Header>
                <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form>
                <Form.Group as={Col} md="3" controlId="validationCustom01">
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
                <Form.Group as={Col} md="3" controlId="validationCustom02">
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
                <Form.Group as={Col} md="3" controlId="validationCustom03">
                    <Form.Label>출발지 정보</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="주소를 입력해 주세요"
                        required
                        value={movingFrom}
                        onChange={e => setMovingFrom(e.target.value)}/>
                    <div className='input-group-append'>
                        <Postcode onSelectedAddr={setMovingFrom} />
                    </div>
                    <Form.Control.Feedback type="invalid">
                        입력란이 비었습니다!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
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
                <Form.Group as={Col} md="3" controlId="validationCustom03">
                    <Form.Label>도착지 정보</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="주소를 입력해 주세요."
                        required
                        value={movingTo}
                        onChange={e => setMovingTo(e.target.value)} />
                    <div className='input-group-append'>
                        <Postcode onSelectedAddr={setMovingTo} />
                    </div>
                    <Form.Control.Feedback type="invalid">
                        입력란이 비었습니다!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>상세주소</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="상세주소"
                        required
                    value={optionalAddrTo}
                    onChange={e => setOptionalAddrTo(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        입력란이 비었습니다!
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
            <div style={{maxWidth:'700px',margin:'2rem auto'}}>
                <div style={{textAlign:'center',marginButton:'2rem'}}>
                    <h1>2단계.비디오와 가구배치도 올리기</h1>
                </div>
                <MDBCol noValidate validated={validated} onSubmit={handleSubmit}>
                    <MDBCard style={{ width: "100%" ,height:"200px"}}>
                        <MDBCardBody>
                            <h3>가구배치도</h3>
                            <MDBBtn color="amber"onClick={e=>setShow(true)}>
                                58평
                            </MDBBtn>
                            <Modal
                                size={"lg"}
                                show={show}
                                onHide={() => setShow(false)}
                                dialogClassName="modal-90w"
                                aria-labelledby="example-custom-modal-styling-title"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-custom-modal-styling-title">
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
                <br/>
                <div style={{marginBottom:50}}>
                    <h3>파일 선택 방식</h3>
                    <MDBCol>
                        <MDBCard style={{ width: "100%" ,height:"200px"}}>
                            <MDBCardBody>
                                <UploadFiles/>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                </div>

            </div>
            <div onSubmit>
                <br/>
                <br/>
                <MDBInput label={"제목"}
                          onChange={e=>setMovingWriter(e.target.value)}
                          value={movingWriter}
                />
                <br/>
                <br/>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>방설명</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="설명"
                        value={movingDetail}
                        onChange={e => setMovingDetail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        입력란이 비었습니다!
                    </Form.Control.Feedback>
                </Form.Group>
                <br/>
                <br/>
            </div>
            <Form>
                <Card border="light" style={{ width: '70rem' }}>
                <Card.Header><Card.Title>이사일을 정해주세요</Card.Title></Card.Header>
                <MCalendar value={movingDate}
                           onChange={e => setMovingDate(e.target.value)}/>
                    <Button type="submit" onClick={handleSubmit}>Submit form</Button>

                </Card>

                <Card border="light" style={{ width: '70rem' }}>
                    <Card.Header><Card.Title>이사 유형</Card.Title></Card.Header>
                    <Form.Group controlId="exampleForm.SelectCustomSizeLg">

                            <Form.Check label={"집이사"} value={movingType} onChange={e=>setMovingType(e.target.value)}/>
                            <Form.Check label={"사무실이사"} value={movingType} onChange={e=>setMovingType(e.target.value)}/>
                            <Form.Check label={"보관이사"}value={movingType} onChange={e=>setMovingType(e.target.value)}/>
                            <Form.Check label={"소형이사"}value={movingType} onChange={e=>setMovingType(e.target.value)}/>

                    </Form.Group>
                </Card>
            </Form>
            <Form.Group>
                <Form.Check
                    required
                    label="개인정보 제공에 동의합니다."
                    feedback="You must agree before submitting."
                />
            </Form.Group>
            <Button  onClick={e=>setQrshow(!qrshow)}>
                어플다운받기
                <Modal show={qrshow} size={"sm"}
                       onClick={e=>setQrshow(!qrshow)}
                       onHide={()=>false}>
                    <img src={QRcode}/>
                </Modal>
            </Button>
            <Link to={"/videotest"}>  <Button type="submit" onClick={handleSubmit}>Submit form</Button></Link>
        </Form>
      </Card.Body>
            </Card>
        </div>
            </>
    );
}

export default MovingEstimateForm;