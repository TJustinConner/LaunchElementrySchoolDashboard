import React from "react";
import StudentNavbar from "./navbars/studentNavbar";
import TeacherNavbar from "./navbars/teacherNavbar";
import AdminNavbar from "./navbars/adminNavbar";
import { Route, Switch } from 'react-router-dom';
import Directory from './components/Directory'
import EditDirectory from './components/EditDirectory'


function App() {
  return (
    <div>
      <AdminNavbar />
      <Switch>
        <Route 
          path="/teacherdir" 
          render={() => (
            <Directory type='teacher' isAdmin={false}/>
        )}/>
        <Route 
          path="/studentdir" 
          render={() => (
            <Directory type='student' isAdmin={false}/>
        )}/>
        <Route 
          path="/editteacher" 
          render={() => (
            <EditDirectory type='teacher'/>
        )}/>
        <Route 
          path="/editstudent" 
          render={() => (
            <EditDirectory type='student'/>
        )}/>
      </Switch>
    </div>
  );
}

export default App;
