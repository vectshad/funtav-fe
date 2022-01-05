import React, {useState, useEffect} from 'react'
import Navbar from './Navbar';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles/MyPackages.css";

function MyPackages() {
    const [offset, setOffset] = useState(0);
    const [packages, setPackages] = useState([]);
    const [orders, setOrders] = useState([]);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0);

    const getPackage = async (order_id) => {
        try {
            const res = await axios.get("https://funtav-api.herokuapp.com/package/"+order_id);
            const data = res.data;
            
            if (data) {
                // console.log(data)
                setPackages(prevArray => [...prevArray, data])
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage * perPage)
    };

    useEffect(() => {
        const user_id = localStorage.getItem("user_id");
        const getOrders = async () =>{
            try {
                const res = await axios.get("https://funtav-api.herokuapp.com/order/user/"+user_id);
                const data = res.data;
                
                if (data) {
                    // console.log(data)
                    setOrders(data);
                    setPageCount(Math.ceil(data.length / perPage));
                }
            } catch (error) {
                console.log(error)
            }
        }
        getOrders();
      }, [offset])
    
    useEffect(() => {
        const getPackages = () => {
            try {
                console.log("orders", orders)
                if (orders.length !== 0) {
                    for (var i = 0; i < orders.length; i++) {
                        // console.log(orders[i].package_id)
                        getPackage(orders[i].package_id);
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
        getPackages(orders);
      }, [orders])
    
    if (packages.length === 0) return (
        <div>
            <Navbar/>
            <h1 className='mb-5 mt-3'>My Packages</h1>
        </div>
    )
    return (
        <div>
            <Navbar/>
            <h1 className='mb-5 mt-3'>My Packages</h1>
            <div className="Container">
                {packages.map((pkg, index) => 
                    <div key={index} className="Package">
                        <Link to={{pathname: `/${pkg.id}`}}>
                            <img src={pkg.img} alt="package"/>
                        </Link>
                        <div className="Detail">
                            <div className='City'>
                                <h3>{pkg.city}</h3>
                            </div>
                            <div className='Hotel'>
                                <p>{pkg.hotel}</p>
                            </div>
                            <div className='CheckIn'>
                                <p>Check In</p>
                                {(new Date(pkg.check_in.seconds * 1000).toDateString())}
                            </div>
                            <div className='CheckOut'>
                                <p>Check Out</p>
                                {(new Date(pkg.check_out.seconds * 1000).toDateString())}
                            </div>
                            <div className='Person'>
                                <p>Person: {pkg.person}</p>
                            </div>
                            <div className='Transport'>
                                <p>Transport: {pkg.transport}</p>
                            </div>
                            <div className='Price'>
                                <p>Price {pkg.price}</p>
                            </div>
                        </div>
                    </div>
                )}
                <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/>
            </div>
        </div>
    )
}

export default MyPackages
