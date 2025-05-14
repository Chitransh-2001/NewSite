"use client"
import React from 'react';
import { useEffect, useState } from "react";
import ResumeForm from "../../components/contact/ResumeForm";
import JobListings from '../../components/contact/JobListings';
import Footer from '../../components/footer/Footer';
const page = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <ResumeForm/>
      <Footer/>
    </div>
  )
}
export default page
