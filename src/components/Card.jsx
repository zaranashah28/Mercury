import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent() {
  return (
    <Card style={{ marginTop: "20px" }} className="bg-dark text-white">
      <Card.Body>
        <Card.Title>Welcome to MercuryVRC</Card.Title>
        <Card.Text>
        "Revolutionary Fusion: Uniting Virtual Velocity with Real-world Racing - The Ultimate SimuRCar Experience"
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
