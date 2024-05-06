import React from 'react';
import Navigation from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import './styles.css'

export default function App() {
  return (
    <div>
        <Navigation />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      
    </div>
  )
}