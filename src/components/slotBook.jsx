import React, { useState } from 'react';
import { Stack, Typography, TextField, Grid, Paper } from '@mui/material';
import Title from './Title';

const SelectTimeSlot = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    fetchAvailableSlots(event.target.value);
  };
  const fetchAvailableSlots = (date) => {
    const predefinedSlots = [
      '10:00 AM',
      '11:00 AM',
      '12:00 PM',
      '1:00 PM',
      '2:00 PM',
    ];
    setAvailableSlots(predefinedSlots);
  };

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
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="column" alignItems="center">
            <Typography variant="h6">Available Slots:</Typography>
            {availableSlots.length > 0 ? (
              availableSlots.map((slot, index) => (
                <Typography key={index} variant="body1">{slot}</Typography>
              ))
            ) : (
              <Typography variant="body1">No slots available for selected date.</Typography>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default SelectTimeSlot;
