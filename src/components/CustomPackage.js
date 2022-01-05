import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import "../styles/CustomPackage.css";
import { useState } from 'react';

function CustomPackage() {
    const [Budget, setBudget] = useState();
    const [City, setCity] = useState();
    const [Transport, setTransport] = useState();
    const [Lodging, setLodging] = useState();
    const [FoodReference, setFoodReference] = useState();
    const [Tour, setTour] = useState();
    const [Schedule, setSchedule] = useState();
    const [Person, setPerson] = useState();
    const [MedicalRecords, setMedicalRecords] = useState();

    const handleSubmit = async (e) => {
        const user_id = localStorage.getItem("user_id");

        e.preventDefault();
        await axios.post('https://funtav-api.herokuapp.com/order/custom', {
            user_id: user_id,
            city: City,
            budget: Budget,
            transport: Transport,
            lodging: Lodging,
            food_reference: FoodReference,
            tour: Tour,
            schedule: Schedule,
            person: Person,
            medical_records: MedicalRecords
        })
        .then((response) => {
            console.log(response.data);
            alert("New Custom Order Added !");
        }, (error) => {
            console.log(error);
        });
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
                    <label>City</label>
                    <input onChange={e => setCity(e.target.value)} type="text" className="form-control" placeholder="Enter City"/>
                </div>
                <div className="form-group">
                    <label >Transport</label>
                    <select onChange={e => setTransport(e.target.value)} className="form-control">
                        <option value={null}>Choose...</option>
                        <option>Car</option>
                        <option>Plane</option>
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
