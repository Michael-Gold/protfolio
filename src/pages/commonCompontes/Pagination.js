import React from "react";
const Pagination = ({currentPage,perPage,totalPage,setCurrentPage}) => {
    let pages = [];
    for(let i = 1; i < Math.ceil(totalPage / perPage); i++){
        pages.push(i);
    }
    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    };

    return(
        <div className="paginationBtnGroup">
            {pages.map((page,index) => (
                <button key={index} className={currentPage === index + 1 ? 'pageBtn active': 'pageBtn'} onClick={() => handlePageChange(page)}>{page}</button>
            ))}
        </div>
    )
}

export default Pagination