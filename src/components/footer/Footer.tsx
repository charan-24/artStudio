import { Card, CardGroup, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import * as bsIcons from "react-icons/bs";
import * as fiIcons from "react-icons/fi";
import * as goIcons from "react-icons/go";
import * as faIcons from "react-icons/fa";
import * as aiIcons from "react-icons/ai";
import * as ioIcons from "react-icons/io5";

export const Footer = ()=>{
    return(
    <div className="Tfooter">
        <CardGroup className="">
            <Card className="fcard1 border-0">
            <Card.Img src="https://static.wixstatic.com/media/c9480b_f4b9be4ef3034f85a8508757633cf329~mv2.png/v1/crop/x_47,y_67,w_705,h_424/fill/w_130,h_79,al_c,usm_0.66_1.00_0.01,enc_auto/IAsset%209.png" className="mx-auto" style={{width:200}}/>
            <Card.Body>
                    <Card.Text className="mt-3">
                        Kavi Art Studio (prev. Yashoda Art Classes) is India's only Art Institute to be 
                        rated 4.8★ on Google with 54 different online & offline painting classes for kids and adults in Hyderabad.
                    </Card.Text>
                    <Card.Text className="creditsNote mt-5 text-warning">
                     ©2020 Kavi Art Studio. All rights reserved.
                     Designed by Srija Boora   
                    </Card.Text>
                </Card.Body>
            </Card> 
            <Card className="fcard2 border-0">
               <Card.Body>
               <Card.Title>
                    CONNECT FOR UPDATES
                    <div className="mediaIcons position-relative p-3">
                     <ul className=" mt-3">
                        <li><a href="" className="Icon1"><fiIcons.FiYoutube className=""/></a></li>
                        <li><a href="" className="Icon2"><fiIcons.FiInstagram className=""/></a></li>
                        <li><a href="" className="Icon3"><fiIcons.FiFacebook className=""/></a></li>
                        <li><a href="" className="Icon4"><bsIcons.BsWhatsapp className=""/></a></li>
                    </ul> 
                    </div>
                </Card.Title>
                <Card.Title>
                    VISIT US
                </Card.Title>
                <Card.Subtitle className="text-muted">
                (WITH  APPOINTMENT ONLY)
                </Card.Subtitle>
                <Card.Text className="mt-2 text-center">
                <a href="">Tellapur</a> & <a href="">Manikonda,</a> <br/>Hyderabad, India
                </Card.Text> 
                <Card.Title className="mt-4">
                    GET IN TOUCH
                </Card.Title>
                <Card.Text className="text-center">
                CALL : <a href="">+91-8106532696</a> 
                <br/>
                EMAIL : <a href="">info@kaviartstudio.in</a> 
                </Card.Text>
               </Card.Body> 
            </Card>
            <Card className="fcard3 pt-5 border-0">
            <ul className="ul1">
                <h5><b>OUR EXPERTISE</b></h5>
                <li> <Link to='/'>54 Courses</Link> </li>
                <li> <Link to='/'>Online Classes</Link> </li>
                <li> <Link to='/'>Commisions</Link> </li>
                <li> <Link to='/'>Paintings for Sale</Link> </li>
                <li> <Link to='/'>Fabric Works</Link> </li>
                <li> <Link to='/'>Upcoming Events</Link> </li>
            </ul>
            <ul className="ul2">
                <h5><b>USEFUL LINKS</b></h5>
                <li> <Link to='/'>FAQs</Link> </li>
                <li> <Link to='/'>How to Enroll?</Link> </li>
                <li> <Link to='/'>Contact</Link> </li>
                <li> <Link to='/'>Payment</Link> </li>
                <li> <Link to='/'>Terms & Conditions</Link> </li>
                <li> <Link to='/'>Privacy Policy</Link> </li>
            </ul>  
            </Card>
        </CardGroup>
    </div>
    )
    
}
       {/* <Row>
            <Col className="f1 p-5">
            <Link to='/'><img src="https://static.wixstatic.com/media/c9480b_f4b9be4ef3034f85a8508757633cf329~mv2.png/v1/crop/x_47,y_67,w_705,h_424/fill/w_130,h_79,al_c,usm_0.66_1.00_0.01,enc_auto/IAsset%209.png" alt="KaviArtStudio" /></Link>
            <p className="mt-4"> 
                Kavi Art Studio (prev. Yashoda Art Classes) is India's only Art Institute to be 
                rated 4.8★ on Google with 54 different online & offline painting classes for kids and adults in Hyderabad.
            </p>
            <p className="mt-4 text-warning">
                ©2020 Kavi Art Studio. All rights reserved.
                Designed by Srija Boora
            </p>
            </Col>
            <Col className="f2">
            <h4><b>CONNECT FOR UPDATES</b></h4>
            <div className="mediaIcons">
                <a href=""><fiIcons.FiYoutube className=" mt-5 appIcons d-inline"/></a>
                <a href=""><fiIcons.FiInstagram className="appIcons"/></a>
                <a href=""><fiIcons.FiFacebook className="appIcons"/></a>
                <a href=""><bsIcons.BsWhatsapp className="appIcons"/></a>
            
            </div>
            <h6><b>VISIT US</b></h6>
            <p>
            (WITH  APPOINTMENT ONLY)
            <a href="">Tellapur</a> 
            &
            <a href="">Manikonda</a>
            Hyderabad, India
            </p>
            <h5><b>GET IN TOUCH</b></h5>
            <p> CALL : <a href="">+91-8106532696</a> </p>
            <p> EMAIL : <a href="">info@kaviartstudio.in</a> </p>
            </Col>
            <Col className="f3">
            <ul className="ul1">
                <h6><b>OUR EXPERTISE</b></h6>
                <li> <Link to='/'>54 Courses</Link> </li>
                <li> <Link to='/'>Online Classes</Link> </li>
                <li> <Link to='/'>Commisions</Link> </li>
                <li> <Link to='/'>Paintings for Sale</Link> </li>
                <li> <Link to='/'>Fabric Works</Link> </li>
                <li> <Link to='/'>Upcoming Events</Link> </li>
            </ul>
            <ul className="ul2">
                <h6><b>USEFUL LINKS</b></h6>
                <li> <Link to='/'>FAQs</Link> </li>
                <li> <Link to='/'>How to Enroll?</Link> </li>
                <li> <Link to='/'>Contact</Link> </li>
                <li> <Link to='/'>Payment</Link> </li>
                <li> <Link to='/'>Terms & Conditions</Link> </li>
                <li> <Link to='/'>Privacy Policy</Link> </li>
            </ul>
            </Col>
        </Row> */}