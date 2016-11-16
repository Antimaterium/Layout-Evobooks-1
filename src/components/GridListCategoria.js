import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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
};

const tilesData = [
  {
    img: require('../img/dori.jpg'),
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: require('../img/dori.jpg'),
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: require('../img/dori.jpg'),
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: require('../img/dori.jpg'),
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: require('../img/3d.jpg'),
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: require('../img/cubos-pretos-azuis-wallpaper.jpg'),
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: require('../img/evobooks_logo.jpg'),
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: require('../img/images.jpg'),
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: require('../img/matrix.jpg'),
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: require('../img/ponte_estaiada.jpg'),
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: require('../img/orca.jpg'),
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: require('../img/copan.jpg'),
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: require('../img/alpes_suicos.jpg'),
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: require('../img/dogzinhu.jpg'),
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: require('../img/itarare.jpg'),
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const GridListCategoria = () => (
  <div style={styles.root}>
    <GridList
      padding={20}
      cellHeight={220}
      style={styles.gridList}
      cols={4}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListCategoria;