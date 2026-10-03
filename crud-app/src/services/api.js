import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const registerUser = (data) => {
  return api.post("/register", data);
};

export const loginUser = (data) => {
  return api.post("/login", data);
};

export const getStudents = () => {
  return api.get("/students");
};

export const createStudent = (data) => {
  return api.post("/students", data);
};

export const updateStudent = (id, data) => {
  return api.put(`/students/${id}`, data);
};

export const deleteStudent = (id) => {
  return api.delete(`/students/${id}`);
};

export default api;