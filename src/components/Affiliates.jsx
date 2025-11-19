import { Container, ListGroup } from 'react-bootstrap';

export default function Affiliates() {
  return (
    <Container style={{ marginTop: '80px' }}>
      <h1>Affiliates</h1>
      <ListGroup>
        <ListGroup.Item action href="https://habitat.org" target="_blank">Habitat for Humanity International</ListGroup.Item>
        <ListGroup.Item action href="https://habitatwisconsin.org" target="_blank">Habitat Wisconsin</ListGroup.Item>
        <ListGroup.Item action href="https://habitatdane.org" target="_blank">Habitat Dane County</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}