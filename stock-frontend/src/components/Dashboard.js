import React from 'react'

import '../css/dashboard.css'

export default function Dashboard({navVisible}) {
    console.log(navVisible);
  return (
    <div className='dashboard' >
        <div className={!navVisible ? "page" : "page page-with-navbar"}>

            <div className='container-fluid  mt-5'>
                <div>
                    <h3 className='mt-5' style={{fontWeight:'600',color:'black'}}>Dashboard</h3>
                    <p  style={{marginTop:'20px',color:'#69748B', fontSize:'14px',fontWeight:'600'}}>This is Default page</p>
                </div>
            </div>
        </div>
    </div>

  )
}
