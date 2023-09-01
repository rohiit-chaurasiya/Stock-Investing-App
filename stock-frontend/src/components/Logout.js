import React from 'react'

export default function Logout({navVisible}) {
  return (
    <div className='Signout' >
        <div className={!navVisible ? "page" : "page page-with-navbar"}>

            <div className='container-fluid  mt-5'>
                <div>
                    <h3 className='mt-5' style={{fontWeight:'600',color:'black'}}>Sign-Out</h3>
                    <p  style={{marginTop:'20px',color:'#69748B', fontSize:'14px',fontWeight:'600'}}>This is Sign-out  page</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}
