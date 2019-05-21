const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("btech_admission", (req, res) => {
  res.sendFile(__dirname + "/btech_admission.html");
});
app.get("btech_ece", (req, res) => {
  res.sendFile(__dirname + "/btech_ece.html");
});
app.get("career", (req, res) => {
  res.sendFile(__dirname + "/career.html");
});
app.get("director_message", (req, res) => {
  res.sendFile(__dirname + "/director_message.html");
});
app.get("faq", (req, res) => {
  res.sendFile(__dirname + "/faq.html");
});
app.get("gallery", (req, res) => {
  res.sendFile(__dirname + "/gallery.html");
});
app.get("invited_talks", (req, res) => {
  res.sendFile(__dirname + "/invited_talks.html");
});
app.get("library", (req, res) => {
  res.sendFile(__dirname + "/library.html");
});
app.get("mtech_ece", (req, res) => {
  res.sendFile(__dirname + "/mtech_ece.html");
});
app.get("phd", (req, res) => {
  res.sendFile(__dirname + "/phd.html");
});
app.get("student_corner", (req, res) => {
  res.sendFile(__dirname + "/student_corner.html");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.post("/", (req, res) => {
  console.log(req.body.username);
  console.log(req.body.password);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
