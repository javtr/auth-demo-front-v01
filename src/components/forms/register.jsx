import React, {  useEffect  } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerAction } from "../../slices/auth";
import { clearMessage } from "../../slices/message";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);


  const onSubmit = formValue => {
    
    const { username, email, password } = formValue;

    dispatch(registerAction({ username, email, password }))
      .unwrap()
      .then(() => {
      })
      .catch(() => {
      });
  
  };


  return (
    <Form className='m-5' onSubmit={handleSubmit(onSubmit)}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control
        {...register("username")} 
         type="text" placeholder="Enter user name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        {...register("email")} 
         type="email" placeholder="Enter email" />
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