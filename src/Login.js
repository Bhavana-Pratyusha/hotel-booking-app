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

export function Login(){
 const  myStyle={
        minHeight:'100vh',
        marginTop:'-70px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        //backgroundPosition: 'center'
 }
 const navigate = useNavigate();
    return (
        <div style={myStyle} className = "LoginBg">
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
             <Button style = {{color:"#132233"}}
                    type="submit"
                    fullWidth
                    variant="text"
                >Login with &nbsp;
                <FacebookIcon color="primary"/>
                </Button>
                <p style={{fontWeight:"bold",color:"#3b5998"}}>/</p>
              <Button style = {{color:"#132233"}}
                type="submit"
                fullWidth
                variant="text"
                >Login with &nbsp;
                <TwitterIcon color="primary"/>
                </Button>
                </Box>
          <Box style={{display:"flex"}}>
            <p >----------------------------------</p>
            <p style={{padding:"0px 10px"}}>OR</p>
            <p>----------------------------------</p>

          </Box>
            
          <Box component="form"  noValidate sx={{ mt: 1 }}>
          <TextField
                className = "loginTextField"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                variant="standard"
                color="secondary"
                autoFocus
              />
              <TextField
              className = "loginTextField"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              variant="standard"
              color="secondary"
              autoFocus
              />
            <FormControlLabel style={{color:"white"}}
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
           <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 1, mb: 1, backgroundColor:"#6d1b7b"}}
              >
                Login
              </Button>
              </Box>
              <Box style={{display:"flex",justifyContent:"center", alignItems:"center" , flexDirection:"column"}}>
                <Button onClick={()=> navigate("/Login")} variant="text" style={{color:"white"}}>
                Forgot Password?
                  </Button>
                  <Button onClick={()=> navigate("/SignUp")} variant="text" style={{color:"white"}}>
                Dont Have an Account? SignUp
                  </Button>
        </Box>     
        </Box>
      </Container>
      </div>
    )
}