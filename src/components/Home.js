import React, {useState, useEffect} from 'react'
import Navbar from './Navbar';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles/Home.css";

function Home() {
    const [offset, setOffset] = useState(0);
    const [packages, setPackages] = useState([]);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0);

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage * perPage)
    };

    useEffect(() => {
        const getPackages = async () => {
            try {
                const res = await axios.get("https://funtav-api.herokuapp.com/package");
                const data = res.data;
                
                if (data) {
                    // console.log(data)
                    const slice = data.slice(offset, offset + perPage);
                    setPackages(slice);
                    setPageCount(Math.ceil(data.length / perPage));    
                }
            } catch (error) {
                console.log(error)
            }
        }
        getPackages();
      }, [offset, perPage])
    
    if (packages.length === 0) return (
        <div>
            <Navbar/>
            <h1 className='mb-5 mt-3'>Fun Tav Travel and Tour</h1>
        </div>
    );

    return (
        <div>
            <Navbar/>
            <h1 className='mb-5 mt-3'>Fun Tav Travel and Tour</h1>
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
                            <div className='Order'>
                                <Link to={{pathname: `/${pkg.id}`}}>
                                    <button>Order</button>
                                </Link>
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

export default Home;
