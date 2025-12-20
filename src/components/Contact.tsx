import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [openSuccess, setOpenSuccess] = useState<boolean>(false);
  const [openError, setOpenError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      setLoading(true);

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: 'Anil Palli',
      };

      emailjs.send(
        'service_0h0h20j',
        'template_1xe0h3q',
        templateParams,
        'ZrdDSlfOHl8QS0JTm'
      ).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setOpenSuccess(true);
          setName('');
          setEmail('');
          setMessage('');
          setLoading(false);
        },
        (error) => {
          console.log('FAILED...', error);
          setOpenError(true);
          setLoading(false);
        },
      );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <p className="contact-email">Email: <a href="mailto:pdvanil42@gmail.com">pdvanil42@gmail.com</a></p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button 
              variant="contained" 
              endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />} 
              onClick={sendEmail}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </Box>

          <Snackbar 
            open={openSuccess} 
            autoHideDuration={6000} 
            onClose={() => setOpenSuccess(false)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert onClose={() => setOpenSuccess(false)} severity="success" sx={{ width: '100%' }}>
              Message sent successfully! I'll get back to you soon.
            </Alert>
          </Snackbar>

          <Snackbar 
            open={openError} 
            autoHideDuration={6000} 
            onClose={() => setOpenError(false)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert onClose={() => setOpenError(false)} severity="error" sx={{ width: '100%' }}>
              Failed to send message. Please try again or email me directly.
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default Contact;