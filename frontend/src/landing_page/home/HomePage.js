import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education'; 
import OpenAccount from '../../../src/OpenAccount'; 


function HomePage() {
    return ( 
        <>
 
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
       
   
        </>
     );
}

export default HomePage;