import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavComp from '../containers/navbar';

export default function Home() {
  return (
   <div>
      <NavComp></NavComp>
      <Outlet/>
   </div>
  )
}
