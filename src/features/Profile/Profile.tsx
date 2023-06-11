import { Card } from "react-bootstrap";

interface ProfileProps {
  username?: string;
  name?: string;
  website?: string;
}

export const AboutMe: React.FC<ProfileProps> = ({
  username,
  name,
  website,
}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{username}</Card.Title>
        <Card.Text>{name}</Card.Text>
        <Card.Text>{website}</Card.Text>
      </Card.Body>
    </Card>
  );
};
