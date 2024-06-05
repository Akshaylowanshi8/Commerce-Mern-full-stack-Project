import axios from "axios";
import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';

const DisplayOrder = () => {
    const [data , setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/Admin/DisplayOrder");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {   
        fetchData();
    }, []);
    const modifiedData = data.map((item, index) => ({
        ...item,
        id: item._id || index // Use _id if available, otherwise fallback to index
      }));
    const columns = [
        // { field: '_id', headerName: 'ID', width: 70 },
        { field: 'dop', headerName: 'Date of Purchase', width: 130 },
        { field: 'amount', headerName: 'Amount', width: 130 },
        { field: 'fullName', headerName: 'Full Name', width: 150 },
        { field: 'mobile', headerName: 'Mobile', width: 120 },
        { field: 'city', headerName: 'City', width: 130 },
        { field: 'address', headerName: 'Address', width: 200 },
        { field: 'state', headerName: 'State', width: 120 },
        { field: 'pincode', headerName: 'Pincode', width: 120 },
        { field: 'productitems', headerName: 'Product Items', width: 200 },
        { field: 'status', headerName: 'Status', width: 150, renderCell: () => <button className="px-2 py-2 bg-cyan-400">Order Placed</button> }
    ];

    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
              rows={modifiedData}

                columns={columns}
                pageSize={5}
                checkboxSelection
            />
        </div>
    );
};

export default DisplayOrder;










// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";

// const DisplayOrder=()=>{


//     const [Data ,setDate]=useState([])


//  let LoadData=async()=>{
//   let  url="http://localhost:8000/Admin/DisplayOrder"

//  await axios
//     .get(url)
//     .then(res =>setDate(res.data))
//     .catch(err => console.error(err));      
//     }
//     useEffect(() => {
        
//     LoadData();
//     }, []);


// let  ans =Data.map((e,i)=>{
// return(<>
// <tr className="">
//        <td className="">{i+1}</td>
//        <td className="">{e.dop}</td>
//        <td className="">{e.amount}</td>
//        <td className=" whitespace-nowrap">{e.fullName}</td>
//        <td className=" whitespace-nowrap">{e.mobile}</td>
//        <td className="whitespace-nowrap">{e.city}</td>
//        <td className=" whitespace-nowrap">{e.address}</td>
//        <td className=" whitespace-nowrap">{e.state}</td>
//        <td className="whitespace-nowrap">{e.pincode}</td>
//        <td className="">{e.productitems}</td>
//        <td ><button className="px-2 py-2 bg-cyan-400">order placed</button></td>
      

    
//        </tr>



// </>)



// })


//     return(<>
    
//     {/* <table className="">
// <tr >
//        <th className=" bg-gray-50 text-center  font-medium text-gray-500 uppercase tracking-wider">S.no</th>
//        <th className=" bg-gray-50 text-center  font-medium text-gray-500 uppercase tracking-wider">dop</th>
//        <th className=" bg-gray-50 text-center font-medium text-gray-500 uppercase tracking-wider">amount</th>
//        <th className=" bg-gray-50 text-center font-medium text-gray-500 uppercase tracking-wider">fullName</th>
//        <th className=" bg-gray-50 text-center  font-medium text-gray-500 uppercase tracking-wider">mobile</th>
//        <th className=" bg-gray-50 text-center  font-medium text-gray-500 uppercase tracking-wider">city</th>
//        <th className=" bg-gray-50 text-center  font-medium text-gray-500 uppercase tracking-wider">address</th>
//        <th className=" bg-gray-50 text-center  font-medium text-gray-500 uppercase tracking-wider">state</th>
//        <th className=" bg-gray-50 text-center  font-medium text-gray-500 uppercase tracking-wider">pincode</th>
//        <th className=" bg-gray-50 text-center  font-medium text-gray-500 uppercase tracking-wider">productitems</th>
//        <th><button className="px-2 py-2 bg-cyan-400" >status</button></th>
      
//        </tr>
    
// </table> */}

// <div style={{ height: 400, width: '100%' }}>
// //       <DataGrid
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

//     {ans}

    
//     </>)
    
//     }
    
    
//     export default DisplayOrder;




    

// // import * as React from 'react';
// // import { DataGrid } from '@mui/x-data-grid';

// // const columns = [
// //   { field: 'id', headerName: 'ID', width: 70 },
// //   { field: 'firstName', headerName: 'First name', width: 130 },
// //   { field: 'lastName', headerName: 'Last name', width: 130 },
// //   {
// //     field: 'age',
// //     headerName: 'Age',
// //     type: 'number',
// //     width: 90,
// //   },
// //   {
// //     field: 'fullName',
// //     headerName: 'Full name',
// //     description: 'This column has a value getter and is not sortable.',
// //     sortable: false,
// //     width: 160,
// //     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
// //   },
// // ];

// // const rows = [
// //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
// //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
// //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
// //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
// //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
// //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
// //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
// //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
// //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// // ];

// // export default function DataTable() {
// //   return (
// //     <div style={{ height: 400, width: '100%' }}>
// //       <DataGrid
// //         rows={rows}
// //         columns={columns}
// //         initialState={{
// //           pagination: {
// //             paginationModel: { page: 0, pageSize: 5 },
// //           },
// //         }}
// //         pageSizeOptions={[5, 10]}
// //         checkboxSelection
// //       />
// //     </div>
// //   );
// // }