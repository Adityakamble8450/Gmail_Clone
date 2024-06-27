import React  from 'react'
import Header from '../Componants/Header'
import Siebar from '../Componants/Siebar'
import { useState, Suspense } from 'react';
import Emails from '../Componants/Emails';

// import { Header, SideBar } from '../components';
import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SuspenseLoader from '../Componants/comman/SuspenseLoader';

const Wrapper = styled(Box)`
    display: flex;
`;



const Main = () => {
 
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
      setOpenDrawer(prevState => !prevState);
  }



  return (
    <div className=' overflow-hidden'>
        <Header toggleDrawer={toggleDrawer}/>
       <Siebar toggleDrawer={toggleDrawer} openDrawer={openDrawer}  />
       <Suspense fallback={<SuspenseLoader />} >
                    <Outlet context={{ openDrawer }} />
                </Suspense>
     
    </div>
  )
}

export default Main