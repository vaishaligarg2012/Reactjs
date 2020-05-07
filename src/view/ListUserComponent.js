import React, { Component } from 'react'
import ApiService from '../services/ApiServices';

class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {  
            users: [],
            message: null
        }
       // this.deleteUser = this.deleteUser.bind(this);
        //this.editUser = this.editUser.bind(this);
        this.addStudent = this.addStudent.bind(this);
        this.reloadStudentList = this.reloadStudentList.bind(this);
    } 
  
    componentDidMount() {
        this.reloadStudentList(); 
    }

    reloadStudentList() {
        ApiService.fetchStudent()
            .then((res) => {
                console.log(res);
                this.setState({users: res.data.result})
            });
    }

    deleteUser(userId) {
        // ApiService.deleteUser(userId)
        //    .then(res => {
        //        this.setState({message : 'User deleted successfully.'});
        //        this.setState({users: this.state.users.filter(user => user.id !== userId)});
        //    })

    }

    editUser(id) {
        // window.localStorage.setItem("userId", id);
        // this.props.history.push('/edit-user');
    }

    addStudent() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-Student');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">User Details</h2>
                <button className="btn btn-danger" onClick={() => this.addStudent()}> Add Student</button>
                <table className="table table-striped">
                    <thead> 
                        <tr>
                            <th className="hidden">Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>UserName</th>
                            <th>Age</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                        user =>
                                    <tr key={user.id}>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.username}</td>
                                        <td>{user.age}</td>
                                        <td>{user.salary}</td>
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

export default ListUserComponent;