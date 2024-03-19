import React, { useState, useEffect } from 'react';
import { Stack, Typography, TextField, Grid, Paper, Button, Snackbar } from '@mui/material';
import Title from './Title';
import { useNavigate } from 'react-router-dom';
import book from '../pages/Book'



const SelectTimeSlot = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [slotsAvailable, setSlotsAvailable] = useState(null);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();


  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (selectedDate) {
      if (selectedDate >= today) {
        fetchAvailableSlots(selectedDate);
      } else {
        setShowError(true);
        setSelectedDate('');
        setTimeout(() => {
          setShowError(false);
        }, 3000);
      }
    }
  }, [selectedDate, today]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const fetchAvailableSlots = (date) => {
    fetch(`http://localhost:8000/api/available-slots/${date}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setSlotsAvailable(data.slotsAvailable);
      })
      .catch(error => {
        console.error('Error fetching available slots:', error);
        setSlotsAvailable(null);
      });
  };

  const buttonStyle = slotsAvailable > 0
    ? { backgroundColor: 'green', color: 'white', margin: '10px' }
    : { backgroundColor: 'black', color: 'white', margin: '10px' };

  return (
    <Stack
      component={Paper}
      elevation={3}
      direction="column"
      justifyContent='center'
      alignItems='center'
      sx={{
        py: 4,
        mx: 6,
        backgroundColor: 'orange',
      }}
    >
      <Snackbar
        open={showError}
        message="Please select a current or future date."
        autoHideDuration={3000}
        onClose={() => setShowError(false)}
      />
      <Title
        text='Slot Booking'
        textAlign='center'
      />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Stack direction="column" alignItems="center">
            <TextField
              label="Select Date"
              type="date"
              value={selectedDate}
              InputLabelProps={{ shrink: true }}
              onChange={handleDateChange}
              sx={{ mb: 2, width: '50%' }}
              inputProps={{ min: today }}
            />

          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="column" alignItems='center'>
            <Typography variant="h6">Available Slots:</Typography>
            <Button
              variant="contained"
              style={buttonStyle}
              disabled={slotsAvailable === null || slotsAvailable <= 0}
              onClick={() => navigate(`/book?date=${selectedDate}`)}
            >
              {slotsAvailable === null
                ? 'Loading...'
                : slotsAvailable > 0
                  ? `${slotsAvailable} Slots Available`
                  : 'No Slots Available'}
            </Button>


          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
export default SelectTimeSlot;