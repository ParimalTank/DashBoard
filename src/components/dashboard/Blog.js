import { Card, CardBody ,Row , Col , CardTitle , CardText , CardImg} from "reactstrap";


const mystyle = {
  color: 'blue',
  lineHeight: 4,
  padding: '1em',
  justifyContent: "space-between"
}

const Blog = () => {

  return (
      <Card style={{ maxWidth: '860px' }}>
      <Row className='g-0'>
        <Col md='8'>
          <CardBody>
            <CardTitle><h6>Hot Scoops</h6></CardTitle>
            <CardTitle><b>Samsung Galaxy F22 launched in india : Price , feature , other details</b></CardTitle>
            <CardText>
                <h6>Samsung Galaxy F22 launched in india.</h6>
            </CardText>
            <CardText>
              <small style={mystyle}>Relevent</small>
              <small style={mystyle}>Share</small>
              <small style={mystyle}>Read Later</small>
              <small style={mystyle}>[Source]</small>
              <small style={mystyle} className='text-muted'>15 mins ago</small>
            </CardText>
          </CardBody>
        </Col>
        <Col md='2' mx='2' my='2'>
        <CardImg src='https://via.placeholder.com/150' alt='...' fluid />
        </Col>
      </Row>
    </Card>
  );
};

export default Blog;
