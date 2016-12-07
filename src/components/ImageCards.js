import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ImageCards = () => (
  <Card>
    <CardMedia
      overlay={<CardTitle title="Titulo Da Imagem" subtitle="Subtitulo Da Imagem" />}
    >
      <img src= {require('../img/dori.jpg')} />
    </CardMedia>
    <CardTitle title="Titulo Da Descrição" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </CardText>
    <CardActions>
      <FlatButton label="Editar" />
      <FlatButton label="Salvar" />
    </CardActions>
  </Card>
);

export default ImageCards;