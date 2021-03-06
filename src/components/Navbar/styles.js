import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'box-shadow: 10px 10px 5px grey',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: "#f0f0f0",
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    color: 'black',
    '@media (max-width:480px)':{
      fontSize: '12px'
    }
  },
  image: {
    marginRight: '10px',
    '@media (max-width:480px)':{
      width: '40px'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  navitem: {
    padding: '25px',
    fontSize: '20px',
    textDecoration: 'none',
    color: 'black',
  },
  pronav: {
    fonWeight: 'bold',
    fontSize: '14px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: '#031D44',
    padding: '20px 0px',
    margin: '0px 20px',
    display: 'inline-block',
    position: 'relative',
    opacity: 0.75,
    '&:hover': {
      opacity: 1,
    },
    '&::before': {
      height: '0%',
      width: '100%',
      bottom: '0px',
      transition: '300ms',
      content: "",
      position: 'absolute',
      backgroundColor: '#031D44',
    },
    '&:hover::before': {
      height: '5px',
    }
  }

}));