import { useState } from 'react';
import './App.css';
import TodoHeader from './component/TodoHeader';
import TodoList from './component/TodoList';


function App() {
  let [openModal,setopenModal] = useState(false)
  let [data,setData] =useState([])
  let [newIndex,setnewIndex] = useState(undefined)

  function changeModal(){
    if(!openModal){
      setopenModal(true)
    }else{
      setopenModal(false)
    }
  }

  function hideModal(){
    setopenModal(false)
  }

  function add(name,des,date){
    setData([...data,{name: name, description:des, date:date}])
  }

  function getIndex(i) {
    // newIndex = i
    setnewIndex(i)
    console.log(newIndex);
  }

  
  function del() {
    data.splice(newIndex,1)
    setData(data)
  }

  function upd(name,description,date){
    data[newIndex] = {name, description, date}
    setData(data)
  }

  return (
    <div className="App">
      <div className="form">
        <TodoHeader openModal={openModal} changeModal={changeModal} add={add} ></TodoHeader>
        <TodoList data={data} getIndex={getIndex} del={del} newIndex={newIndex} upd={upd}></TodoList>
      </div>
    </div>
  );
}

export default App;
