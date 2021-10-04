import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectResturant } from '../features/ResSlice';

const ResturantInfo = ({obj}) => {
  const history=useHistory();
  const  dispatch = useDispatch();
  const openResturant=()=>{
    let payload = obj
    dispatch(selectResturant(payload));
    history.push('/restaurantbox', obj)
  }
  return (
    <div onClick={openResturant}>
      {console.log('óbj', obj)}
      <Card style={{marginRight:'10px' ,cursor:'pointer'}}>
        <img top width="100%" src={obj?.postImage} alt="Card image cap" />
        <CardBody>
        <CardTitle tag="h4">{obj?.resName}</CardTitle>
          <CardSubtitle  className="mb-2 text-muted">{obj?.cusine}</CardSubtitle>
          <CardText>{obj?.email}</CardText>
          <CardText>{obj?.phone}</CardText>
          <CardText>{obj?.address}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ResturantInfo;