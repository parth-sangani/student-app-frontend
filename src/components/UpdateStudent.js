import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import BASE_URL from '../services/StudentService';

function UpdateStudent(){

    let match = useRouteMatch();

    const [student,setStudent] = useState({});

    const getStudentById = (id) => {
        axios.get(`${BASE_URL}/student/${id}`).then(
            (response) => {
                console.log(response.data);
                const s = response.data;
                setStudent(
                    {...student,
                        firstName: s.firstName,
                        lastName: s.lastName,
                        department: s.department,
                        percentage: s.percentage
                    }
                    );
                console.log(student);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    useEffect(() => {
        getStudentById(match.params.id);
    },[]);

    //adding student
    const getFormData = (e) => {
        e.preventDefault();
        addStudent(student);
    }

    const addStudent = (data) =>{
        axios.put(`${BASE_URL}/student/${match.params.id}`,data).then(
            (Response) =>{
                console.log("Updated Successfully");
                console.log(Response);
                setStudent({});
                toast.success("Updated Successfully !!!",{
                    position: "bottom-center"
                });
            },
            (error) => {
                console.log("Failed to add");
                console.log(error);
                toast.error("Something went wrong !!!",{
                    position: "bottom-center"
                });
            }
        );
    }

    return(
        <>
        <Row className="justify-content-center">
        <Col md="3">
        <h1 className="text-center font-weight-bold mt-3">Update Student</h1>
        <Form onSubmit={getFormData} className="mt-3">
            <FormGroup className="my-2">
                <Label for="firstName">First Name:</Label>
                <Input type="text" value={student.firstName} placeholder="ENter First Name" id="firstName" name="firstName" required 
                onChange={(e)=> {
                    setStudent({...student,firstName: e.target.value});
                    }} />
            </FormGroup>
            <FormGroup className="my-2">
                <Label for="lastName">Last Name:</Label>
                <Input type="text" value={student.lastName} placeholder="Enter Last Name" id="lastName" name="lastName" required
                onChange={(e)=> {
                    setStudent({...student,lastName: e.target.value});
                    }} />
            </FormGroup>
            <FormGroup className="my-2">
                <Label for="department">Department:</Label>
                <Input type="select" id="department" value={student.department} name="department" required
                onChange={(e)=> {
                    setStudent({...student,department: e.target.value});
                    }}>
                    <option selected>Select Department</option>
                    <option value="CS">CS</option>
                    <option value="IT">IT</option>
                    <option value="EXTC">EXTC</option>
                    <option value="CIVIL">CIVIL</option>
                </Input>
            </FormGroup>
            <FormGroup className="my-2">
                <Label for="percentage">Percentage:</Label>
                <Input type="number" value={student.percentage} placeholder="Enter Percentage" id="percentage" name="percentage" required 
                onChange={(e)=> {
                    setStudent({...student,percentage: e.target.value});
                    }}/>
            </FormGroup>

            <Button type="submit" className="my-2">Submit</Button>
        </Form>
        </Col>
        </Row>
        </>
    );
}

export default UpdateStudent;