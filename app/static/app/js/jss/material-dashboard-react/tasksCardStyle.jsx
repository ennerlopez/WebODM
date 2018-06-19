// ##############################
// // // TasksCard styles
// #############################

import {
  card,
  cardHeader,
  defaultFont,
  primaryBoxShadow
} from "../material-dashboard-react.jsx";

const tasksCardStyle = theme => ({
  card:{
    display: "inline-block",
    position: "relative",
    width: "100%",
    margin: "2px 0",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    borderRadius: "3px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    overflow:"visible"
  },
  cardHeader: {
    flex: "none",

   
 
 

  
  lineHeight: "1.5em",

  boxShadow:
    "0 12px 20px -10px rgba(30, 30, 30, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(74, 74, 74, 0.2)",

    background: "linear-gradient(60deg,#C8E6C9,##A5D6A7)",
   
  },
  cardTitle: {
   
    float: "left",
    fontWeight: "500",
    
    
    fontSize: "25px",
    color: "#57595C"
  },

  subheaderCard:{
   
   
    
    
    fontSize: "14px",
    color: "#FFFFFF"
  },
  cardActions:{
    flex: "1"
  
  },
  tabWrapper: {
    width: "auto",
    display: "inline-flex",
    alignItems: "inherit",
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "flex"
    }
  },
  tabIcon: {
    float: "left",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-2px"
    }
  },
  displayNone: {
    display: "none"
  },
  labelIcon: {
    height: "44px",
    width: "110px",
    minWidth: "72px",
    paddingLeft: "14px",
    borderRadius: "3px"
  },
  tabsContainer: {
     
    marginTop: "4px",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      display: "grid"
    }
  },
  tabs: {
    width: "110px",
    minWidth: "70px",
    paddingLeft: "12px"
  },
  cardHeaderContent: {
    flex: "none"
  },
  label: {
    lineHeight: "19px",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "500",
    marginLeft: "-10px"
  },
  textColorInheritSelected: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transition: "background-color .4s"
  },
  grid: {
    padding: "0 15px !important"
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }, 
  padding: {
    //padding: `0 ${theme.spacing.unit *1 }px`,
    color:"#57595C",
    
  
  }
});

export default tasksCardStyle;
