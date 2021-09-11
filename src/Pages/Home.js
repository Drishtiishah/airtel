import React from 'react';
import Container from '@material-ui/core/Container';
import BasicButtonGroup from '../Components/ButtonGroup1';
import BasicTextFields from '../Components/TextField';
import ContainedButtons from '../Components/Button1';
import SimpleCard from '../Components/card1';
import Typography from '@material-ui/core/Typography';



export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
           
        <BasicButtonGroup/>    
        <BasicTextFields/> 
        <ContainedButtons/>
        <SimpleCard/>
        <SimpleCard/>
        <SimpleCard/>
        <SimpleCard/>
        <Typography variant="h5" component="h2">
          Entertainment
        </Typography>
        <SimpleCard/>
        </Container>
    </React.Fragment>
  );
}