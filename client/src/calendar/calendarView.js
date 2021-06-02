import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import { connected } from "process";

function CalendarView() {
  const [data, setData] = useState([]);

  const [calEvent, setCalEvent] = useState([]);

  const headerFormat = {
    start: "dayGridMonth,dayGridWeek,dayGridDay",
    center: "title",
    end: "today prev,next",
  };

  function newFetch() {
    const url = new URL("http://localhost:8000/student/calendar/retrieve");

    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        setData(obj);
        formatEvent(obj);
      });
  }

  useEffect(() => {
    console.log("refresh");
    newFetch();
  }, []);

  console.log(data);
  console.log(calEvent);

  const formatEvent = (res) => {
    return setCalEvent(
      res.map((e) => ({
        title: e.name,
        start: e.time[0]._seconds * 1000,
        end: e.time[1]._seconds * 1000,
      }))
    );
  };

  return (
    <div
      style={{
        width: "96vw",
        display: "block",
        justifyContent: "center",
        marginLeft: "2vw",
        marginRight: "2vw",
        marginTop: "2vh",
      }}
    >
      <FullCalendar
        plugins={[dayGridPlugin, bootstrapPlugin]}
        initialView="dayGridMonth"
        height="90vh"
        headerToolbar={headerFormat}
        events={calEvent}
      />
    </div>
  );
}

export default CalendarView;
