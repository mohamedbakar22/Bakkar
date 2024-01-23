import ReactPaginate from 'react-paginate';
import React from 'react'

 function Paginate ({getPage}) {

    const handlePageClick = (data) => {     
        // console.log(data.selected+1);   
        getPage(data.selected+1)
       }; 
       
     
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={12}
        previousLabel="< السابق"
        renderOnZeroPageCount={null}
        containerClassName = {'pagination justify-content-center mt-3'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}

        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}

        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}

        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}

        activeClassName={'active'}
      />
    </div>
  )
}
export default Paginate