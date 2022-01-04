import React, {useState, useEffect} from 'react'
import Navbar from './Navbar';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import "../styles/Home.css";

function Home() {
    const [offset, setOffset] = useState(0);
    const [packages, setPackages] = useState([]);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0);

    const getPackages = async () => {
        const res = await axios.get("https://funtav-api.herokuapp.com/package");
        const data = res.data;
        
        if (data) {
            console.log(data)
            const slice = data.slice(offset, offset + perPage);
            setPackages(slice);
            setPageCount(Math.ceil(data.length / perPage));    
        }
    }
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage * perPage)
    };

    useEffect(() => {
        getPackages();
      }, [offset])
    
    if (packages.length === 0) return 'Loading...';
    return (
        <div>
            <Navbar/>
            <h1>HOME</h1>

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
    )
}

export default Home;
