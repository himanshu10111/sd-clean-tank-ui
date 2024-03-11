import React from 'react'
import SelectTimeSlot from '../components/slotBook';
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
    <Header />
    <GetStarted />
    <SelectTimeSlot />
    <GetInTouch />
    </>

  )
}

export default Home