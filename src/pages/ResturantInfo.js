import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectResturant } from '../features/ResSlice';

const ResturantInfo = ({resname,phone,email,cusine,img,address}) => {
  const history=useHistory();
  const  dispatch = useDispatch();
  const openResturant=()=>{
    dispatch(selectResturant({resname,phone,email,cusine,img,address}));
    history.push('/restaurantbox')
  }
  return (
    <div onClick={openResturant}>
      <Card style={{marginRight:'10px'}}>
        <img top width="100%" src={img} alt="Card image cap" />
        <CardBody>
        <CardTitle tag="h4">{resname}</CardTitle>
          <CardSubtitle  className="mb-2 text-muted">{cusine}</CardSubtitle>
          <CardText>{email}</CardText>
          <CardText>{phone}</CardText>
          <CardText>{address}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ResturantInfo;