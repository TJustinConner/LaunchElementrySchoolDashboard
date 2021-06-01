const express = require("express");
const cors = require('cors')

const app = express();
app.use(cors())
const port = 8000;

var admin = require("firebase-admin");
var serviceAccount = require("./tj-dashboard-9b5d7-firebase-adminsdk-grdgm-7fbed6cee1");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/student/student-directory/retrieve", (req, res) => {
  const studentRef = db.collection('students')
  let temp = [];
  studentRef.get().then((resp) => {
    resp.forEach((doc) => {
      temp.push(doc.data());
    });
  }).then(() => {
    console.log(temp)
    res.send(temp);
  })
});

app.get("/student/teacher-directory/retrieve", (req, res) => {
  const teacherRef = db.collection('teachers')
  let temp = [];
  teacherRef.get().then((resp) => {
    resp.forEach((doc) => {
      temp.push(doc.data());
    });
  }).then(() => {
    res.send(temp);
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
