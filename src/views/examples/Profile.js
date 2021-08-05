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

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";
import Carousels from "../../components/Carousel";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import profile from "assets/img/theme/team-4-800x800.jpg";



class Profile extends React.Component {

  constructor(){
    super();
    this.state={
      text: `Hello my name is ashrf obeidat and i have a bacholer degree
      in plant production from jordan university of scince and technology i
       recently finished an extinsev  web develpoment boot camp`,
       link: 'show more'
    }
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
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
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={profile}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Message
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Ashrf Obeidat{" "}
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Irbed, Jordan
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Full Stack Web Developer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Abdul Aziz Al Ghurair School of Advanced Computing (ASAC)
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          {this.state.text}
                        </p>
                        <a href="#pablo" onClick={(e) =>{
                          this.setState({
                            text:`Hello my name is ashrf obeidat and i have a bacholer degree
                            in plant production from jordan university of scince and technology i
                             recently finished an extinsev  web develpoment boot camp which i belive provided me
                            with the knowledge and skill that makes me sutitable
                            for this great position I strongly bieleve in teamwork
                            and group disscations as i had the chance to work with
                            several amazing teams on several projects which i
                            beileve provided me with enough expierence and skills
                            to enhanced my ability to commincate efficteivly with
                            tammates and clients , i beileve that i will fit in
                            this great working environmnet and my skills will
                            develop even more and of course , this will be a great
                            chance to make new friends . What excites you the most
                            about tech? the feeling that Every thing is possible
                            as far as technology is been concerned. When you are
                            surrounded with technical things you feel much more
                            ‘powerfull'. And the feeling that you are not alone is
                            always backing you .`,
                            link:'show less'
                          })
                          this.state.link==='show less'&& this.setState({
                            text:`Hello my name is ashrf obeidat and i have a bacholer degree
                            in plant production from jordan university of scince and technology i
                             recently finished an extinsev  web develpoment boot camp `,
                            link:'show more'
                          })
                          e.preventDefault()} }>
                          {this.state.link}
                        </a>
                      </Col>

                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
          <div  style={{width:'90%', margin:'0 auto',height:'30%'}}>
          <Carousels />
          </div>

        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
