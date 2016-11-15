import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
  },
  gridList: {
    display: 'flex',
    justifyContent: "center",
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
};

const tilesData = [
   {
    img: require('../img/3d.jpg'),
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: require('../img/cubos-pretos-azuis-wallpaper.jpg'),
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: require('../img/dori.jpg'),
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: require('../img/cubos-pretos-azuis-wallpaper.jpg'),
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: require('../img/dori.jpg'),
    title: 'Camera',
    author: 'Danson67',
  },
];


class GridListCategoria extends Component {

  render() {
    return (
        <div style={styles.root}>
          <GridList style={styles.gridList} 
                    cols={4} 
                    padding={10}
                    cellHeight={150}>
            {tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>
    );
  }
}

export default GridListCategoria;