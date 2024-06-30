import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';

const UserTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('User data fetch error:', error);
        // Handle error, e.g., show error message or redirect to login
      }
    };

    fetchUserData();
  }, []);

  return (
    <Container>
      <h2>User Table</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.dob}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserTable;
