import React from 'react';
import {GridList} from 'material-ui/GridList';

import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'hidden',
  },
  imagens: {
    height: '200px'
  }
};

const GridListCategoria = ({modelos}) => (
  <div style={styles.root}>
    <GridList
      padding={10}
      cellHeight={320}
      style={styles.gridList}
      cols={4}
    >
        
      {modelos.map((modelo,i) => (
          <Card key={i}>
            <CardMedia
              overlay={<CardTitle title={modelo.Name} />}
            >
              <img alt={modelo.Name} src={modelo.img} style={styles.imagens} />
            </CardMedia>
            <CardText>
              {modelo.Descricao}
            </CardText>
            <CardActions>
              <FlatButton label="Editar" />
            </CardActions>
        </Card>
      ))}
    </GridList>
  </div>
);

export default GridListCategoria;