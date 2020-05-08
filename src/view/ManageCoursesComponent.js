import React, { Component } from 'react'
import courseApis from '../services/ApisCourses';

class ManageCourses extends Component {

    constructor(props) {
        super(props)
        this.state = {  
            users: [],
            message: null
        }
       // this.deleteUser = this.deleteUser.bind(this);
        //this.editUser = this.editUser.bind(this);
        this.addCourse = this.addCourse.bind(this);
        this.reloadCourseList = this.reloadCourseList.bind(this);
    } 
  
    componentDidMount() {
        this.reloadCourseList(); 
    }

    reloadCourseList() {
        courseApis.fetchCourse()
            .then((res) => {
                console.log(res);
                this.setState({users: res.data.result})
            });
    }

    deleteCourse(userId) {
        // ApiService.deleteUser(userId)
        //    .then(res => {
        //        this.setState({message : 'User deleted successfully.'});
        //        this.setState({users: this.state.users.filter(user => user.id !== userId)});
        //    })

    }

    editCourse(id) {
        // window.localStorage.setItem("userId", id);
        // this.props.history.push('/edit-user');
    }

    addCourse() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-Course');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Course Details</h2>
                <button className="btn btn-danger" onClick={() => this.addCourse()}> Add Course</button>
                <table className="table table-striped">
                    <thead> 
                        <tr>
                            <th className="hidden">Course Id</th>
                            <th>Course Name</th>
                            <th>Topic</th>
                           </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                        user =>
                                    <tr key={user.courseId}>
                                        <td>{user.courseName}</td>
                                        <td>{user.topic}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteUser(user.id)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editUser(user.id)}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    } 

}

export default ManageCourses;

