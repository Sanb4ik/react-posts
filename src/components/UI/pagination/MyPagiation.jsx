import React from 'react';
import MyButton from '../button/MyButton';
import { usePagination } from '../../../hooks/usePagination';

const MyPagiation = ({totalPages, changePage}) => {
    const pages = usePagination(totalPages)
    return (
        <div style={{marginLeft:"5%"}}>
            {pages.map(p =>
        <MyButton 
          onClick={() => changePage(p)}
          style = {{marginRight: '5px', width: '30px'}}> 
          {p}
        </MyButton>)}
        </div>
    );
};

export default MyPagiation;