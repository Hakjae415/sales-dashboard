import { useState } from 'react'
import './App.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Item>SideBar</Item>
      </Grid>
        <Grid item md={9}>
          <Item>DashBoard</Item>
          <Grid item xs={4}>
            <Item>Sales Obtained</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>New Clients</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Traffic Received</Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>

  )
}

// function App() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         <Grid item xs={8}>
//           <Item>xs=8</Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>xs=4</Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>xs=4</Item>
//         </Grid>
//         <Grid item xs={8}>
//           <Item>xs=8</Item>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
export default App
