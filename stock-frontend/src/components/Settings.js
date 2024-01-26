import React from 'react'
import '../css/StockChart.css'


export default function Settings({navVisible}) {

  
  return (
    <>
    <div className='portfolio' >
      <div className={!navVisible ? "page" : "page page-with-navbar"}>
        <div className='container-fluid  mt-5'>
          <div style={{marginTop:'30px'}}>
            <h3 className='mt-5' style={{fontWeight:'600',color:'black'}}>Profile</h3>
            <p  style={{marginTop:'8px',color:'#69748B', fontSize:'14px',fontWeight:'600'}}>View and update the settings of your profile</p>

          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}
