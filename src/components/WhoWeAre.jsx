import { Container, Card } from 'react-bootstrap';

export default function WhoWeAre() {
  return (
    <Container style={{ marginTop: '80px' }}>
      <h1>Who We Are</h1>
      <Card>
        <Card.Body>
          <Card.Title>Board Members</Card.Title>
          <ul>
            <li>President: Myah</li>
            <li>Vice President: Cassie</li>
            <li>Treasurer: Sanjeev Gorla</li>
          </ul>
          <Card.Title>Our Beliefs</Card.Title>
          <p>The Habitat for Humanity Campus Chapter at University of Wisconsin-Madison (or Habitat-UW Chapter) works with its local affiliate, Habitat for Humanity of Dane County, and with Habitat for Humanity International in order to achieve the Habitat mission through the four functioning pillars: Building, Educating, Fundraising, and Advocacy.</p>
        </Card.Body>
      </Card>
    </Container>
  );
}