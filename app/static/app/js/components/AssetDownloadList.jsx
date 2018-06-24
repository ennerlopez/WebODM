import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import * as Icono from '@material-ui/icons';
import AssetDownloads from '../classes/AssetDownloads';
import Divider from '@material-ui/core/Divider';


import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

// const styles = theme => ({
//   root: {
//     width: '100%',
//     //maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// });


const styles = theme => ({
    root: {
    //  display: 'flex',
    //   flexWrap: 'wrap',
    //   justifyContent: 'space-around',
    //   overflow: 'hidden',
     // backgroundColor: 'rgb(255,255,255)'// theme.palette.background.paper,
    },
    gridList: {
    //  width: 500,
    //   height: 450,
    },
    icon: {
      color: 'rgb(255,255,255)',
    },
  })



function InsetList(props) {
    
  const { classes } = props;
  const assetDownloads = AssetDownloads.only(props.task.available_assets);
function buildIcon(name){
    let Icon = Icono[name];

    return ( <Icon/>)
}


//   return (
//     <div className={classes.root}>
//       <List component="nav">
//       {assetDownloads.map((asset, i) => {
//                 if (!asset.separator){
//                     return (
                    
//                     // <li key={i}>
//                     //         <a href="javascript:void(0);" onClick={this.downloadAsset(asset)}><i className={asset.icon}></i> {asset.label}</a>
//                     //     </li>
                        
//                         <ListItem button>
//                         <ListItemIcon>
//                           {buildIcon(asset.icon)}
//                         </ListItemIcon>
//                         <ListItemText inset primary={asset.label} />
//                       </ListItem>
                    
//                     );
//                 }else{
//                     return (<Divider/>);
//                 }
//             })}
       
     
//       </List>
//     </div>
//   );

  return (



    
    <div className={classes.root}>
      <GridList cols={3} cellHeight={50}   className={classes.gridList}>
     
        {assetDownloads.map((asset, i) => (
          <GridListTile key={i}>
         
            <GridListTileBar 
              title={asset.label}
              actionIcon={
                <IconButton className={classes.icon}>
                  {buildIcon(asset.icon)}
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );


}

InsetList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetList);