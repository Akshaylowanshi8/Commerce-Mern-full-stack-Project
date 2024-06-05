import * as React from 'react'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
;
const Summary=()=>{
 const [Data ,setDate]=useState([])
 let LoadData=async()=>{
  let  url="http://localhost:8000/Admin/DisplayOrder"

 await axios
    .get(url)
    .then(res =>setDate(res.data))
    .catch(err => console.error(err));      
    }
    useEffect(() => {
    LoadData();
    }, []);

const [summaryData, setSummaryData] = useState([]);
const [progress, setProgress] = React.useState();

const [userData ,setuserData]=useState([])

const  Loaduserdata=async()=>{
   await axios.get('http://localhost:8000/Admin/DisplayOrder')
    .then(response => {
        setSummaryData(response.data);
        setProgress(response.data.length)
    })
    .catch(error => {
        console.error('Error fetching summary data:', error);
    });
 
    await axios.get('http://localhost:8000/Admin/userdata')
    .then(response => {
        setuserData(response.data);
   

    })
    .catch(error => {
        console.error('Error fetching summary data:', error);
    });



}
useEffect(() => {
   Loaduserdata()
}, []);  

console.log(userData);

let Noofuser=0;
let ans=userData.map(()=>{

Noofuser=userData.length;
})



// console.log(summaryData);
 let volume=0;
 let  Noofpayments=summaryData.length;
 
  let anss = summaryData.map((key)=>{
       volume +=key.amount
   })


   function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress size={80} variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}`}
          </Typography>
        </Box>
      </Box>
    );
  }
  
  
  


   CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
  };
  

    return(<>

<div className="container mx-auto">
            <h1 className="text-3xl font-bold my-8">Summary Page</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">No of Payments</h2>
                    <div className="mt-4">
<CircularProgressWithLabel value={progress} />;

                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">Payment Volume</h2>
                    <div className="mt-4">
                {volume}
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">Total No castumer</h2>
                    <div className="mt-4">
                {Noofuser}
                    </div>
                </div>
            </div>
        </div>


    </>)
}

export default Summary;



