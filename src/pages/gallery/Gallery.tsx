import { Card, Carousel, Col, Row } from "react-bootstrap";
import * as bsIcons from 'react-icons/bs';
import * as grIcons from 'react-icons/gr';
import * as ioIcons from 'react-icons/io';
import * as imIcons from 'react-icons/im';
import und2 from "../gallery/images/underline2.webp";
import img1 from "../gallery/images/butterfly.webp";
import c1 from "../gallery/images/carousel-1.webp";
import c2 from "../gallery/images/carousel-2.webp";
import c3 from "../gallery/images/carousel-3.webp";
import c4 from "../gallery/images/carousel-4.webp";
import c5 from "../gallery/images/carousel-5.webp";
import c6 from "../gallery/images/carousel-6.webp";

import Drawings from './drawings';
import { useState } from "react";
import { Link } from "react-router-dom";

export const Gallery = () => {
  const [lm1,setLm1]=useState(4);
  const [lm2,setLm2]=useState(14);
  const [lm3,setLm3]=useState(20);
  const loadMore1 = () =>{
    setLm1(7);
  }
  const loadMore2 = () =>{
    setLm2(17);
  }
  return(
  <div className="gallery">
    <div className="gallery1">
      <div className="heading">
      <p className="header"> Original Paintings that</p>
      <p className="caption text-warning"> <b>light up every space</b> </p>
      </div>
    </div>
     <div className="gallery2">
      <div className="g2header">
      <p><b>Art makes a house our home</b></p>
      <img src="https://static.wixstatic.com/media/c9480b_560097934c2b491ebea29fe4cece727c~mv2.png/v1/fill/w_500,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/kavi%20art%20studio.png" alt="Kavi art studio"/>
      </div>
      <div className="gallery2p">
      <p>Every corner of our home reflects who we are. It oozes with warmth, memories and is the ultimate expression of our deepest personalities.  No matter how many people are on earth, no one can be you. Isn't it?
      </p>
      <p className="mt-1">Would you rather choose a heartless item that sits in thousands of homes? Or an exquisite artwork, that strikes heartfelt conversations every time you have a guest?
      </p>
      <p className="mt-1">At Kavi Art Studio, we believe that everybody has a unique taste, that can't be matched with mass manufactured decor. And you are no exception.
      </p>
      </div>
    </div>
    <div className="gallery3">
    <Carousel indicators={false}>
      <Carousel.Item className="car1">
      <img
          className="d-block w-100"
          src={c1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="car2">
      <img
          className="d-block w-100"
          src={c2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="car3">
      <img
          className="d-block w-100"
          src={c3}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="car4">
      <img
          className="d-block w-100"
          src={c4}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="car5">
      <img
          className="d-block w-100"
          src={c5}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="car6">
      <img
          className="d-block w-100"
          src={c6}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    <div className="gallery4">
      <p className="header">Buy Indian Handmade Paintings like never before</p>
      <img src={und2} alt="" />
      <div className="facilities">
        <div className="fac">
          <bsIcons.BsFillBagCheckFill className="ficon"/>
          <p>Framed & Unfamed <br/>options Available</p>
        </div>
        <div className="fac">
          <grIcons.GrCertificate className="ficon"/>
          <p>16 years of Expertise <br/>of Mrs. Kavitha</p>
        </div>
        <div className="fac">
          <ioIcons.IoMdColorPalette className="ficon"/>
          <p>Diverse and Handmade<br/> Paintings</p>
        </div>
        <div className="fac">
          <imIcons.ImGift className="ficon"/>
          <p>Gift packing available</p>
        </div>
        <div className="fac">
          <grIcons.GrDeliver className="ficon"/>
          <p>Free Shipping across<br/> India</p>
        </div>
      </div>
    </div>
    <div className="gallery5">
    {/* <img src={process.env.PUBLIC_URL + "/background5.webp"} />  */}
    </div> 
     <div className="gallery6">
      <div className="paintingheader">
        <p className="p1">Gift something that reminds them of you, forever</p>
        <p className="p2">Gift Handmade Paintings for Birthdays, House Warming and Weddings</p>
      </div>
      <div className="samples">
        <Row>
        {
          Drawings.slice(0,lm1).map((item)=>{
              return(
                  <>
                  <Col  lg={3} md={3} sm={4} xs={6}>
                  <Card  className="border-0 mt-5">
                      <Card.Img src={img1} />
                      <Card.Body>
                      <Card.Text className="title mt-3 text-center" key={item.key}>
                          {item.title}
                      </Card.Text>
                      {/* <Card.Text className="desc mt-2 text-center">
                         {item.description}
                      </Card.Text> */}
                  </Card.Body>
              </Card>
              </Col>
                  </>
              )
          })
        }
        </Row>
      </div>
        <button type="button" style={{ display: lm1 >= 7 ? 'none' : 'inline' }} className="loadmore btn mt-5 mb-5" onClick={loadMore1}>Load More</button>
    </div>
    <div className="gallery7">
    </div> 
    <div className="gallery8">
      <div className="paintingheader">
        <p className="p1">Large masterpieces that display your personality</p>
        <p className="p2">Large canvas paintings that elevate your living room</p>
      </div>
      <div className="samples">
        <Row>
        { 
          Drawings.slice(7,10).map((item)=>{
              return(
                  <>
                  <Col lg={3} md={3} sm={4} xs={6}>
                  <Card className="border-0 mt-5">
                      <Card.Img src={img1} />
                      <Card.Body>
                      <Card.Text className="title mt-3 text-center">
                          {item.title}
                      </Card.Text>
                      {/* <Card.Text className="desc mt-2 text-center">
                         {item.description}
                      </Card.Text> */}
                  </Card.Body>
              </Card>
              </Col>
                  </>
              )
          })
        }
        </Row>
      </div>
    </div>
    <div className="gallery9">
    </div> 
    <div className="gallery10">
      <div className="paintingheader">
        <p className="p1">Paintings that make a statement in every room</p>
        <p className="p2">Original Paintings make a focal point in every room</p>
      </div>
      <div className="samples">
        <Row>
        {
          Drawings.slice(10,lm2).map((item)=>{
              return(
                  <>
                  <Col lg={3} md={3} sm={4} xs={6}>
                  <Card className="border-0 mt-5">
                      <Card.Img src={img1} />
                      <Card.Body>
                      <Card.Text className="title mt-3 text-center">
                          {item.title}
                      </Card.Text>
                      {/* <Card.Text className="desc mt-2 text-center">
                         {item.description}
                      </Card.Text> */}
                  </Card.Body>
              </Card>
              </Col>
                  </>
              )
          })
        }
        </Row>
      </div>
        <button type="button" style={{ display: lm2 >= 17 ? 'none' : 'inline' }} className="loadmore btn mt-5 mb-5" onClick={loadMore2}>Load More</button>
    </div>
    <div className="gallery11">
    </div> 
    <div className="gallery12">
      <div className="paintingheader">
        <p className="p1">Bring home intricate Indian folk wall art</p>
        <p className="p2">Madhubani, Kalamkari, Tanjore, Kerala Murals Paintings and many more</p>
      </div>
      <div className="samples">
        <Row>
        {
          Drawings.slice(17,lm3).map((item)=>{
              return(
                  <>
                  <Col lg={3} md={3} sm={4} xs={6}>
                  <Card className="border-0 mt-5">
                      <Card.Img src={img1} />
                      <Card.Body>
                      <Card.Text className="title mt-3 text-center">
                          {item.title}
                      </Card.Text>
                      {/* <Card.Text className="desc mt-2 text-center">
                         {item.description}
                      </Card.Text> */}
                  </Card.Body>
              </Card>
              </Col>
                  </>
              )
          })
        }
        </Row>
      </div>
      <p className="p1">Explore more exquisite paintings in our full gallery</p>
      <button type="button"><Link to="/paintings"><b>VIEW  ALL PAINTINGS</b></Link></button>
    </div> 
  </div>
  )  
}


