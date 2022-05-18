import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class table extends Component {
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Caleb</td>
                        <td>Rodriguez</td>
                        <td>@c_rod55</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Michael</td>
                        <td>Jackson</td>
                        <td>@TheRealMJ</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Michael</td>
                        <td>Jordan</td>
                        <td>@TheRealestMJ</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}
export default table;