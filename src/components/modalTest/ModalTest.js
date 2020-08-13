import React, {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import {MDBCol, MDBMask, MDBRow, MDBView} from "mdbreact";
import {ThemeProvider} from "styled-components";
import {DatePicker, theme} from "react-trip-date";
import {Link, Route, Switch} from "react-router-dom";
import {
    MovingBusan, MovingChungbuk, MovingChungnam,
    MovingDaegu,
    MovingDaejeon, MovingGangwon,
    MovingGwangju, MovingGyeongbuk,
    MovingGyeonggi, MovingGyeongnam,
    MovingIncheon, MovingJeju, MovingJeonbuk, MovingJeonnam, MovingSejong,
    MovingSeoul, MovingUlsan
} from "../move/component/movingPoint/movingLocal";
import {MovingEndPoint, MovingStartPoint} from "../move/component/movingPoint";


const handleResponsive = setNumberOfMonth => {
    let width = document.querySelector('.tp-calendar').clientWidth;
    if (width > 900) {
        setNumberOfMonth(3);
    } else if (width < 900 && width > 580) {
        setNumberOfMonth(2);
    } else if (width < 580) {
        setNumberOfMonth(1);
    }
};
const Day = ({day}) => {
    return (
        <>
            <p className="date">{day.format('DD')}</p>
        </>
    );
};

const ModalTest = ({ modalPage, show, handleClose, handlePage }) => {
    const [showw, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!showw)
    }
    const [pickDate, setPickDate] = useState('')
    const onChangeDate = date => {
        console.log(date)
    }
    const onClickPickDate = e => {
        setPickDate(e.target.value)

    }
    const [Title, setTitle] = useState("")

    return (
        <div>
            <Modal  size={"lg"} show={show} onHide={handleClose}>

                <Modal.Body>
                    {(modalPage === 1) &&
                    <div >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                이사종류
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body onClick={handlePage}>
                            <MDBRow>
                                <MDBCol md="5">
                                    <MDBView hover>
                                        <img
                                            src="https://image.flaticon.com/icons/svg/888/888448.svg"
                                            className="img-fluid"
                                            alt=""

                                        /><h3>보관이사</h3><p>국내 최대 규모의 보관창고운영<br/>안전하고 깔끔한 보관서비스</p>
                                        <MDBMask className="flex-center" overlay="red-strong">
                                            <p className="white-text">보관이사</p>
                                        </MDBMask>
                                    </MDBView>
                                </MDBCol>
                                <MDBCol md="5">
                                    <MDBView hover>
                                        <img
                                            src="https://image.flaticon.com/icons/svg/1625/1625514.svg"
                                            className="img-fluid"
                                            alt=""
                                        /><h3>사무실이사</h3><p>회사,공장,병원,관공서,학교,학원 등의 이사</p>
                                        <MDBMask className="flex-center" overlay="red-strong">
                                            <p className="white-text">사무실이사</p>
                                        </MDBMask>
                                    </MDBView>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="5">
                                    <MDBView hover>
                                        <img
                                            src="https://image.flaticon.com/icons/svg/3023/3023392.svg"
                                            className="img-fluid"
                                            alt=""
                                        /><h3>집이사</h3><p>이삿짐이 1톤 이상의 짐</p>
                                        <MDBMask className="flex-center" overlay="red-strong">
                                            <p className="white-text">집이사</p>
                                        </MDBMask>
                                    </MDBView>
                                </MDBCol>
                                <MDBCol md="5">
                                    <MDBView hover>
                                        <img
                                            src="https://image.flaticon.com/icons/svg/948/948615.svg"
                                            className="img-fluid"
                                            alt=""
                                        /><h3>소형이사</h3><p>이삿짐이 1톤 이하의 짐</p>
                                        <MDBMask className="flex-center" overlay="red-strong">
                                            <p className="white-text">소형이사</p>
                                        </MDBMask>
                                    </MDBView>
                                </MDBCol>
                            </MDBRow>
                        </Modal.Body>
                    </div>
                    }
                    {(modalPage === 2) &&
                    <div> <Modal.Header closeButton>
                        <Modal.Title>이사 날짜</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <ThemeProvider theme={theme} >
                                <DatePicker
                                    pickDate={pickDate}
                                    onClick={onClickPickDate}
                                    handleChange={onChangeDate}
                                    selectedDays={""} //initial selected days
                                    numberOfMonths={1}
                                    numberOfSelectableDays={1} // number of days you need
                                    disabledDays={""} //disabeld days
                                    responsive={handleResponsive} // custom responsive, when using it, `numberOfMonths` props not working
                                    disabledBeforToday={true}
                                    disabled={false} // disable calendar
                                    dayComponent={Day} //custom day component
                                    titleComponent={Title} // custom title of days
                                />
                            </ThemeProvider>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={ handlePage} variant="secondary" >다음</Button>
                        </Modal.Footer></div>
                    }
                    {(modalPage === 3) &&
                    <div onClick={onClickShow}>
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">물량계산기</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h1>안녕</h1>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary">Close</Button>
                        </Modal.Footer>
                       </div>
                    }
                    {/*(modalPage === 4) &&
                    <h1>dkdk</h1>
                    }*/}

                </Modal.Body>
            </Modal>
        </div>
    );
};
export default ModalTest;