import React, { useState } from "react";
import "../assets/css/calendar.css";
import { Calendar } from "react-modern-calendar-datepicker";

const MCalendar = () => {

    /* const preselectedDays = [
         {
             year: 2020,
             month: 8,
             day: 18,
         },
         {
             year: 2020,
             month: 8,
             day: 27,
         },
         {
             year: 2020,
             month: 8,
             day: 28,
         },
         {
             year: 2020,
             month: 9,
             day: 6,
         },
         {
             year: 2020,
             month: 9,
             day: 7,
         },
         {
             year: 2020,
             month: 9,
             day: 16,
         },
         {
             year: 2020,
             month: 9,
             day: 25,
         },
         {
             year: 2020,
             month: 9,
             day: 26,
         },
         {
             year: 2020,
             month: 10,
             day: 5,
         },
         {
             year: 2020,
             month: 10,
             day: 6,
         },
         {
             year: 2020,
             month: 10,
             day: 15,
         },
         {
             year: 2020,
             month: 10,
             day: 16,
         },
         {
             year: 2020,
             month: 10,
             day: 25,
         },
         {
             year: 2020,
             month: 10,
             day: 26,
         },
         {
             year: 2020,
             month: 11,
             day: 4,
         },
         {
             year: 2020,
             month: 11,
             day: 5,
         },
         {
             year: 2020,
             month: 11,
             day: 14,
         },
         {
             year: 2020,
             month: 11,
             day: 23,
         },
         {
             year: 2020,
             month: 11,
             day: 24,
         },
         {
             year: 2020,
             month: 12,
             day: 3,
         },
         {
             year: 2020,
             month: 12,
             day: 4,
         },
         {
             year: 2020,
             month: 12,
             day: 13,
         },
         {
             year: 2020,
             month: 12,
             day: 14,
         },
         {
             year: 2020,
             month: 12,
             day: 23,
         },
         {
             year: 2020,
             month: 12,
             day: 24,
         },

     ]
 */ //multiSelect
    const [selectedDay, setSelectedDay] = useState("")

    console.log(selectedDay)

    return (
        <div id="wrapper">
            <div id="page-wrap">
                <div className="row">
                    <div className="col-lg-12"><br/>
                        <h2 className="mt-5 text-center">이사 날짜 선택</h2><br/>
                    </div>
                    <section className="select">
                        <Calendar
                            value={selectedDay}
                            onChange={setSelectedDay}
                            shouldHighlightWeekends
                            customDaysClassName={[
                                {
                                    year: 2020,
                                    month: 8,
                                    day: 18,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 8,
                                    day: 27,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 8,
                                    day: 28,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 9,
                                    day: 6,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 9,
                                    day: 7,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 9,
                                    day: 16,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 9,
                                    day: 25,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 9,
                                    day: 26,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 9,
                                    day: 30,
                                    className: 'redDay'
                                },
                                {
                                    year: 2020,
                                    month: 10,
                                    day: 1,
                                    className: 'redDay'
                                },
                                {
                                    year: 2020,
                                    month: 10,
                                    day: 2,
                                    className: 'redDay'
                                },
                                {
                                    year: 2020,
                                    month: 10,
                                    day: 3,
                                    className: 'redDay'
                                },
                                {
                                    year: 2020,
                                    month: 10,
                                    day: 5,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 10,
                                    day: 6,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 10,
                                    day: 9,
                                    className: 'redDay'
                                },
                                {
                                    year: 2020,
                                    month: 10,
                                    day: 15,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 10,
                                    day: 16,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 10,
                                    day: 25,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 10,
                                    day: 26,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 11,
                                    day: 4,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 11,
                                    day: 5,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 11,
                                    day: 9,
                                    className: 'primaryDay'
                                },
                                {
                                    year: 2020,
                                    month: 11,
                                    day: 10,
                                    className: 'primaryDay'
                                },
                                {
                                    year: 2020,
                                    month: 11,
                                    day: 11,
                                    className: 'primaryDay'
                                },
                                {
                                    year: 2020,
                                    month: 11,
                                    day: 12,
                                    className: 'primaryDay'
                                },
                                {
                                    year: 2020,
                                    month: 11,
                                    day: 13,
                                    className: 'primaryDay'
                                },
                                {
                                    year: 2020,
                                    month: 11,
                                    day: 16,
                                    className: 'primaryDay'
                                },
                                {
                                    year: 2020,
                                    month: 11,
                                    day: 17,
                                    className: 'primaryDay'
                                },
                                {
                                    year: 2020,
                                    month: 11,
                                    day: 18,
                                    className: 'primaryDay'
                                },
                                {
                                    year: 2020,
                                    month: 11,
                                    day: 19,
                                    className: 'primaryDay'
                                },
                                {
                                    year: 2020,
                                    month: 11,
                                    day: 20,
                                    className: 'primaryDay'
                                },
                                {
                                    year: 2020,
                                    month: 11,
                                    day: 14,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 11,
                                    day: 23,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 11,
                                    day: 24,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 12,
                                    day: 3,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 12,
                                    day: 4,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 12,
                                    day: 13,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 12,
                                    day: 14,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 12,
                                    day: 23,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 12,
                                    day: 24,
                                    className: 'greenDay'
                                },
                                {
                                    year: 2020,
                                    month: 12,
                                    day: 25,
                                    className: 'redDay'
                                },
                            ]}
                        />
                    </section>
                    <section className="card-body">
                        <p className="color-a">＊손 없는 날<h6>35% 추가 금액 발생</h6></p>
                        <p className="color-b">＊공휴일<h6>평일에 비해 15% 추가 금액 발생</h6></p>
                        <p className="color-c">＊특가 기간<h6>평일에 비해 20% 할인</h6></p>
                    </section>
                    {/*// 주말월말에는 평일에 비해서 이사가 많아 가격이 15% 비싸요
                    // 손 없는날은 35퍼*/}
                </div>
            </div>
        </div>
    );
};

export default MCalendar;