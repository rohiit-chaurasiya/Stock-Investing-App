import React from 'react'

export default function News({navVisible}) {
  return (
    <>

    <div className='news' >
      <div className={!navVisible ? "page" : "page page-with-navbar"}>
        <div className='container-fluid  mt-5'>
          <div style={{marginTop:'0px'}}>
            <h3 className='mt-5' style={{fontWeight:'600',color:'black'}}>Markets</h3>
            <p  style={{marginTop:'15px',color:'#69748B', fontSize:'14px',fontWeight:'600'}}>Get the latest news related to stock market</p>
            
            <div>
              <div className='row' style={{}}>
                <div className='col-lg-12' style={{display:'flex'}}>
                  <img src={require('../image/news/1.jpg')} alt="news" style={{height:'70px',width:'100px',borderRadius:'5px',objectFit:'cover'}} />
                  <p style={{padding:'10px'}}>Cathie Wood's ARK ETFs sold $50 million in Coinbase stock</p>
                </div>
              </div>
              <p style={{borderBottom:'1px solid #E2E8F0',padding:'10px'}}></p>

              

              <div className='row'>
                <div className='col-lg-12' style={{display:'flex'}}>
                  <img src={require('../image/news/5.jpg')} alt="news" style={{height:'70px',width:'100px',borderRadius:'5px',objectFit:'cover'}} />
                  <p style={{padding:'10px'}}>SENTINELONE DEADLINE ALERT: Securities Litigation Partner James (Josh) Wilson Encourages Investors Who Suffered Losses Exceeding $100,000 In SentinelOne To Contact Him Directly To Discuss Their Option</p>
                </div>
              </div>
              <p style={{borderBottom:'1px solid #E2E8F0',padding:'10px'}}></p>

              <div className='row'>
                <div className='col-lg-12' style={{display:'flex'}}>
                  <img src={require('../image/news/2.jpg')} alt="news" style={{height:'70px',width:'100px',borderRadius:'5px',objectFit:'cover'}} />
                  <p style={{padding:'10px'}}>Energy Transfer Stock: Looks Cheap Going Into Earnings (NYSE:ET)</p>
                </div>
              </div>
              <p style={{borderBottom:'1px solid #E2E8F0',padding:'10px'}}></p>

              <div className='row'>
                <div className='col-lg-12' style={{display:'flex'}}>
                  <img src={require('../image/news/3.jpg')} alt="news" style={{height:'70px',width:'100px',borderRadius:'5px',objectFit:'cover'}} />
                  <p style={{padding:'10px'}}>A millennial entrepreneur who owns 2 small businesses says he lives in his parents' basement because he can't get a mortgage and Canada's housing market is so unaffordable</p>
                </div>
              </div>
              <p style={{borderBottom:'1px solid #E2E8F0',padding:'10px'}}></p>

              <div className='row'>
                <div className='col-lg-12' style={{display:'flex'}}>
                  <img src={require('../image/news/4.png')} alt="news" style={{height:'70px',width:'100px',borderRadius:'5px',objectFit:'cover'}} />
                  <p style={{padding:'10px'}}>Stocks To Watch: Tesla Earnings, Labor Strikes And Russell 2000 Revival In The Spotlight</p>
                </div>
              </div>
              <p style={{borderBottom:'1px solid #E2E8F0',padding:'10px'}}></p>

              <div className='row'>
                <div className='col-lg-12' style={{display:'flex'}}>
                  <img src={require('../image/news/5.jpg')} alt="news" style={{height:'70px',width:'100px',borderRadius:'5px',objectFit:'cover'}} />
                  <p style={{padding:'10px'}}>La SEC accetta la richiesta dell'ETF Bitcoin di BlackRock Da CoinTelegraph</p>
                </div>
              </div>
              <p style={{borderBottom:'1px solid #E2E8F0',padding:'10px'}}></p>

              <div className='row'>
                <div className='col-lg-12' style={{display:'flex'}}>
                  <img src={require('../image/news/6.png')} alt="news" style={{height:'70px',width:'100px',borderRadius:'5px',objectFit:'cover'}} />
                  <p style={{padding:'10px'}}>Cathie Wood Calls Nvidia An 'Incredible AI Play' But Explains Why She Prefers This AI-Levered SaaS Provider Over The Chipmaker</p>
                </div>
              </div>
              <p style={{borderBottom:'1px solid #E2E8F0',padding:'10px'}}></p>


            </div>




          </div>
        </div>
      </div>
    </div>
    
    </>
    
  )
}
