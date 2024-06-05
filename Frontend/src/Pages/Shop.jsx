import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";



const Shop=()=>{

    const [expanded, setExpanded] = React.useState(false);

      const handleExpandClick = () => {
        setExpanded(!expanded);
      };

const dispatch=useDispatch();
const mydata= useSelector((state)=>state.cartProduct.cart)
// console.log(mydata);
const [AllProduct,setAllProduct]=useState([])
const LoadAllProduct=()=>{
    axios
          .get("http://localhost:8000/Displayproduct/LoadAllProduct")
          .then(res =>setAllProduct(res.data))
          }
         useEffect(() => {
            LoadAllProduct()       
          }, []);
       let AllPro = AllProduct.map((key)=>{
        return(<>
          <div class="bg-white rounded-lg shadow-md  hover:shadow-2xl shadow-black  p-8 scale-[0.85]">
                          <div class="relative overflow-hidden  ">
                              <img class="object-cover w-full bg-white h-full" src={key.Imgurl} alt="Product" />
                              <div class="absolute inset-1 hover:shadow-gray-900 shadow-sm opacity-40"></div>
                          </div>
                          <h3 class="text-xl font-bold text-gray-900 mt-4">{key.Name}</h3>
                          <p class="text-gray-500 text-sm mt-2">{key.Detail}</p>
                          <div class="flex items-center justify-between mt-10 ">
                              <span class="text-gray-900 font-bold text-lg">₹{key.Price} </span>
                              <button class="bg-violet-600 text-white py-3  px-5 rounded-sm font-bold hover:bg-violet-950"
                              onClick={
                          ()=>{dispatch(addtocart({
                              id:key._id,
                              Detail:key.Detail,
                              Imgurl:key.Imgurl,
                              Name:key.Name,
                              Price:key.Price ,
                              qnty:1,
                              }))}}
                              >Add to Cart</button>
                          </div>
                      </div>        
                      </>)
         
          })
      
    return(<>
    <div className="">
        {/* <h2 className="text-3xl font-bold text-stone-900">Introducing Featured Products</h2> */}
        <div className="grid justify-center gap-3 md:grid-cols-3  scale-90 mt-[-300px]">
         {AllPro}
      
        </div>

    </div>
    </>)
}


export default Shop;






// ....................card................



// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function DataTable() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//       />
//     </div>
//   );
// }


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import CircularProgress from '@mui/material/CircularProgress';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function CircularProgressWithLabel(props) {
//   return (
//     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
//       <CircularProgress variant="determinate" {...props} />
//       <Box
//         sx={{
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           position: 'absolute',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Typography variant="caption" component="div" color="text.secondary">
//           {`${Math.round(props.value)}%`}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// CircularProgressWithLabel.propTypes = {
//   /**
//    * The value of the progress indicator for the determinate variant.
//    * Value between 0 and 100.
//    * @default 0
//    */
//   value: PropTypes.number.isRequired,
// };

// export default function CircularWithValueLabel() {
//   const [progress, setProgress] = React.useState(10);



//   return <CircularProgressWithLabel value={progress} />;
// }



// import * as React from 'react';
// import { LineChart } from '@mui/x-charts/LineChart';

// export default function BasicLineChart() {
//   return (
//     <LineChart
//       xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
//       series={[
//         {
//           data: [2, 5.5, 2, 8.5, 1.5, 5],
//         },
//       ]}
//       width={500}
//       height={300}
//     />
//   );
// }



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import { PieChart } from '@mui/x-charts/PieChart';

// const pieParams = { height: 200, margin: { right: 5 } };
// const palette = ['red', 'blue', 'green'];

// export default function PieColor() {
//   return (
//     <Stack direction="row" width="100%" textAlign="center" spacing={2}>
//       <Box flexGrow={1}>
//         <Typography>Default</Typography>
//         <PieChart
//           series={[{ data: [{ value: 10 }, { value: 15 }, { value: 20 }] }]}
//           {...pieParams}
//         />
//       </Box>
//       <Box flexGrow={1}>
//         <Typography>Palette</Typography>
//         <PieChart
//           colors={palette}
//           series={[{ data: [{ value: 10 }, { value: 15 }, { value: 20 }] }]}
//           {...pieParams}
//         />
//       </Box>
//       <Box flexGrow={1}>
//         <Typography>Item</Typography>
//         <PieChart
//           series={[
//             { data: [{ value: 10, color: 'orange' }, { value: 15 }, { value: 20 }] },
//           ]}
//           {...pieParams}
//         />
//       </Box>
//     </Stack>
//   );
// }

// import * as React from 'react';
// import { BarChart } from '@mui/x-charts/BarChart';

// export default function BasicBars() {
//   return (
//     <BarChart
//       xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
//       series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
//       width={500}
//       height={300}
//     />
//   );
// }
