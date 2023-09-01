import React from 'react'

export default function Login({navVisible}) {
  return (
    <div className='login' >
        <div className={!navVisible ? "page" : "page page-with-navbar"}>
            <div className='mt-5' style={{marginTop:'100px'}}>
                <div className='container'>
                    <h1>Container</h1>
                    
                </div>
                <h1 style={{fontSize:'6vw'}}>Hii Work!!</h1>


            </div>
        </div>
    </div>
  )
}
