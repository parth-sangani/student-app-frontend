import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Table,Button, Input, FormGroup } from 'reactstrap';
import BASE_URL from '../services/StudentService';

function ViewAllStudents(){

    let history = useHistory();

    const [students,setStudents] = useState([]);

    const getAllStudents = () => {
        axios.get(`${BASE_URL}/student`).then(
            (response) => {
                console.log(response.data);
                setStudents(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong, Try Later...",{
                    position: "bottom-center"
                });
            }
        );
    }

    const getByHigherPercent = () => {
        axios.get(`${BASE_URL}/student-high-percent`).then(
            (response) => {
                console.log(response.data);
                setStudents(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong, Try Later...",{
                    position: "bottom-center"
                });
            }
        );
    }

    const getByLowerPercent = () => {
        axios.get(`${BASE_URL}/student-low-percent`).then(
            (response) => {
                console.log(response.data);
                setStudents(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong, Try Later...",{
                    position: "bottom-center"
                });
            }
        );
    }

    useEffect(() => {
        document.title = "View All Students";
        getAllStudents();
    },[]);

    const deleteStudent = (id) => {
        axios.delete(`${BASE_URL}/student/${id}`).then(
            (response) => {
                console.log("Deleted");
                toast.success("Deleted Successfully...",{
                    position: "bottom-center"
                });
                setStudents(students.filter((s) => s.id != id));
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong...",{
                    position: "bottom-center"
                });

            }
        );
    }

    const updateStudent = (id) =>{
        history.push(`/update-student/${id}`);
    }

    const getByDepartmentDesc = (dept) => {
        axios.get(`${BASE_URL}/student-high-percent/${dept}`).then(
            (response) => {
                console.log(response.data);
                setStudents(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong, Try Later...",{
                    position: "bottom-center"
                });
            }
        );
    }

    const getByDepartmentAsc = (dept) => {
        axios.get(`${BASE_URL}/student-low-percent/${dept}`).then(
            (response) => {
                console.log(response.data);
                setStudents(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong, Try Later...",{
                    position: "bottom-center"
                });
            }
        );
    }

    return(
        <>
        <h1 className="my-3 text-center">View All Students</h1>
        <span className="m-2">Sort By: </span>
        <Button className="m-2" color="primary"
        onClick={() =>{
            getByHigherPercent();
        }}
        >Percentage &#8595;</Button>
        <Button className="m-2" color="primary"
        onClick={() =>{
            getByLowerPercent();
        }}
        >Percentage &#8593;</Button>

        <span className="m-2">CS: </span>
        <Button className="m-2" color="primary"
        onClick={() =>{
            getByDepartmentDesc("CS");
        }}
        >&#8595;</Button>

        <Button className="m-2" color="primary"
        onClick={() =>{
            getByDepartmentAsc("CS");
        }}
        >&#8593;</Button>

        <span className="m-2">IT: </span>
        <Button className="m-2" color="primary"
        onClick={() =>{
            getByDepartmentDesc("IT");
        }}
        >&#8595;</Button>

        <Button className="m-2" color="primary"
        onClick={() =>{
            getByDepartmentAsc("IT");
        }}
        >&#8593;</Button>


        <span className="m-2">EXTC: </span>
        <Button className="m-2" color="primary"
        onClick={() =>{
            getByDepartmentDesc("EXTC");
        }}
        >&#8595;</Button>

        <Button className="m-2" color="primary"
        onClick={() =>{
            getByDepartmentAsc("EXTC");
        }}
        >&#8593;</Button>


        <span className="m-2">CIVIL: </span>
        <Button className="m-2" color="primary"
        onClick={() =>{
            getByDepartmentDesc("CIVIL");
        }}
        >&#8595;</Button>

        <Button className="m-2" color="primary"
        onClick={() =>{
            getByDepartmentAsc("CIVIL");
        }}
        >&#8593;</Button>

        <Table className="text-center my-2" borderless striped responsive>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Department</th>
                    <th>Percentage</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.length > 0 ? students.map((student)=>{
                       return(
                       <tr key={student.id}>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.department}</td>
                        <td>{student.percentage}</td>
                        <td>
                            <Button className="m-2" color="primary"
                            onClick={() => {
                                updateStudent(student.id);
                            }}
                            >Edit</Button>
                            <Button tag="button" type="submit" color="danger" className="m-2" 
                            onClick={() => {
                                deleteStudent(student.id);
                                }}
                                >Delete</Button>
                        </td>
                       </tr>
                        )
                    }) : 
                        <>
                        <tr>
                            <td  colspan="5">No data found</td>
                        </tr>
                        </>
                }

            </tbody>
        </Table>
        </>
    );
}

export default ViewAllStudents;