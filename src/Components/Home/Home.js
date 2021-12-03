import React from "react";
import { Row, Col, Card, Button, Carousel } from "react-bootstrap";
//import NationalData from "../../Json/National.json";
import NationalData from "../../Json/National.json";
import InternationalData from "../../Json/International.json";
import { Link } from "react-router-dom";

export default function Home() {
  // let value = useParams();
  // console.log("id", value);
  // const [state, setstate] = useState();
  // const [International, setInternational] = useState([{}]);
  // useEffect(() => {
  //   setstate(NationalData.Places);
  //   console.log(state);
  // },[] );
  // useEffect(() => {
  //   setInternational(InternationalData.Places);
  //   console.log(International);
  // }, []);
  //  console.log(state);
  //  const val=state.splice(6,0);
  // //  setInternational()
  //  console.log(val);

  return (
    
    <div>
      <Row className="g-4">
        {/* {Array.from({ length: 2 }).map((_, idx) => ( */}
        <Col xs={12} md={6}>
          <Card>
            <h1>National</h1>
            <Carousel>
              {NationalData.Places.map((n) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                       height={250}
                      // weight={300}
                      src={n.img}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      {" "}
                      <h4>{n.place}</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <h1>International</h1>
            <Carousel>
              {InternationalData.place1.map((I) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                       height={250}
                      src={I.img}
                      alt=""
                    />
                    <Carousel.Caption>
                      <h4>{I.place}</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Card>
        </Col>
        )
      </Row>
      <br />
      <Card className="bg-dark text-white">
        <Card.Img
          height={230}
          src="https://teenfinancialfreedom.com/wp-content/uploads/2020/09/the-power-of-reading.jpg"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title>Reading Corner</Card.Title>
          <Card.Text>
            Travel Blogs Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </Card.Text>
          <Link to="/reading_page">
            <Button variant="info">Info</Button>
          </Link>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
