import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chart from "react-google-charts";
import PieChart from './PieChart';

function preventDefault(event) {
  event.preventDefault();
}

function ResultCard(props) {
  return (
    <React.Fragment>
        <Container maxWidth="xs" style={{marginTop: "55px"}}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 5 }, p: { xs: 2, md: 3 } }}>
            <Grid container spacing={0}>
            <Grid item xs={6}>
                    <Typography component="p" variant="h3">
                {props.value}%
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }} variant="h6">
            {props.name}
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault} variant="subtitle1">
                View Article
                </Link>
            </div>
            
            </Grid>   
            <Grid item xs={6}>
            <PieChart value={props.value}/>
            </Grid>
            </Grid> 
            <Grid container spacing={0} style={{marginTop: '50px'}}>
            <Grid item xs={12}>
            <Typography component="p" variant="subtitle1">
                There are <span style={{fontSize: "150%"}}>{props.yes + props.no}</span> people that shared the same symptoms as yours
            </Typography>
            </Grid>
            <Grid item xs={12} style={{marginTop: "30px"}}>
            <Typography component="p" variant="subtitle1">
                Their results:
            </Typography>
            </Grid>
            <Grid item xs={12} style={{marginTop: "30px"}}>
            <Chart
  chartType="BarChart"
  loader={<div>Loading Chart</div>}
  data={[
    [
      'Result',
      'Number',
      { role: 'style' },
      {
        sourceColumn: 0,
        role: 'annotation',
        type: 'string',
        calc: 'stringify',
      },
    ],
    ['Yes', props.yes, '#191919', null],
    ['No', props.no, 'silver', null],
  ]}
  options={{
    height: 200,
    bar: { groupWidth: '95%' },
    legend: { position: 'none' },
  }}
  // For tests
  rootProps={{ 'data-testid': '6' }}
/>
</Grid>
            </Grid>
              
              
              
            </Paper>
          </Container>
      
    </React.Fragment>
  );
}
const theme = createTheme();

export default function Result(){
    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar
            position="absolute"
            color="default"
            elevation={0}
            sx={{
            //   position: 'relative',
              borderBottom: (t) => `1px solid ${t.palette.divider}`,
            }}
          >
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                Demo
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid container spacing={0}>
            <ResultCard name="Heart Disease" value={46} yes={10} no={4}/>

            <ResultCard name="Diabetes" value={10} yes={4} no={8}/>

            <ResultCard name="Stroke" value={13} yes={3} no={5}/>
          </Grid>
        </ThemeProvider>
      );
}