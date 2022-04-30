import { Col, Row } from "reactstrap";
import Blog from "../components/dashboard/Blog";
import Feeds from "../components/dashboard/Search";
import Topics from "../components/dashboard/Topics";

const Starter = () => {
  return (
    <div>
      {/***Top Cards***/}

      {/*** Feed***/}
      <h5><b>Top Stories for you</b></h5>
      <Row>
        <Col sm="6" lg="6" xl="5" xxl="8">
          <Blog />
        </Col>
        <Col sm="6" lg="1" xl="1" xxl="4">
          <Feeds />
          <Topics />
        </Col>
      </Row>
     
    </div>
  );
};

export default Starter;
