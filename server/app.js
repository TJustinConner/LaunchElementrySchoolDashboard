const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 8000;
app.use(express.json());

var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/student/student-directory/retrieve", (req, res) => {
  const studentRef = db.collection("students");
  let temp = [];
  studentRef
    .get()
    .then((resp) => {
      resp.forEach((doc) => {
        temp.push(doc.data());
      });
    })
    .then(() => {
      console.log(temp);
      res.send(temp);
    });
});

app.get("/student/teacher-directory/retrieve", (req, res) => {
  const teacherRef = db.collection("teachers");
  let temp = [];
  teacherRef
    .get()
    .then((resp) => {
      resp.forEach((doc) => {
        temp.push(doc.data());
      });
    })
    .then(() => {
      res.send(temp);
    });
});

app.get("/student/calendar/retrieve", (req, res) => {
  console.log("calendar fetch");

  const calendarRef = db.collection("events");
  let temp = [];
  calendarRef
    .get()
    .then((resp) => {
      resp.forEach((doc) => {
        temp.push(doc.data());
      });
    })
    .then(() => {
      res.send(temp);
    });
});

app.post("/admin/edit-calendar/add-event", async (req, res) => {
  console.log(req.body.id);
  const resp = await db.collection("events").doc(req.body.id).set(req.body);

  res.sendStatus(200);
});

app.delete("/admin/edit-calendar/delete-event", async (req, res) => {
  const { id } = req.body;

  const resp = await db.collection("events").doc(id).delete();

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
