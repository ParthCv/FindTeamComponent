import GameForm from './GameForm';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root:{
    width: '50%' , 
    marginLeft: 0,
    backgroundColor: "red",
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: '1.5rem',
    letterSpacing: '0.15em',
    padding: '10px 40px',
    textAlign: 'center',
    width: '50%'
  }  
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
        <h1>FIND A TEAM</h1>
      </Container>      
      <GameForm />
      <hr style={{width: '50%', position: 'absolute', left: '0'}}/>
    </>
  );
}

export default App;
