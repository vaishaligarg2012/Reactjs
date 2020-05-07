import axios from 'axios';

const USER_API_BASE_URL = 'localhost:8045/Course/';

class ApisCourses {
  
    fetchCourse() {
        return axios.get(USER_API_BASE_URL+"/getAllStudent");
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

export default new ApiServices();  