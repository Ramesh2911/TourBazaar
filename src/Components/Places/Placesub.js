import { Card, CardGroup, Button,Container,Row,Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import NationalData from "../../Json/National.json";
import './placesub.css'
export default function Placesub() {
  let { placeId } = useParams();
  console.log(placeId);

  const subData = NationalData.Places.find((data) => data.p_id === placeId);
  console.log("sub Catagory value", subData);
  // console.log(subData.name);

  return (
    //  <div>hello</div>
        // <h1>{subData.place}</h1>
        <Container className="vi">
  <Row>
    <Col><h1>{subData.place}</h1></Col>
    
  </Row>
  

    <CardGroup>
      {subData.name.map((Placesub) => (
        <Card key={Placesub.sid}>
          <Card.Img variant="top" height={250} src={Placesub.simg}></Card.Img>

          <Card.Body>
            <h2>{Placesub.splace}</h2>

            {/* <Link
              to={`/placesub_page/${value.placeId}/${Placesub.sid}`}
            > */}
            <Link to={`/placeDetails_page/${placeId}/${Placesub.sid}`}>
              <Button>view</Button>
            </Link>
            {/* </Link> */}
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
    </Container>
  );
}
