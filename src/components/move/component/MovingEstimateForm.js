import React,{useState} from 'react';
import {Card,Form,Button,Col,FormControl} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import {MCalendar} from "../../../pages";
import {Postcode} from "../../../pages/account";
import axios from 'axios'
function MovingEstimateForm() {
    const [validated, setValidated] = useState(false);
   const [movingName,setMovingName]=useState('');
   const [movingPhone,setMovingPhone]=useState('');
    const [movingFrom, setMovingFrom] = useState('');
    const [movingTo,setMovingTo] = useState('');
    const [optionalAddrFrom,setOptionalAddrFrom]=useState('')
    const [optionalAddrTo,setOptionalAddrTo]=useState('')
   const [movingDate,setMovingDate]=useState('')
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
        };
        axios
            .post(`http://localhost:8080/orderlist/esitmateform`,estiJsnon)
            .then(response => {
                alert('성공');
                history.push('/videoform');
            })
            .catch(error => {
                alert('실패');
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
                <Card.Header> <Card.Title>1단계. 이사견적 신청서</Card.Title></Card.Header>
                <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
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
                <Form.Group as={Col} md="4" controlId="validationCustom02">
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
                <Form.Group as={Col} md="6" controlId="validationCustom03">
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
                <Form.Group as={Col} md="6" controlId="validationCustom03">
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
            <Form>
                <Card border="light" style={{ width: '70rem' }}>
                <Card.Header><Card.Title>이사일을 정해주세요</Card.Title></Card.Header>
                <MCalendar value={movingDate}
                           onChange={e => setMovingDate(e.target.value)}/>
                </Card>
                <Card border="light" style={{ width: '70rem' }}>
                    <Card.Header><Card.Title>이사 유형</Card.Title></Card.Header>
                    <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                        <Form.Control as="select" size="lg" custom>
                            <option>우리집이사</option>
                            <option>사무실이사</option>
                            <option>보관이사</option>

                        </Form.Control>
                    </Form.Group>
                </Card>


            </Form>
            <div className="mb-3">
            </div>
            <Form.Group>
                <Form.Check
                    required
                    label="개인정보 제공에 동의합니다."
                    feedback="You must agree before submitting."
                />
            </Form.Group>
            <Link to={"/video"}>  <Button type="submit" onClick={handleSubmit}>Submit form</Button></Link>
        </Form>
      </Card.Body>
            </Card>
        </div>
            </>
    );
}

export default MovingEstimateForm;