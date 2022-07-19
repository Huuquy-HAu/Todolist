import React from 'react'

function TodoHeader(props) {

    function add() {
        let name = document.querySelector('#inp-task').value
        let des = document.querySelector('#inp-des').value
        let date = document.querySelector('#inp-date').value
        if(!name || !des || !date ) return alert('Không được bỏ trống thông tin !!!')

        props.add(name,des,date)
        document.querySelector('#inp-task').value = ''
        document.querySelector('#inp-des').value =''
        document.querySelector('#inp-date').value =''
    }
  return (
    <div>
        <h1>Todo List</h1>
        <button className={!props.openModal ? 'newTask':'hideModal'} onClick={props.changeModal}>New task</button>

        <div className={ !props.openModal ? 'hideModal' : 'input-form'}>
            <input type="text" id='inp-task' placeholder='Add a newtask ...' />
            <input type="text" id='inp-des' placeholder='description' />
            <input type="date" name="" id="inp-date" />
            <button className='add-btn' onClick={add}>Add</button>
            <button className='cl-btn' onClick={props.changeModal}>Close</button>
        </div>
    </div>
  )
}

export default TodoHeader