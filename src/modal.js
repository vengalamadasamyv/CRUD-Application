import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



function Model(abc) {
  
    console.log(abc);



    // edit
    const update=() => {
      const apiCall = fetch(
        `https://655f2ece879575426b44c375.mockapi.io/student_data_crud_app/studentsData/${abc.modeldata.id}`, {
          method: 'PUT',
          headers: {'content-type':'application/json'},
          body:JSON.stringify(abc.modeldata)
        }
      );
      const data = apiCall.then((gem) => gem.json());
      data.then((items) => {
        console.log(items);
        // console.log(items);
      }).then(()=>{
      abc.setdep(!abc.dep);
      })
      abc.modalClose();
    };

    // new user

    const newUser =()=>{
      fetch('https://655f2ece879575426b44c375.mockapi.io/student_data_crud_app/studentsData/', {
  method: 'POST',
  headers: {'content-type':'application/json'},
  // Send your data in the request body as JSON
  body: JSON.stringify(abc.modeldata)
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // do something with the new task
}).catch(error => {
  // handle error
}).then(()=>{
  abc.setdep(!abc.dep);
  })
  abc.modalClose();
    }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
  </Button>*/}

      <Modal show={abc.modalShow} onHide={abc.modalClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>CRUD Edit...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                defaultValue={abc.modeldata ? abc.modeldata.name : false}
                onChange={(e)=>abc.setmodeldata({...abc.modeldata,name:e.target.value})}
                autoFocus
              />
            </Form.Group>
            

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your E-Mail Id"
                defaultValue={abc.modeldata ? abc.modeldata.emailid : false}
                onChange={(e)=>abc.setmodeldata({...abc.modeldata,emailid:e.target.value})}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Phone No"
                defaultValue={abc.modeldata ? abc.modeldata.phoneNo : false}
                onChange={(e)=>abc.setmodeldata({...abc.modeldata,phoneNo:e.target.value})}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="Qualification"
                defaultValue={abc.modeldata ? abc.modeldata.qualification : false}
                onChange={(e)=>abc.setmodeldata({...abc.modeldata,qualification:e.target.value})}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Location"
                defaultValue={abc.modeldata ? abc.modeldata.location : false}
                onChange={(e)=>abc.setmodeldata({...abc.modeldata,location:e.target.value})}
                autoFocus
              />
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={abc.modalClose}>
            Close
          </Button>
          {abc.modeldata.id === "" ? <Button variant="success" onClick={newUser}>
            Insert Data
          </Button> : <Button variant="primary" onClick={update}>
            Save Changes
          </Button>}
          
        </Modal.Footer>
      </Modal> 
    </>
  );
}

export default Model;