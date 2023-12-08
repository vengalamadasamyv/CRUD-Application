import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import Model from "./modal";
import { TiUserAdd } from "react-icons/ti";

export default function Sample() {
  // api
  const [apiData, setApiData] = useState([]);
  // dependency edit on change
  const [depentchange , setdepentchange] = useState(false);
  
  // button on edit
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // edit content temp
  const [temp, setTemp] = useState({
    id:"",
    name:"",
    emailid:"",
    phoneNo:"",
    qualification:"",
    location:"",

  });

  const editData =(data1)=>{
    setShow(true);
    setTemp({id:data1.id,
      name:data1.name,
    emailid:data1.emailid,
  phoneNo:data1.phoneNo,
qualification:data1.qualification,
location:data1.location});
  }
  // edit
  // create user

  const createUser = ()=>{
    setShow(true);
    setTemp({
      id:"",
    name:"",
    emailid:"",
    phoneNo:"",
    qualification:"",
    location:"",
  })
  };
  
  // delete User

  const deleteUser =(flim)=>{
    fetch(`https://655f2ece879575426b44c375.mockapi.io/student_data_crud_app/studentsData/${flim.id}`, {
  method: 'DELETE',
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with deleted task
}).catch(error => {
  // handle error
}).then(()=>{
  setdepentchange(!depentchange);
})
  }



  useEffect(() => {
    const apiCall = fetch(
      "https://655f2ece879575426b44c375.mockapi.io/student_data_crud_app/studentsData", {
        method: 'GET',
        headers: {'content-type':'application/json'},
      }
    );
    
    const data = apiCall.then((gem) => gem.json());
    data.then((items) => {
      setApiData(items);
      // console.log(items);
    });
  }, [depentchange]);

  console.log(apiData);

  return (
    <div className="m-4">
      <h1>CRUD APP</h1>
      <Table bordered hover className="table_over">
      <thead>
        <tr>
          <th>S.No</th>
          <th>First Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Qualification</th>
          <th>Location</th>
          <th>Action</th>
        </tr>
      </thead>
      {
        apiData.map((detail,index)=>{
          return(
      <tbody>
        <tr>
          <td>{index+1}</td>
          <td>{detail.name}</td>
          <td>{detail.emailid}</td>
          <td>{detail.phoneNo}</td>
          <td>{detail.qualification}</td>
          <td>{detail.location}</td>
          <td className="d-flex gap-1 align-items-center justify-content-center">
          <button className="bg-success text-light border-0" onClick={()=> editData(detail)}>Edit</button>
          <button className="bg-danger text-light border-0" onClick={()=> deleteUser(detail)}>Delete</button>
          </td>
        </tr>
        
      </tbody>
          )
        })
      }
      </Table>
      <Model modalShow={show} modalClose={handleClose} hen={temp} modeldata={temp} setmodeldata={setTemp} dep={depentchange} setdep={setdepentchange}/>
      <span className="adduser" onClick={createUser}><TiUserAdd/></span>
      </div>
  )
}
