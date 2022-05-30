import React, { useState } from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Drawings from './drawings'
import img1 from './images/peacock.webp';
import * as ioIcons from "react-icons/io5";
import * as bsIcons from "react-icons/bs";
import * as fiIcons from "react-icons/fi";
export const Paintings = () =>{
    const themes = [
        {
            name:'Love'
        },
        {
            name:'Religious'
        },
        {
            name:'Lady'
        },
        {
            name:'Flora'
        },
        {
            name:'Fauna'
        },
        {
            name:'Scenary'
        },
        {
            name:'All'
        },
    ]
    const [items,setItems] = useState(Drawings);
    const filterItems = (catgItem: string | string[]) =>{
        if (catgItem == 'All'){
            setItems(Drawings);
        }
        else{
        const updatedItem = Drawings.filter((curEle) => {
            return curEle.category == catgItem;
        });
        setItems(updatedItem);
    }
    }
    return(
        <div className="main-paintings">
           <div className="paintingHeader">
             <p className="text-center"><b>BUY INDIAN HANDMADE PAINTINGS</b></p>
           </div>
           <div className="category">
               <h3 className="text-center mt-3">Theme</h3>
                <div className="checks">
                   {
                       themes.map(({name},index) =>{
                        return(
                            <div className="themes">
                            <input
                            id={name}
                            type="radio"
                            name="theme"
                            value={name}
                            onChange={()=> filterItems(name)}
                            />
                            <label htmlFor={name}>{name}</label>
                            </div>
                        )
                       }
                       )
                   }
                </div>
           </div>
            <div className="paintings">
                <Row >
                {
                    items.map(
                        
                        (ele)=>{
                            const {key,image,title,description,category}=ele;
                            return(
                                <>
                                <Col lg={3} md={3} sm={4} xs={6}>
                                <Card className="border-warning mt-5">
                                    <Card.Img src={img1} />
                                    <Card.Body>
                                    <Card.Text className="title mt-3 text-center">
                                        {title}
                                    </Card.Text>
                                    <Card.Text className="desc mt-2 text-center">
                                       {description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                                </>
                            )
                        }
                    )
                } 
                </Row>
            </div>
            <div className="endnote">
                <div className="endnote1 mt-5">
                    <p>You've reached the end of our gallery!</p>
                </div>
                <div className="endnote2 mt-5">
                   <p>If you want a new specific painting, you can discuss with us for a commission.</p> 
                </div>
                <div className="endnote3">
                    <ul>
                        <li><a href="" className="Icon2"><fiIcons.FiInstagram className=""/></a></li>
                        <li><a href="" className="Icon4"><bsIcons.BsWhatsapp className=""/></a></li>
                        <li><a href="" className="Icon5"><ioIcons.IoMailOpenOutline className=""/></a></li>
                    </ul>
                    <button type="button" className="btn"><Link to='/contact-us'>Contact Page</Link></button>
                </div>
            </div>
            </div>
    )
}  