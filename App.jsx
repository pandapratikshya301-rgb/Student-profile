import Student from "./Student";

function App() {
  return (
    <div>
      <h1>Student Information</h1>

      <Student
        name="Pratikshya Panda"
        course="B.Tech CSE - Data Science"
        college="GIET University"
      />

      <Student
        name="Liki Panda"
        course="B.Tech Computer Science"
        college="GIET University"
      />
    </div>
  );
}

export default App;
