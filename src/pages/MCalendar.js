import React, { useState } from "react";
import "../assets/css/calendar.css";
import { Calendar, utils, DatePicker } from "react-modern-calendar-datepicker";

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
*/
    const [selectedDate, setSelectedDate] = useState("2019-08-18T10:30")
    const renderCustomInput = ({ ref }) => (
        <input
            readOnly
            ref={ref} // necessary
            placeholder="I'm a custom input"
            value={selectedDay ? `✅: ${selectedDay.day}` : ''}
            style={{
                textAlign: 'center',
                padding: '1rem 1.5rem',
                fontSize: '1.5rem',
                border: '1px solid #9c88ff',
                borderRadius: '100px',
                boxShadow: '0 1.5rem 2rem rgba(156, 136, 255, 0.2)',
                color: '#9c88ff',
                outline: 'none',
            }}
            className="my-custom-input-class" // a styling class
        />
    )


    const [selectedDay, setSelectedDay] = useState('');
/*    const [selectedDayRange, setSelectedDayRange] = useState(
        preselectedDays
    );*/
    console.log(selectedDay)
    return (
        <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            minimumDate={utils().getToday()}
            renderInput={renderCustomInput} // render a custom input
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
            ]}
            /*value={selectedDayRange}
            onChange={setSelectedDayRange}
            shouldHighlightWeekends*/
        />
    );
};

export default MCalendar;