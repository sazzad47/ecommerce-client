import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Layout } from "../../components";
import contactPhoto from "../../images/contact-page-photo.png"


export default function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
    });
  };

  return (
    <Layout>
      <Grid container component="main" sx={{ maxWidth: "500px", margin: "0 auto", padding: "3rem 1rem" }}>
        <Grid item xs={12} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={contactPhoto} alt='contact' width={70} height={70} />
              
           
            <Typography component="h1" variant="h5">
              Contact Us
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                variant='standard'
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                variant='standard'
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
                autoComplete="email"
              />
              <TextField
                multiline
                minRows={4}
                variant='standard'
                margin="normal"
                required
                fullWidth
                name="message"
                label="Message"
                type="message"
                id="message"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}