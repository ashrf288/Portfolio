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
import Image1 from 'assets/img/theme/salmoon1.png';
import Image2 from 'assets/img/theme/busmall.png';
import Image4 from 'assets/img/theme/ev.png';
import Image5 from 'assets/img/theme/coming.jpeg';

let arr=[
  { name:'cookie-stand',img:Image1,url:"https://ashrf288.github.io/cookie-stand/",desc:' calculte cookies sales and average for each city'},
  { name:'Buss mall',img:Image2,url:"https://ashrf288.github.io/bus-mall/",desc:'  select you favorit items from variaty of items avilable'},
  { name:'Emergency-advisor',img:Image4,url:"https://anti-devs.github.io/emergency-advisor/",desc:' chronic disease tips and cautionary measures'},
  { name:'301 project',img:Image5,url:'#',desc:' COMING SOON'},
  { name:'401 project',img:Image5,url:'#',desc:' COMING SOON'},
]

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";


// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
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
                  { arr.map(obj=>{
                     return( <Col lg="4">
                     <Card className="card-lift--hover shadow border-0">
                       <CardBody className="py-5" style={{textAlign:'center'}}>

                          <img src={obj.img} style={{width:'250px'}}/>

                         <h6 className="text-success text-uppercase">
                         {obj.name}
                         </h6>
                         <p className="description mt-3">
                         {obj.desc}
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
                          to={obj.url}
                          target="_blank">
                         <Button
                           className="mt-4"
                           color="primary"
                           href={obj.url}
                           target='_blank'
                         >
                           Visit Now
                         </Button>
                         </Link>

                       </CardBody>
                     </Card>
                   </Col>)
                   })}
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
