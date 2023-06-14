import { Card, Image, Col, Row } from "react-bootstrap";

interface ICard {
  avatar: string;
  body: string;
  title: string;
  website?: string;
  key?: number;
}

export const ReuseCard: React.FC<ICard> = ({
  avatar,
  body,
  title,
  key,
  website,
}) => {
  return (
    <Card key={key}>
      <Card.Body>
        <Row>
          <Col xs={2}>
            <Image
              src={avatar}
              style={{ width: "50px", height: "50px" }}
              roundedCircle
            />
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Card.Title>{title}</Card.Title>
          </Col>
        </Row>
        <Card.Text>{website}</Card.Text>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
};
