import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';

function Home(){
    return(
        <>
        <Jumbotron className="text-center mt-5 pt-5">
            <h1 className="display-3 mt-5">Welcome to Student's Portal</h1>
            <Link tag="button" className="btn btn-primary mt-4" to="/view-all">View Students</Link>
        </Jumbotron>
        </>
    );
}

export default Home;