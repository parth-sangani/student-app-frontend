import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import BASE_URL from '../services/StudentService';

function AddStudent(){

    const [student,setStudent] = useState({});

    //adding student
    const getFormData = (e) => {
        e.preventDefault();
        addStudent(student);
    }

    const addStudent = (data) =>{
        axios.post(`${BASE_URL}/student`,data).then(
            (Response) =>{
                console.log("Added Successfully");
                console.log(Response);
                setStudent({});
                toast.success("Added Successfully !!!",{
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
        <h1 className="text-center font-weight-bold mt-3">Add Student</h1>
        <Form onSubmit={getFormData} className="mt-3">
            <FormGroup className="my-2">
                <Label for="firstName">First Name:</Label>
                <Input type="text" placeholder="ENter First Name" id="firstName" name="firstName" required 
                onChange={(e)=> {
                    setStudent({...student,firstName: e.target.value});
                    }} />
            </FormGroup>
            <FormGroup className="my-2">
                <Label for="lastName">Last Name:</Label>
                <Input type="text" placeholder="Enter Last Name" id="lastName" name="lastName" required
                onChange={(e)=> {
                    setStudent({...student,lastName: e.target.value});
                    }} />
            </FormGroup>
            <FormGroup className="my-2">
                <Label for="department">Department:</Label>
                <Input type="select" id="department" name="department" required
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
                <Input type="number" placeholder="Enter Percentage" id="percentage" name="percentage" required 
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

export default AddStudent;