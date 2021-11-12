import React from 'react';
import {Table,Container,Button} from "react-bootstrap"


const Home = props => {

        const promptList=["Test Poll 1","Test Poll 2"]

    return (
        <Container>
            <Table style={{ margin: "5vh" }} striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>List of Polls</th>
                        <th>Go to Poll</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        promptList.map((el,index)=>{
                         return  (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el}</td>
                                <td><Button>Go to Poll</Button></td>
                            </tr>
                         );
                        })}
                </tbody>
            </Table>
        </Container>
    );
};

export default Home;