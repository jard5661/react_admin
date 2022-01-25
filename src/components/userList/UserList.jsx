import './UserList.css'
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons'; 
import { userRows } from'../../dummyData.js';
import { Link} from "react-router-dom";
import {useState} from 'react';
export default function UserList() {

const [data, setData] = useState(userRows);
const handleDelete = (id) => {
  setData(data.filter(item=>item.id !== id));
}

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'User Name', width: 130 },
  { field: 'avatar', headerName: 'Avatar', width: 130,  renderCell:(params)=>{
    return(
      <div className='userListUser'>
        <img className='userListImg' src={params.row.avatar} alt=""></img>
      </div>
    )

  } },
  { field: 'email', headerName: 'Email', width: 130 },
  {
    field: 'status',
    headerName: 'Status',
    width: 90,
  },
  {
    field: 'transaction',
    headerName: 'Transaction Volume',
    description: 'This column has a value getter and is not sortable.',
    type: 'number',
    width: 160,
  },
  {
    field:'action',
    headerName:'Action',
    width:160,
    renderCell: (params)=>{
      return(
        <>
          <Link to={"/users/"+params.row.id}>   <button className="userListEdit">Edit</button></Link>
       
          <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)}></DeleteOutline>
        </>
      )
    }
  }
];



    return (
        <div className='userList'>
              <DataGrid
        rows={data} disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}
