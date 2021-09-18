import axios from "axios";
const url = "http://localhost:5000/all-courses";

export const fetchCourses = () => axios.get(url);