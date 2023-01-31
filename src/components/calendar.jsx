import { useState } from "react";

const Calendar = () => {
  const monthDays = {
    0: { days: 31, name: "January", firstDay: 0 },
    1: { days: 28, name: "February", firstDay: 3 },
    2: { days: 31, name: "March", firstDay: 3 },
    3: { days: 30, name: "April", firstDay: 5 },
    4: { days: 31, name: "May", firstDay: 1 },
    5: { days: 30, name: "June", firstDay: 4 },
    6: { days: 31, name: "July", firstDay: 6 },
    7: { days: 31, name: "August", firstDay: 1 },
    8: { days: 30, name: "September", firstDay: 5 },
    9: { days: 31, name: "October", firstDay: 0 },
    10: { days: 30, name: "November", firstDay: 2 },
    11: { days: 31, name: "December", firstDay: 5 },
  };

  let date = new Date();
  let month = date.getMonth();

  const [value, setValue] = useState(month)

  const moveBackward = () => {
    if(value !== 0){
      setValue(value - 1)
    }
  }

  const moveUpward = () => {
    if(value !== 11){
      setValue(value + 1)
    } 
  }

  const listDays = [];

  const days = monthDays[value].days;
  const monthName = monthDays[value].name;
  const totalOfEmptyDays = monthDays[value].firstDay;
  let j = 0;

  for (let i = 0; i < (days + totalOfEmptyDays); i++) {
    if (i < totalOfEmptyDays) {
      listDays.push(<div key={i}></div>);
    } else {
      listDays.push(<div className="days-item" key={i}>{j + 1}</div>);
      j++;
    }
  }

  return (
    <div className="">

      <div className="monthName">
        <div className="leftArrow">
          <button onClick={moveBackward}>&#60;</button>
        </div>
        <div className="title">
          {monthName}
        </div>
        <div className="rightArrow">
          <button onClick={moveUpward}>&#62;</button>
        </div>
      </div>

      <div className="days">
        <div className="days-head">Sunday</div>
        <div className="days-head">Monday</div>
        <div className="days-head">Tuesday</div>
        <div className="days-head">Wednesday</div>
        <div className="days-head">Thursday</div>
        <div className="days-head">Friday</div>
        <div className="days-head">Saturday</div>
        {listDays}
      </div>
    </div>
  );
};
export default Calendar;
