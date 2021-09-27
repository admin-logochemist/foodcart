import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ResturantInfo = (props) => {
  return (
    <div>
      <Card style={{marginRight:'10px'}}>
        <CardImg top width="100%" src="https://img.freepik.com/free-photo/empty-wood-table-top-abstract-blurred-restaurant-cafe-background-can-be-used-display-montage-your-products_7191-916.jpg?size=626&ext=jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Frenchista</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ResturantInfo;