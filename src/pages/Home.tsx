import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import storeItems from "../data/items.json";
import "./Home.css";
import { StoreItem } from "../components/StoreItem";

export function Home() {
  const featuredItemIds = [1, 6, 8, 12]; // IDs of featured items

  // Filter store items to include only the featured items
  const featuredItems = storeItems.filter((item) =>
    featuredItemIds.includes(item.id)
  );

  return (
    <div className="main-container">
     
      <div className="home-bg">
        <Container className="home-content text-center">
          <h1 className="home-title">Welcome to Twins Tech</h1>
          <p className="home-description">
            Explore our cutting-edge technology products and start shopping
            today!
          </p>
          <Link to="/store">
            <Button variant="primary" className="home-button">
              Shop Now
            </Button>
          </Link>
        </Container>
      </div>

      <Container className="mt-5">
        <h2 className="section-title text-center">Featured Products</h2>
        <Row>
          {featuredItems.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Additional Tools */}
      <Container className="mt-5">
        <h2 className="section-title text-center">Discover More</h2>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <Card className="mb-4 border border-light">
              <Card.Body>
                <Card.Title>Product Reviews</Card.Title>
                <Card.Text>
                  Read reviews and ratings from our satisfied customers. Make
                  informed decisions before purchasing.
                </Card.Text>
                <Link to="/reviews">
                  <Button variant="dark">Read Reviews</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="mb-4 border border-light ">
              <Card.Body>
                <Card.Title>Tech Blog</Card.Title>
                <Card.Text>
                  Explore our tech blog for the latest tech news, tips, and
                  tutorials written by our experts.
                </Card.Text>
                <Link to="/blog">
                  <Button variant="dark">Read Blog</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={4}>
            <Card className="mb-4 border border-light">
              <Card.Body>
                <Card.Title>Subscribe to Newsletter</Card.Title>
                <Card.Text>
                  Stay updated with our latest product releases and exclusive
                  offers. Subscribe to our newsletter.
                </Card.Text>
                <Link to="/newsletter">
                  <Button variant="dark">Subscribe</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* End of Additional Tools */}
    </div>
  );
}
