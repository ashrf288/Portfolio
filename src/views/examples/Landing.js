/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";
import Image1 from 'assets/img/theme/salmoon1.png';
import Image2 from 'assets/img/theme/busmall.png';
import Image3 from 'assets/img/theme/salmoon3.png';
import Image4 from 'assets/img/theme/ev.png';

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  NavItem,
  Nav,
  Row,
  Col
} from "reactstrap";


// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";
import { NavLink,Link } from "react-router-dom";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                       Projects{" "}

                      </h1>

                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5" style={{textAlign:'center'}}>

                           <img src={Image4} style={{width:'250px'}}/>

                          <h6 className="text-success text-uppercase">
                          Emergency-advisor
                          </h6>
                          <p className="description mt-3">
                          chronic disease tips and cautionary measures
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div>
                          <Link
                           to="https://web.facebook.com/ashraf.mazkoor/"
                           target="_blank">
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://anti-devs.github.io/emergency-advisor/"
                            target='_blank'
                          >
                            Visit Now
                          </Button>
                          </Link>

                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5" style={{textAlign:'center'}}>
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                          <img src={Image1} style={{width:'250px'}}/>

                          </div>
                          <h6 className="text-success text-uppercase">
                          cookie-stand
                          </h6>
                          <p className="description mt-3">
                           calculte cookies sales and average for each city
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://ashrf288.github.io/cookie-stand/"
                            target='_blank'
                          >
                            Visit Now
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5" style={{textAlign:'center'}}>
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                          <img src={Image2} style={{width:'250px'}}/>

                          </div>
                          <h6 className="text-success text-uppercase">
                          Buss mall
                          </h6>
                          <p className="description mt-3">
                           select you favorit items from variaty of items avilable
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://ashrf288.github.io/bus-mall/"
                            target='_blank'
                          >
                            Visit Now
                          </Button>
                        </CardBody>
                      </Card>

                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>




        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
