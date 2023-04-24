import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./TimeSlotPicker.css";


// const dates = [
//   { date: "2023-03-24", timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM"] },
//   { date: "2023-03-25", timeSlots: ["1:00 PM", "2:00 PM", "3:00 PM"] },
//   { date: "2023-03-26", timeSlots: ["4:00 PM", "5:00 PM", "6:00 PM"] },
//   { date: "2023-03-27", timeSlots: ["5:00 PM", "6:00 PM", "7:00 PM"] },
//   { date: "2023-03-28", timeSlots: ["6:00 PM", "7:00 PM", "8:00 PM"] },
//   { date: "2023-03-29", timeSlots: ["7:00 PM", "8:00 PM", "9:00 PM"] },
// ];

const TimeSlotPicker = ({ dateTimeMap,setSelectedSchedule, setSelectedDate, setSelectedTime  }) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [isShow, setShow] = useState(false);

  // console.log(dateTimeMap);
  // console.log("set function",setSelectedSchedule);

  let selectedDate;

  useEffect(() => {
    setDates();
  }, []);

  const setDates = () => {

      let newDates = [];
      Object.entries(dateTimeMap).forEach(([key, value]) => {
        const timeSlots = value.map(({ id, time }) => ({ id, time }));
        newDates.push({ date: key, timeSlots });
      });
      return newDates;

  };
  const dates = setDates();
  selectedDate = dates[selectedDateIndex];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDateClick = (index) => {
    setSelectedDateIndex(index);

    setSelectedTimeSlot(null); // reset time slot selection when changing dates
  };

  const handleTimeSlotClick = (timeSlot) => {
  const selectedDateTime = Object.entries(dateTimeMap).find(([date, slots]) =>
    slots.some(({ id }) => id === timeSlot)
  );
  if (selectedDateTime) {
    const [selectedDate, selectedTimeSlot] = selectedDateTime;
    setSelectedDate(selectedDate);
   
    setSelectedTime(selectedTimeSlot.find(({ id }) => id === timeSlot).time);

  }

  setSelectedTimeSlot(timeSlot);
  setSelectedSchedule((prev) => ({
    ...prev,
    id: timeSlot,
  }));
};


  return (
    <>
      <div onClick={handleShow}>Select Appointment Slot</div>
      <Modal show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Slots</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="parent-element">
            {/* Carousel of dates */}
            <Carousel
              activeIndex={selectedDateIndex}
              onSelect={(index) => handleDateClick(index)}
              interval={null}
              indicators={false}
              style={{ marginBottom: "20px" }}
              className="carousel"
            >
              {dates.length > 0 &&
                dates.map((date, index) => (
                  <Carousel.Item key={date.date}>
                    <button
                      className={`btn ${
                        selectedDateIndex === index
                          ? "btn-primary"
                          : "btn-outline-primary"
                      } rounded-pill date-button`}
                      onClick={() => handleDateClick(index)}
                    >
                      {date.date}
                    </button>
                  </Carousel.Item>
                ))}
            </Carousel>

            {/* Available time slots for selected date */}
            <div style={{ display: "flex", justifyContent: "center" }}>
             
                    {selectedDate &&
                  selectedDate.timeSlots.map((timeSlotObj) => (
                <button
                  key={timeSlotObj.id}
                  style={{
                    margin: "0 10px",
                    padding: "5px 15px",
                    backgroundColor: "#fce4de",
                    borderRadius: "50px",
                    border: "0.5px solid #dfdfdf",
                  }}
                  onClick={() => handleTimeSlotClick(timeSlotObj.id)}
                  className={selectedTimeSlot === timeSlotObj.id ? "active" : ""}
                  disabled={
                    selectedTimeSlot !== null && selectedTimeSlot !== timeSlotObj.id
                  }
                >
                  {timeSlotObj.time}
                </button>
              ))}


            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TimeSlotPicker;
