import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ResturantInfo = ({resname,phone,email,cusine,img}) => {
  return (
    <div>
      <Card style={{marginRight:'10px'}}>
        <img top width="100%" src={img} alt="Card image cap" />
        <CardBody>
        <CardTitle tag="h4">{resname}</CardTitle>
          <CardSubtitle  className="mb-2 text-muted">{cusine}</CardSubtitle>
          <CardText>{email}</CardText>
          <CardText>{phone}</CardText>
          <Button>Visit Resturant</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ResturantInfo;