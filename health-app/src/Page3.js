import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Page3() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <FormControlLabel style={{float: "left", marginLeft: "10px"}} control={<Checkbox />} label="Fever" />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControlLabel style={{float: "left", marginLeft: "10px"}} control={<Checkbox />} label="Fatigue" />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControlLabel style={{float: "left", marginLeft: "10px"}} control={<Checkbox />} label="Coughing" />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControlLabel style={{float: "left", marginLeft: "10px"}} control={<Checkbox />} label="Runny Nose" />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControlLabel style={{float: "left", marginLeft: "10px"}} control={<Checkbox />} label="Diarrhoea" />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControlLabel style={{float: "left", marginLeft: "10px"}} control={<Checkbox />} label="Nasal Congestion" />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControlLabel style={{float: "left", marginLeft: "10px"}} control={<Checkbox />} label="Smoking" />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControlLabel style={{float: "left", marginLeft: "10px"}} control={<Checkbox />} label="Chest Pain" />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}