import React from 'react'
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function Portfolio({navVisible}) {

  const columns = [
    { field: 'firstName', headerName: 'Name', width: 300,},
    { field: 'lastName', headerName: 'Trend', width: 300 },
    {
      field: 'age',
      headerName: 'Amount',
      type: 'number',
      width: 300,
      headerAlign: 'center',
      align: 'center',

    }, 
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    
  ];


  const [records,setRecords]=useState(rows);

  function handleSearch(event){
    const newData=rows.filter(row=>{
      return row.firstName.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData);
  }


  return (
    <>

    <div className='portfolio' >
      <div className={!navVisible ? "page" : "page page-with-navbar"}>
        <div className='container-fluid  mt-5'>
          <div style={{marginTop:'30px'}}>
            <h3 className='mt-5' style={{fontWeight:'600',color:'black'}}>Portfolio</h3>
            <p  style={{marginTop:'20px',color:'#69748B', fontSize:'14px',fontWeight:'600'}}>Stocks in your Portfolio</p>


            <div className='text-start mb-3'>
              <input style={{border:'1px solid #E2E8F0', borderRadius:'8px', height:'40px', width:'320px',padding:'5px'}} type='text' onChange={handleSearch} placeholder='Search Stock....'/>
            </div>

            <div style={{ height: 162, width: '100%', fontWeight:'600' }}>
              <DataGrid 
                rows={records}
                columns={columns}
                
                hideFooter
                hideFooterPagination
                hideFooterSelectedRowCount
                disableColumnMenu
              
                style={{fontWeight:'600', }}
                
              />
            </div>




          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
