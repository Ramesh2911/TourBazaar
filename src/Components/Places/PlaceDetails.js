import React from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import NationalData from "../../Json/National.json";
import { useParams } from "react-router-dom";
import "./placeDetails.css";

export default function PlaceDetails() {
  // const [placestate, setplacestate] = useState({
  //   placeDetails: [],
  // });
  // let { placeId, sid } = useParams();
  let value = useParams();
  console.log("value", value);
  const subData = NationalData.Places.find(
    (data) => data.p_id === value.placeId
  );
  console.log(subData);
  const details = subData.name.find((data) => data.sid === value.sid);
  console.log(details);

  return (
    <div>
      <h1>{details.splace}</h1>
      <Card border="primary">
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <Card.Img
                  variant="top"
                  src={details.simg}
                  className="img-pro"
                />
              </Col>
              <Col>
                <Card.Title className="title-pro">{details.title}</Card.Title>

                <Card.Text className="position-pro">
                  <h1 className="font-pro">Price:</h1>
                  {details.sprice}
                </Card.Text>

                <Card.Text className="position-pro">
                  <h1 className="font-pro">Description:</h1>
                  {details.sdescription}
                </Card.Text>
                <Button className="btn">Book Now</Button>
              </Col>
            </Row>
           
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}
