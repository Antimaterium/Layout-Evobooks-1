import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import '../css/Header.css';

const styles = {
  root: {
    paddingRight: 100,
    flexWrap: 'wrap',
    justifyContent: 'space-around',

  },
  gridList: {

  	paddingTop: 100,
  	marginRight: 150,
    display: 'flex',
    flexWrap: 'nowrap',
   
  },

};


const tilesData = [
  
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
<div>
  <div style={styles.root}>
    <GridList 
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Categoria</Subheader>
      {tilesData.map((tile) => (
        <GridTile 
       	  
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img alt={tile.title} src={tile.img}/>
        </GridTile>
      ))}
    </GridList>
  </div>
 </div>
);

export default GridListExampleSimple;