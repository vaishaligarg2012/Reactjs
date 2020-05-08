import axios from 'axios';

const USER_API_BASE_URL = 'https://localhost:8045/Course';
//http://localhost:8045/Course/getAllCourses/
class ApisCourses {
  
    fetchCourse() {
        return axios.get("https://localhost:8045/Course/getAllCourses/");
    }

    fetchCourseById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteCourse(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addCourse(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editCourse(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }
 
}  

export default new ApisCourses();  