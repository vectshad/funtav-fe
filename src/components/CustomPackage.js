import React from 'react';
import Navbar from './Navbar';
import "../styles/CustomPackage.css";
import { useState } from 'react';

function CustomPackage() {
    const [Budget, setBudget] = useState();
    const [Transport, setTransport] = useState();
    const [Lodging, setLodging] = useState();
    const [FoodReference, setFoodReference] = useState();
    const [Tour, setTour] = useState();
    const [Schedule, setSchedule] = useState();
    const [Person, setPerson] = useState();
    const [MedicalRecords, setMedicalRecords] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Budget);
        console.log(Transport);
        console.log(Lodging);
        console.log(FoodReference);
        console.log(Tour);
        console.log(Schedule);
        console.log(Person);
        console.log(MedicalRecords);
    }

    return (
        <div>
            <Navbar/>
            <h1 className='mb-5 mt-3'>Custom Package</h1>
            <div className="Custom">
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Budget</label>
                    <input onChange={e => setBudget(e.target.value)} type="number" className="form-control" placeholder="Enter Budget"/>
                </div>
                <div className="form-group">
                    <label >Transport</label>
                    <select onChange={e => setTransport(e.target.value)} className="form-control">
                        <option value={null}>Choose...</option>
                        <option>Car</option>
                        <option>Motorcycle</option>
                    </select>
                </div>
                <div className="form-group">
                    <label >Hotel / Lounge</label>
                    <select onChange={e => setLodging(e.target.value)} className="form-control">
                        <option value={null}>Choose...</option>
                        <option>Hotel</option>
                        <option>Lounge</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Food Reference</label>
                    <input type="text" onChange={e => setFoodReference(e.target.value)} className="form-control" placeholder="Enter Food Reference"/>
                </div>
                <div className="form-group">
                    <label >Tight / Loose Schedule</label>
                    <select onChange={e => setSchedule(e.target.value)} className="form-control">
                        <option value={null}>Choose...</option>
                        <option>Tight</option>
                        <option>Loose</option>
                    </select>
                </div>
                <div className="form-group">
                    <label >Culinary / Cultural Tour</label>
                    <select onChange={e => setTour(e.target.value)} className="form-control">
                        <option value={null}>Choose...</option>
                        <option>Culinary</option>
                        <option>Cultural</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Person</label>
                    <input onChange={e => setPerson(e.target.value)} type="number" className="form-control" placeholder="Enter Person"/>
                </div>
                <div className="form-group">
                    <label>Medical Records</label>
                    <input type="text" onChange={e => setMedicalRecords(e.target.value)} className="form-control" placeholder="Enter Medical Records"/>
                </div>
                <button type="submit" className="btn mt-2 btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CustomPackage
