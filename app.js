const express = require("express");
const bodyParser = require("body-parser");
const databaseConnection = require("./databaseConnection");
const APIStudents = require("./model");

const app = express();

app.use(express.json());
app.use(bodyParser());

app.set("port", process.env.PORT || 3000);

app.get("/", async (req, res) => {
  const Students = await APIStudents.find();
  res.json(Students);
});

app.get("/:id", async (req, res) => {
  const Student = await APIStudents.findById(req.params.id);
  res.json(Student);
});

app.post("/", async (req, res) => {
  const NewStudent = new APIStudents({
    name: req.body.name,
    email: req.body.email,
    admission: req.body.admission,
  });
  const student1 = await NewStudent.save();
  res.json(student1);
});

app.patch("/:id", async (req, res) => {
  const Student = await APIStudents.findById(req.params.id);
  Student.admission = req.body.admission;
  const Student1 = await Student.save();
  res.json(Student1);
});

app.delete("/:id", async (req, res) => {
  const Student = await APIStudents.findById(req.params.id);
  Student.admission = req.body.admission;
  const Student1 = await Student.remove();
  res.json(Student1);
});

app.listen(app.set("port"), () => {
  console.log("Server started");
});
