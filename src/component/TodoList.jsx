import React from 'react'

function TodoList(props) {
  function getIndex(index){
    const name = document.querySelector('#name').value
    const description = document.querySelector('#description').value
    const Date = document.querySelector('#Date').value


    props.getIndex(index)
  }


  function update(){
    const name = document.querySelector('#name').value
    const description = document.querySelector('#description').value
    const Date = document.querySelector('#Date').value
    props.upd(name,description,Date)
  }

  return (
    <div>
      {props.data.map(function (value, index) {
        return (
          <div className='data' key={index}>
            <div className="left-data">
              <h5>{value.name}</h5>
              <p><i>{value.description}</i></p>
              <p>{value.date}</p>
            </div>
            <div className="right-data">
              <button onClick={() => { getIndex(index) }} data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-pen-to-square"></i></button>
              {/* <button onClick={() =>{props.del(index)}}><i className="fa-solid fa-xmark"></i></button> */}
            </div>






            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Update Task</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                      <input type="text" id='name' placeholder='Name' />
                      <input type="text" id='description' placeholder='description' />
                      <input type="date" name="" id="Date" />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={props.del}>Delete</button>
                    <button type="button" className="btn btn-primary" onClick={update} data-bs-dismiss="modal">Update</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TodoList