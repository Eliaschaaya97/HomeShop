// UserPage.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const UserPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

 

  const handleLogin = () => {
    // Check if the username contains only letters (no numbers or special characters)
    if (!/^[a-zA-Z]+$/.test(username)) {
      alert('Username should contain only letters.');
      return;
    }
  
    // Continue with the login logic
    fetch(backendUrl + loginEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the PHP backend
        console.log(data);
  
        // Add logic to redirect or handle successful login
        if (data.success) {
          // Successful login logic
        } else {
          // Handle login failure
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  
  
  return (
    <Container
      className="mt-5"
      style={{
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center mb-4">Login to Your Account</h2>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label style={{ fontWeight: "bold" }}>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ border: "2px solid black", borderRadius: "8px" }}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ border: "2px solid black", borderRadius: "8px" }}
              />
            </Form.Group>

            <Button
              variant="success"
              type="button"
              onClick={handleLogin}
              style={{ width: "100%", borderRadius: "8px" }}
            >
              Login
            </Button>

            <div className="mt-3">
              <p>
                Don't have an account? <Link to="/signup">Sign up here</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserPage;
