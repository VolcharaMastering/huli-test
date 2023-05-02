import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateMenu({ startDate, endDate, handleStartDateChange, handleEndDateChange }) {

    return (
        <div>
            <div>
                <DatePicker
                    selected={new Date(startDate)}
                    onChange={handleStartDateChange}
                    selectsStart
                    startDate={new Date(startDate)}
                    endDate={new Date(endDate)}
                    dateFormat="yyyy-MM-dd"
                />
            </div>
            <div>
                <DatePicker
                    selected={new Date(endDate)}
                    onChange={handleEndDateChange}
                    selectsEnd
                    startDate={new Date(startDate)}
                    endDate={new Date(endDate)}
                    minDate={new Date(startDate)}
                    dateFormat="yyyy-MM-dd"
                />
            </div>
        </div>
    )
}
export default DateMenu;
