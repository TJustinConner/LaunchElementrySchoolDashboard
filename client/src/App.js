import React from "react";
import StudentNavbar from "./navbars/studentNavbar";
import TeacherNavbar from "./navbars/teacherNavbar";
import AdminNavbar from "./navbars/adminNavbar";
import CalendarView from "./calendar/calendarView";
import CalendarEdit from "./calendar/calendarEdit";

function App() {
  return (
    <div>
      <AdminNavbar />
      <div>
        <CalendarEdit />
      </div>
    </div>
  );
}

export default App;
