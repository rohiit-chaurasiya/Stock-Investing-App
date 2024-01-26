import React from 'react'
import { useState } from 'react';
import { LineChart, Line } from 'recharts';

import '../css/market.css'
import { DataGrid } from '@mui/x-data-grid';



export default function Market({navVisible}) {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (params) => {
    // Assuming you have defined a route for stock details using React Router
    // Replace '/stock-details' with the actual route path
    // You can pass data related to the clicked row using state or URL parameters
    window.location.href = `/stock?id=${params.id}`;
  };
  
    
  const data = [
  {name: 'Page A', uv: 280, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 400, pv: 1400, amt: 3400},
  {name: 'Page A', uv: 140, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 550, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 450, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 700, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 200, pv: 2400, amt: 2400}, 
  {name: 'Page A', uv: 500, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 600, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 250, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 650, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 170, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 350, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 850, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 250, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 650, pv: 2400, amt: 2400},
  ];

  const renderLineChart = () => (
    <LineChart width={280} height={100} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#22C55E" />
    </LineChart>
  );

  const renderLineChart1 = () => (
    <LineChart width={280} height={100} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#EF4444" />
    </LineChart>
  );


  const stockPrice = () => (
    <div style={{display:'flex',justifyContent:'space-between' , alignItems:'center',gap:'10px'}}>
      <h6  style={{alignItems:'center',marginLeft:'40px', fontWeight:'600' }}>$34,56,450</h6>
      <span style={{alignItems:'center',align:'right', background:'#DCFCE7', fontSize:'12px', borderRadius:'10px',padding:'0 5px',margin:'-6px 0 0 20px'}}> -0.38% </span>
    </div>
    
  );
  const stockPrice2 = () => (
    <div style={{display:'flex',justifyContent:'space-between' , alignItems:'center',gap:'10px'}}>
      <h6  style={{alignItems:'center',marginLeft:'40px', fontWeight:'600' }}>$34,56,450</h6>
      <span style={{alignItems:'center',align:'right', background:'#FEE2E2', fontSize:'12px', borderRadius:'10px',padding:'0 5px',margin:'-6px 0 0 20px'}}> -0.38% </span>
    </div>
    
  );
 

  const stockName1 = () => (
    <div>
      <h6 style={{fontWeight:'bold'}}>AMZN</h6>
      <span style={{color:'#64748B'}}>Amazon.com</span>
    </div>
  );
  const stockName2 = () => (
    <div>
      <h6 style={{fontWeight:'bold'}}>META</h6>
      <span style={{color:'#64748B'}}>Meta Platforms Inc.</span>
    </div>
  );
  const stockName3 = () => (
    <div>
      <h6 style={{fontWeight:'bold'}}>MSFT</h6>
      <span style={{color:'#64748B'}}>Microsoft Corp.</span>
    </div>
  );
  const stockName4 = () => (
    <div>
      <h6 style={{fontWeight:'bold'}}>TSLA</h6>
      <span style={{color:'#64748B'}}>Tesla, Inc.</span>
    </div>
  );
  const stockName5 = () => (
    <div>
      <h6 style={{fontWeight:'bold'}}>GOOG</h6>
      <span style={{color:'#64748B'}}>Alphabet Inc.</span>
    </div>
  );

  

  

  const stockRateRenderer = (params) => {
    const isEvenRow = params.id % 2 === 0;
    return isEvenRow ? stockPrice2() : stockPrice();
  };

  const stockChartRenderer = (params) => {
    const isEvenRow = params.id % 2 === 0;
    return isEvenRow ? renderLineChart() : renderLineChart1();
  };

  const stockNameRenderer = (params) => {
    switch (params.id) {
      case 1:
        return stockName1();
      case 2:
        return stockName2();
      case 3:
        return stockName3();
      case 4:
        return stockName4();
      case 5:
        return stockName5();
      default:
        return null;
    }
  };




  const columns = [
    {
      field: 'firstName',
      headerName: 'Name',
      width: 300,
      renderCell:stockNameRenderer
      
    },

    { 
      field: 'trend',
      headerName: 'Trend',
      width: 300,
      headerAlign: 'center',
      align: 'center',
      renderCell: stockChartRenderer,
    },

    {
      field: 'StockRate',
      headerName: 'Amount',
      type: 'number',
      width: 300,
      headerAlign: 'center',
      align: 'center',
      
      renderCell: stockRateRenderer,
      
    }, 
  ];

  
  const rows = [
    { id: 1, trend: renderLineChart(data), firstName: stockName1(), StockRate: stockPrice() },
    { id: 2, trend: renderLineChart(data), firstName: stockName2(), StockRate: stockPrice2() },
    { id: 3, trend: renderLineChart(data), firstName: stockName3(), StockRate: stockPrice() },
    { id: 4, trend: renderLineChart(data), firstName: stockName4(), StockRate: stockPrice2() },
    { id: 5, trend: renderLineChart(data), firstName: stockName5(), StockRate: stockPrice() },
  ];


  const [records,setRecords]=useState(rows);

  const StockCard = ({companyLogo=null, companyName, value, percentageChange, color }) => (
    <div className=" StockCard col-sm-6 col-md-4 col-lg-3">
      {companyLogo !== null && (
      <img src={require(`../image/trendingStocksLogo/${companyLogo}.png`)} alt={companyLogo} style={{ height: '40px', width: '40px', border:'solid 1px #E9E9EB', borderRadius:'5px', marginTop:'10px'}} />
    )}
      <h6 style={{ padding: '15px 8px 5px 1px', color: '#69748B', fontSize:'14px' }}>{companyName}</h6>
      <div style={{ display: 'flex', padding: '5px', justifyContent: 'space-between', alignItems: 'center' }}>
        <h6 style={{ color: 'black', fontWeight: '600' }}>{value}</h6>
        <span style={{background: color, fontSize: '12px', borderRadius: '10px', padding: '1px 10px', marginBottom:'10px'}}>
          {percentageChange}
        </span>
      </div>
    </div>
  );

  const stockData = [
    {companyName: 'NIFTY 50', value: '21352.60', percentageChange: '-101.35(0.47%)', color: '#FEE2E2' },
    {companyName: 'SENSEX', value: '70700.67', percentageChange: '-359.64(0.51%)', color: '#FEE2E2' },
    {companyName: 'NIFTY BANK', value: '44866.64', percentageChange: '-216.25(0.48%)', color: '#FEE2E2' },
    {companyName: 'NIFTY NEXT 50', value: '54291.75', percentageChange: '+83.45(0.15%)', color: '#DCFCE7' },
  ];

  const trendingStockData = [
    {companyLogo: 'GSTK500183', companyName: 'HFCL', value: '₹105.75', percentageChange: '+0.10(0.09%)', color: '#DCFCE7' },
    {companyLogo: "GSTK534309", companyName: 'NBCC (India)', value: '₹114.70', percentageChange: '+9.45(8.91%)', color: '#DCFCE7' },
    {companyLogo: 'GSTK539807', companyName: 'Infibeam Avenues', value: '₹29.10', percentageChange: '+1.90(6.48%)', color: '#DCFCE7' },
    {companyLogo: 'GSTK543257', companyName: 'IRFC', value: '₹173.85', percentageChange: '+1.95(1.53%)', color: '#DCFCE7' },
  ];

  


  function handleSearch(event){
    const newData=rows.filter(row=>{
      return row.firstName.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData);
  }

  


  return (
    <div className='market' >
      <div className={!navVisible ? "page" : "page page-with-navbar"}>
        <div className='container mt-5'>
          <h3 className='mt-5' style={{fontWeight:'600',color:'#00B386'}}>Stocks</h3>

          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <p style={{marginTop:'30px',color:'black', fontSize:'20px',fontWeight:'600', marginBottom:'0px'}}>Index</p>
            <p style={{marginTop:'30px',color:'#00B386', fontSize:'15px',fontWeight:'600', marginBottom:'0px', marginRight:'40px'}}>All indices</p>
          </div>
          <div className="row treandingCard">
            {stockData.map((stock, index) => (
              <StockCard key={index} {...stock} />
            ))}
          </div>


          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <p style={{marginTop:'30px',color:'black', fontSize:'20px',fontWeight:'600', marginBottom:'0px'}}>Trending Stocks</p>
            <p style={{marginTop:'30px',color:'#00B386', fontSize:'15px',fontWeight:'600', marginBottom:'0px', marginRight:'40px'}}>See all</p>
          </div>
          <div className="row treandingCard">
            {trendingStockData.map((stock, index) => (
              <StockCard key={index} {...stock} />
            ))}
          </div>


          <div className='mb-5'> 
            <p  style={{marginTop:'35px',color:'#69748B', fontSize:'14px',fontWeight:'600'}}>Stocks Details</p>

            <div className='text-start mb-3'>
              <input style={{border:'1px solid #E2E8F0', borderRadius:'8px', height:'40px', width:'320px',padding:'5px'}} type='text' onChange={handleSearch} placeholder='Search Stock....'/>
            </div>

            <div style={{ height: 482, width: '97%', fontWeight:'600' }}>
              <DataGrid 
                rows={records}
                columns={columns}
                
                hideFooter
                hideFooterPagination
                hideFooterSelectedRowCount
                disableColumnMenu
              
                style={{fontWeight:'600', }}
                getRowHeight={(params)=>85}
                onRowClick={handleRowClick}
                onMouseEnter={(params) => setSelectedRow(params.id)}
                onMouseLeave={() => setSelectedRow(null)}
                rowClassName={(params) => (selectedRow === params.id ? 'clickable-row' : '')}

                
              />
            </div>


          </div>



        </div>      
      </div>
    </div>
  )
}
