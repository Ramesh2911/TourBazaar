import React from "react";
import { Row, Col, Card } from "react-bootstrap";
//import NationalData from "../../Json/National.json";
import Place from "../../Json/Place.json"
import { Link} from "react-router-dom";

export default function Places() {
  // let {value} = useParams()
  // console.log("id",value);
  // console.log(NationalData.Places);
  return (
    <div>
      <Row xs={3} md={3} className="g-4">
        {/* height={200} */}
        {/* {Array.from({ length: 12 }).map((_, idx) => ( */}

        {Place.Places.map((e) => {
          return (
            <Col>
              <Link to={`/placesub_page/${e.p_id}`}>
                <Card>
                  <Card.Img variant="top" height={250} src={e.img} />

                  <Card.Body>
                    <Card.Title>{e.place}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>

      
    </div>
  );
}
