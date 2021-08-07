import React from "react";
import Image1 from '../assets/img/theme/salmoon1.png';
import Image2 from '../assets/img/theme/busmall.png';
import Image3 from '../assets/img/theme/salmoon3.png';
import Image4 from '../assets/img/theme/ev.png';
import { UncontrolledCarousel } from "reactstrap";

const items = [

  {
    src:Image1,
    altText: 'a',
    caption: '',
    header: '',
    key:0
  },
  {
    src:Image2,
    altText: 'a',
    caption: '',
    header: '',
    key:1
  },
  {
    src: Image3,
    altText: 'a',
    caption: '',
    header: '',
    key:2
  },
  {
    src: Image4,
    altText: 'a',
    caption: '',
    header: '',
    key:2
  }

];

class Carousels extends React.Component {
  render() {
    return (
      <>
        <h2 style={{textAlign:'center',fontSize:'50PX'}}>Some of my projects</h2>
        <UncontrolledCarousel items={items}  />
      </>
    );
  }
}

export default Carousels;