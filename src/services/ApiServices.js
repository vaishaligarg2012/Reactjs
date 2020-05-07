import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8083/Student';

class ApiServices {
  
    fetchStudent() {
        return axios.get(USER_API_BASE_URL+"/getAllStudent");
    }

    fetchStudentById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteStudent(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addStudent(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editStudent(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }
 
}  

export default new ApiServices();  