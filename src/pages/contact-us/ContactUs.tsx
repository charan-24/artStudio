import { Button, Card, Col, Container, Row } from "react-bootstrap";
import * as bsIcons from "react-icons/bs";
import * as fiIcons from "react-icons/fi";
import * as goIcons from "react-icons/go";
import * as faIcons from "react-icons/fa";
import * as aiIcons from "react-icons/ai";
import * as ioIcons from "react-icons/io5";
export const ContactUs = () => {
  return <div className="contact-content">
    <div className="contactHeader">
     <h1><b>CONTACT US</b></h1>
    </div>
    <div className="contactInfo">
      <p className="contactNote">For any queries, enrollment, and commissions, please reach out to us using any of the following <br /> mediums. Before visiting, <b>kindly call us</b> to take appointment.</p>
      <div className="contactBox">
        <ul>
          <li>
            <a href="https://api.whatsapp.com/send?phone=918106532696&text=Hi%20Kavitha%20Ma%27am.%20I%20just%20saw%20your%20website%20and%20I%20am%20curious%20to%20know.....">
            <Row className="appRow">
          <Col className="appsCol1" lg={1}>
          <bsIcons.BsWhatsapp className="appIcons"/>
          </Col>
          <Col className="ml-2">
          <p className="contactApp"><b>WhatsApp / Call</b></p>
          <p>+91-8106532696</p>
          </Col>
        </Row>
        </a>
        </li>
        <li>
          <a href="mailto:info@kaviartstudio.in">
            <Row className="appRow">
          <Col className="appsCol2" lg={1}>
          <ioIcons.IoMailOpenOutline className="appIcons"/>
          </Col>
          <Col className="ml-2">
          <p className="contactApp"><b>Email</b></p>
          <p>info@kaviartstudio.in</p>
          </Col>
        </Row>
        </a>
        </li>
        <li>
          <a href="https://www.instagram.com/kavi_artstudio/">
            <Row className="appRow">
          <Col className="appsCol3" lg={1}>
          <fiIcons.FiInstagram className="appIcons"/>
          </Col>
          <Col className="ml-2">
          <p className="contactApp"><b>Instagram</b></p>
          <p>@kavi_artstudio</p>
          </Col>
        </Row>
        </a>
        </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.youtube.com/channel/UCf7GDsRKAWih4IAYCpFXoGA">
            <Row className="appRow">
          <Col className="appsCol4" lg={1}>
          <fiIcons.FiYoutube className="appIcons"/>
          </Col>
          <Col className="ml-2">
          <p className="contactApp"><b>Youtube</b></p>
          <p>Kavi Art Studio</p>
          </Col>
        </Row>
        </a>
        </li>
        <li>
          <a href="https://www.facebook.com/KaviArtStudio/">
            <Row className="appRow">
          <Col className="appsCol5" lg={1}>
          <fiIcons.FiFacebook className="appIcons"/>
          </Col>
          <Col className="ml-2">
          <p className="contactApp"><b>Facebook</b></p>
          <p>Kavi Art Studio</p>
          </Col>
        </Row>
        </a>
        </li>
        <li>
          <a href="https://in.pinterest.com/kaviartstudio">
        <Row className="appRow">
          <Col className="appsCol6" lg={1}>
          <faIcons.FaPinterestP className="appIcons"/>
          </Col>
          <Col className="ml-2">
          <p className="contactApp"><b>Pinterest</b></p>
          <p>Kavi Art Studio</p>
          </Col>
        </Row>
        </a>
        </li>
        </ul>
      </div>
      <h3 className="appointment">VISIT US (WITH APPOINTMENT ONLY)</h3>
      <div className="maps">
      <Card className="mapCard" style={{ width: '30rem'}}>
       <a href="https://www.google.com/maps/place/Kavi+Art+Studio/@17.4055645,78.3872292,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcb90cabd542a55:0xd3e9d0856620548c!8m2!3d17.4055619!4d78.3894669"><Card.Img variant="top" src="https://static.wixstatic.com/media/c9480b_bf0491154cf147ed94139ce403b733fc~mv2.jpg/v1/crop/x_383,y_214,w_636,h_357/fill/w_599,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c9480b_bf0491154cf147ed94139ce403b733fc~mv2.jpg" /></a> 
        <Card.Body>
        <Card.Title className="mt-3"><b>Tellapur Address</b></Card.Title>
        <Card.Text className="mt-5">
        Villa No. 70, Sancia Homes, Osman Nagar Rd, Tellapur, Hyderabad, Telangana 502032
      </Card.Text>
      <Card.Text className="mt-4">
      Link to Map: <a href="https://www.google.com/maps/place/Kavi+Art+Studio/@17.4055645,78.3872292,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcb90cabd542a55:0xd3e9d0856620548c!8m2!3d17.4055619!4d78.3894669">Kavi Art Studio - Google Maps</a> 
      </Card.Text>
      </Card.Body>
      </Card>
      <Card className="mapCard" style={{ width: '30rem' }}>
        <a href="https://www.google.com/maps/place/Kavi+Art+Studio/@17.4055645,78.3872292,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcb90cabd542a55:0xd3e9d0856620548c!8m2!3d17.4055619!4d78.3894669"><Card.Img variant="top" src="https://static.wixstatic.com/media/c9480b_abe1b489ab564417a1ea7108dccade5b~mv2.jpg/v1/crop/x_263,y_167,w_667,h_376/fill/w_599,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c9480b_abe1b489ab564417a1ea7108dccade5b~mv2.jpg" /></a> 
        <Card.Body>
        <Card.Title className="mt-3"><b>Manikonda Address</b></Card.Title>
        <Card.Text className="mt-5">
        Plot No 176-B, OU Colony, Manikonda, Dargah, Shaikpet, Hyderabad, Telangana 500008
      </Card.Text>
      <Card.Text className="mt-4">
      Link to Map: <a href="https://www.google.com/maps/place/Kavi+Art+Studio/@17.4055645,78.3872292,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcb90cabd542a55:0xd3e9d0856620548c!8m2!3d17.4055619!4d78.3894669">Kavi Art Studio - Google Maps</a> 
      </Card.Text>
      </Card.Body>
      </Card>
    </div>
    </div>
    <div className="contactFooter">
      <div className="footerQuote">
        <p className="">Art is something that makes you breathe with a different kind of happiness.</p>
        <p className="mt-1">Anni Albers</p>
      </div>
      <div className="aboutContact">
        <Row >
          <Col className="acol1" lg={4}>
            <img src="https://static.wixstatic.com/media/c9480b_ffe59367b1324362a10eae5dda764b80~mv2.png/v1/fill/w_199,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/painting-classes-kids-adults-hyderabad.png" alt="KaviArtsLogo" />
            <p>Kavi Art Studio (prev. Yashoda Art Classes) is India's only Art Institute to be rated 4.8★ on Google with 54 different online & offline painting classes for kids and adults in Hyderabad.
            </p>
            <p>
            ©2020 Kavi Art Studio. All rights reserved.
            Designed by_.
            </p>
          </Col>
          <Col lg={4}>
          <p>img</p>
          </Col>
          <Col>
          <p>img</p>
          </Col>
          <Col>
          <p>img</p>
          </Col>
        </Row>
      </div>
    </div>
  </div>
}
function rgb(arg0: number, arg1: number, arg2: number): import("csstype").Property.Background<string | number> | undefined {
  throw new Error("Function not implemented.");
}

