import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import UserService from "../../services/user.service";
import { logout } from "../../slices/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function UserContent() {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          dispatch(logout());
          navigate("/login");
        }
      }
    );
  }, []);


  return (
    <div>
           <Card className="text-center m-4">
      <Card.Header>User</Card.Header>
      <Card.Body>
        <Card.Title>User loged</Card.Title>
        <Card.Text>
        {content}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>
  )
}
