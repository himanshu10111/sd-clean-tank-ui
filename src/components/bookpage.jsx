import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Alert,
} from '@mui/material';

const PriceList = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedDate = searchParams.get('date');
  const [selectedValue, setSelectedValue] = useState('');
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [responseOpen, setResponseOpen] = useState(false); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [paymentOption, setPaymentOption] = useState('payLater');
  const [paymentDisabled, setPaymentDisabled] = useState(false);
  const [comingSoonOpen, setComingSoonOpen] = useState(false); 
  const [submitSuccess, setSubmitSuccess] = useState(false); 
  const [formError, setFormError] = useState(false); 


  const isFormValid = () => {
    return name && email && mobileNo && selectedValue && selectedDate; // Add more validation as needed
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleNext = () => {
    if (selectedValue) {
      setOpen(true);
    } else {
      setAlertOpen(true);
    }
  };
  const handlePaymentChange = (event) => {
    if (event.target.value === 'payNow') {
      setPaymentDisabled(true); 
      setComingSoonOpen(true);
    } else {
      setPaymentOption(event.target.value);
      setPaymentDisabled(false); 
    }
  };

  const handleCloseComingSoon = () => {
    setComingSoonOpen(false);
    setPaymentDisabled(false); 
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (!isFormValid()) {
      setFormError(true);
      setResponseMessage('Please fill in all required fields.');
      setResponseOpen(true); // Ensure this is set to show the message
      return;
    }
  
    const payload = {
      username: name,
      contactNumber: mobileNo,
      email: email,
      bookingDate: selectedDate,
      tankSize: selectedValue,
      paymentOption: paymentOption,
    };
  
    fetch('http://localhost:8000/api/book-slot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setResponseMessage('Entry submitted successfully!');
      setSubmitSuccess(true); // Indicate submission success
      setResponseOpen(true); // Make sure to open the Snackbar
      // Clear form or do other state resets here if needed
    })
    .catch(error => {
      setResponseMessage(error.message || 'Failed to book slot. Please try again later.');
      setSubmitSuccess(false); // Indicate submission failure
      setResponseOpen(true); // Make sure to open the Snackbar
    });
  };

  const handleCloseAlert = () => { 
    setAlertOpen(false);
  };

  const handleCloseResponse = () => {
    setResponseOpen(false);
  };
  const rows = [
    { id: '10000', tankSize: '10,000 Lit', price: '1,000' },
    { id: '20000', tankSize: '2,000 Lit', price: '2,000' },
    { id: '30000', tankSize: '3,000 Lit', price: '3,000' },
    { id: '40000', tankSize: '4,000 Lit', price: '4,000' },
    { id: '50000', tankSize: '5,000 Lit', price: '5,000' },
  ];

  return (
    <Box sx={{
      maxWidth: { md: '60%', xs: '100%' },
      width: '100%',
      margin: 'auto',
      mt: 4,
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          mb: 3,
          fontWeight: 'bold',
          color: 'black',
        }}
      >
        Select Your Tank Size
      </Typography>
      <TableContainer component={Paper} sx={{
        boxShadow: '0px 6px 18px rgba(0,0,0,0.1)',
        marginBottom: 2,
      }}>
        <Table aria-label="price table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Tank Size</TableCell>
              <TableCell align="left">Price (₹)</TableCell>
              <TableCell align="center">Select</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">
                  {row.tankSize}
                </TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="center">
                  <FormControlLabel
                    label=""
                    control={
                      <Radio
                        checked={selectedValue === row.id}
                        onChange={handleChange}
                        value={row.id}
                      />
                    }
                    sx={{ justifyContent: 'center' }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={handleNext}
        disabled={!selectedValue} // Disable button if no tank size is selected
        sx={{
          alignSelf: 'center',
          mt: 2,
        }}
      >
        Next
      </Button>


      {/* Pop-up Dialog Form */}

      <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Fill in Your Details</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="dense"
          id="mobileNo"
          label="Mobile Number"
          type="tel"
          fullWidth
          variant="standard"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Payment Option</FormLabel>
          <RadioGroup
            row
            aria-label="payment-option"
            name="paymentOption"
            value={paymentOption}
            onChange={handlePaymentChange}
          >
            <FormControlLabel value="payNow" control={<Radio />} label="Pay Now" />
            <FormControlLabel value="payLater" control={<Radio />} label="Pay On Service" />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button> {/* Removed disabled={paymentDisabled} for correction */}
      </DialogActions>
    </Dialog>
    <Snackbar
        open={comingSoonOpen}
        autoHideDuration={6000}
        onClose={handleCloseComingSoon}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseComingSoon} severity="info" sx={{ width: '100%' }}>
          Coming soon, please use 'Pay On Service' option.
        </Alert>
      </Snackbar>

      {/* "Submission Success" Snackbar */}
      <Snackbar
        open={responseOpen}
        autoHideDuration={6000}
        onClose={handleCloseResponse}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseResponse} severity={submitSuccess ? "success" : "error"} sx={{ width: '100%' }}>
          {responseMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default PriceList;
