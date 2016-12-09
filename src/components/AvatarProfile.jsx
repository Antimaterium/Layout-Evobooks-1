import React from 'react';
import Avatar from 'material-ui/Avatar';
//import FileFolder from 'material-ui/svg-icons/file/folder';
//import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';


//const style = {margin: 5};
const styles = {
  vai: {
    marginRight:630,
    
  }}
/**
 * Examples of `Avatar` using an image, [Font Icon](/#/components/font-icon), [SVG Icon](/#/components/svg-icon)
 * and "Letter" (string), with and without custom colors at the default size (`40dp`) and an alternate size (`30dp`).
 */
const AvatarProfile= () => (
  <List>
    <ListItem style={styles.vai}
      disabled={true}
      rightAvatar={
        <Avatar src="../images/images.jpg" />
      }
    >

    </ListItem>
   
  </List>
  
);

export default AvatarProfile;