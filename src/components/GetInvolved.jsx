import { Container, Form, Button } from 'react-bootstrap';

export default function GetInvolved() {
  return (
    <Container style={{ marginTop: '80px' }}>
      <h1>Get Involved</h1>
      <div className="mt-4">
        <h2>Volunteer Opportunities</h2>
        <p>Join us in making a difference! Check out our volunteer opportunities.</p>
        <a href="https://habitatdane.volunteerhub.com/vv2/#_" target="_blank" rel="noopener noreferrer">
          Click here to get involved
        </a>
      </div>
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