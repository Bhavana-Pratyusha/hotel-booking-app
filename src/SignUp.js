import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import {useNavigate} from 'react-router-dom';

export function SignUp(){
 const  myStyle={
        minHeight:'100vh',
        marginTop:'-70px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        //backgroundPosition: 'center'
 }
 const navigate = useNavigate();
    return (
        <div style={myStyle} className = "SignUpBg">
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Box style={{display:"flex"}}>
             <Button style = {{color:"#3b5998"}}
                    type="submit"
                    fullWidth
                    variant="text"
                >Login with &nbsp;
                <FacebookIcon/>
                </Button>
                <p style={{fontWeight:"bold",color:"#3b5998"}}>/</p>
              <Button style = {{color:"#3b5998"}}
                type="submit"
                fullWidth
                variant="text"
                >Login with &nbsp;
                <TwitterIcon/>
                </Button>
                </Box>
          <Box style={{display:"flex"}}>
            <p >----------------------------------</p>
            <p style={{padding:"0px 10px"}}>OR</p>
            <p>----------------------------------</p>

          </Box>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
          <TextField
              className = "textField"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              variant="standard"
              color="success"
              autoFocus
            />
            <TextField
              className = "textField"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              variant="standard"
              color="success"
              autoFocus
            />
            <TextField
             className = "textField"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              variant="standard"
              color="success"
              autoFocus
            />
            <TextField
              className = "textField"
              margin="normal"
              required
              fullWidth
              id="phoneNo"
              label="Phone Number"
              name="phoneNo"
              variant="standard"
              color="success"
              autoFocus
            />
            <TextField
              className = "textField"
              margin="normal"
              required
              fullWidth
              id="Address"
              label="Address"
              name="Address"
              variant="standard"
              color="success"
              autoFocus
            />
             <TextField
              className = "textField"
              margin="normal"
              required
              fullWidth
              id="pincode"
              label="Pincode"
              name="pincode"
              variant="standard"
              color="success"
              autoFocus
            />
            <TextField
              className = "textField"
              margin="normal"
              required
              fullWidth
              name="createPassword"
              label="Password"
              type="password"
              id="createPassword"
              variant="standard"
              color="success"
              autoFocus
            />
            <TextField
              className = "textField"
              margin="normal"
              required
              fullWidth
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              variant="standard"
              color="success"
              autoFocus
            />
            <TextField
              className = "textField"
              margin="normal"
              required
              fullWidth
              name="emergencyContact"
              label="Emergeny Contact"
              id="emergencyContact"
              variant="standard"
              color="success"
              autoFocus
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 1, mb: 1}}
            >
              Sign Up
            </Button>
          </Box>
        <Box style={{display:"flex",justifyContent:"center"}}>
                <Button onClick={()=> navigate("/Login")} variant="text" style={{color:"white", display:"flex",justifyContent:"center"}}>
                Already have an account? Login
                  </Button>
        </Box>
        </Box>
      </Container>
      </div>
    )
}