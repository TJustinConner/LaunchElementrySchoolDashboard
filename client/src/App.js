import React from "react";
import StudentNavbar from "./navbars/studentNavbar";
import TeacherNavbar from "./navbars/teacherNavbar";
import AdminNavbar from "./navbars/adminNavbar";
import CalendarView from "./calendar/calendarView";

function App() {
  return (
    <div>
      <AdminNavbar />
      <div>
        <CalendarView />
      </div>
    </div>
  );
}

export default App;
