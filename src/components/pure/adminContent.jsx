import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function AdminContent() {
  return (
    <div>   
     <Card className="text-center m-4">
      <Card.Header>Admin</Card.Header>
      <Card.Body>
        <Card.Title>Admin loged</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="success">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>
  )
}
