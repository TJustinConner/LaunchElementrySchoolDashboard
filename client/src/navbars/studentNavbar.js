import React from "react";
import StudentDrawer from "./studentDrawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

function StudentNavbar() {
  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              width: "35vw",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <StudentDrawer />
          </div>
          <div
            style={{
              width: "30vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">TJ School Dashboard</Typography>
          </div>
          <div
            style={{
              width: "35vw",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              color="inherit"
              onClick={() => {
                handleLogout();
              }}
            >
              LOGOUT
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default StudentNavbar;
