import { useEffect, useState } from "react";
import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../services/api";

function Home({ loggedInUser }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  
  const fetchStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [loggedInUser]);

  const handleAddStudent = async (event) => {
    event.preventDefault();

    try {
      await createStudent(newStudent);
      setNewStudent({ name: "", email: "", course: "" });
      setShowAddForm(false);
      await fetchStudents();
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const handleNewStudentChange = (event) => {
    const { name, value } = event.target;
    setNewStudent((currentStudent) => ({
      ...currentStudent,
      [name]: value,
    }));
  };


  const handleUpdate = async (id) => {
    if (!loggedInUser) {
      window.alert("Please login first");
      return;
    }

    const student = students.find((student) => student.id === id);

    const name = prompt("Enter name:", student.name);
    const email = prompt("Enter email:", student.email);
    const course = prompt("Enter course:", student.course);

    if (!name || !email || !course) return;

    try {
      await updateStudent(id, {
        name,
        email,
        course,
      });

      fetchStudents();
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };


  const handleDelete = async (id) => {
    if (!loggedInUser) {
      window.alert("Please login first");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      await deleteStudent(id);

      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  if (loading) {
    return <div className="p-6">Loading students...</div>;
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Students</h1>
        {loggedInUser && (
          <button
            type="button"
            onClick={() => setShowAddForm((isVisible) => !isVisible)}
            className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            {showAddForm ? "Cancel" : "Add Student"}
          </button>
        )}
      </div>

      {loggedInUser && showAddForm && (
        <form
          onSubmit={handleAddStudent}
          className="mb-6 rounded-lg border border-gray-300 bg-white p-4 shadow-sm"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={newStudent.name}
              onChange={handleNewStudentChange}
              required
              className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={newStudent.email}
              onChange={handleNewStudentChange}
              required
              className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            />
            <input
              name="course"
              type="text"
              placeholder="Course"
              value={newStudent.course}
              onChange={handleNewStudentChange}
              required
              className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Save Student
          </button>
        </form>
      )}

      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <div className="space-y-4">
          {students.map((student) => (
            <div
              key={student.id}
              className="border border-gray-300 rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold">
                  {student.name}
                </h2>

                <p className="text-gray-600">
                  {student.email}
                </p>

                <p className="text-gray-600">
                  {student.course}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleUpdate(student.id)}
                  aria-disabled={!loggedInUser}
                  className={`rounded-md px-4 py-2 text-white ${
                    loggedInUser
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "cursor-not-allowed bg-blue-300"
                  }`}
                >
                  Update
                </button>

                <button
                  onClick={() => handleDelete(student.id)}
                  aria-disabled={!loggedInUser}
                  className={`rounded-md px-4 py-2 text-white ${
                    loggedInUser
                      ? "bg-red-500 hover:bg-red-600"
                      : "cursor-not-allowed bg-red-300"
                  }`}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;