import React from 'react'
import { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface TimeValue {
    time: string;
    date: string;
}

function Calender() {
        const [startDate, setStartDate] = useState(new Date());
      
        let handleColor = (time: { getHours: () => number; }) => {
          return time.getHours() > 12 ? "text-success" : "text-error";
        };
      
        return (
          <DatePicker
            showTimeSelect
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            timeClassName={handleColor}
          />
        );
      };
 

export default Calender