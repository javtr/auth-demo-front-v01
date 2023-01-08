import React, {  useEffect  } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../slices/auth";
import { clearMessage } from "../../slices/message";


export default function Login() {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);


  const onSubmit = formValue => {
    
    const { username, password } = formValue;

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        navigate("/");
        window.location.reload();
      })
      .catch(() => {
      });
  
  };


  return (
    <Form className='m-5' onSubmit={handleSubmit(onSubmit)}>

      <Form.Group className="mb-3">
        <Form.Label>User Name</Form.Label>
        <Form.Control
        {...register("username")} 
         type="text" placeholder="Enter user name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        {...register("password")} 
        type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
  )
}
