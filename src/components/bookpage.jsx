import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Radio, Paper } from '@mui/material';

const PriceList = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const rows = [
    { id: '10000', liter: '10000', price: '1000' },
    { id: '20000', liter: '2000', price: '2000' },
    { id: '30000', liter: '3000', price: '3000' }
  ];

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 650, margin: 'auto', mt: 4 }}>
      <Table aria-label="price table">
        <TableHead>
          <TableRow>
            <TableCell>Liter</TableCell>
            <TableCell>Price</TableCell>
            <TableCell align="center">Select</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.liter}
              </TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell align="center">
                <Radio
                  checked={selectedValue === row.id}
                  onChange={handleChange}
                  value={row.id}
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': row.id }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PriceList;
x   