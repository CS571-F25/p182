import { Container, Form, Button } from 'react-bootstrap';

export default function GetInvolved() {
  return (
    <Container style={{ marginTop: '80px' }}>
      <h1>Get Involved</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formEventSignup">
          <Form.Label>Sign up for a Volunteer Event</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Button variant="primary" type="submit">Sign Up</Button>
      </Form>
      <Form className="mt-4">
        <Form.Group className="mb-3" controlId="formNewsletter">
          <Form.Label>Subscribe to our Newsletter</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Button variant="secondary" type="submit">Subscribe</Button>
      </Form>
    </Container>
  );
}