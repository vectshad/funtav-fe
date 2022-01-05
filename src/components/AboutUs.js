import React from 'react'
import Navbar from './Navbar';
import "../styles/AboutUs.css";

function AboutUs() {
    return (
        <div>
            <Navbar/>
            <h1 className='mb-5 mt-3'>About Us</h1>
            <div className='About'>
                <p>
                Fun Tav is specialized on making custom tour and travel inquiries based on customer’s. Mr. Vijay is the owner of FunTav, a travel and tour companies which has been established since 1998, based on Indonesia. Fun Tav provides several tour packages that are already available. You can make custom tour packages according to your wishes.
                </p>
            </div>
            <small class="text-muted">Fun Tav</small>
        </div>
    )
}

export default AboutUs
