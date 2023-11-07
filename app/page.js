"use client"
import React, { useState } from 'react'

const page = () => {
  const [tittle,settittle] = useState("")
  const [desc,setdesc] = useState("")
  const [mainTask,setmainTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    if(tittle){
      setmainTask([...mainTask, {tittle,desc}])
      settittle("")
      setdesc("")
    }else{
      alert("filled input")
    }
  }

  const deleteHandler=(i)=>{
    let copytask=[...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }

  let renderTask = <h2> No Task Available</h2>
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return (
        <li key={i} className='flex justify-between items-center px-8 mb-5'>

          <div className='flex items-center justify-between w-2/3 px-8'>
            <h5 className='text-2xl font-semibold'>{i+1}.    {t.tittle}</h5>
            <h6 className='text-xl font-semibold'>{t.desc}</h6>
          </div>
          
          <button className='bg-red-600 text-white rounded font-bold  px-4' onClick={()=>{
            deleteHandler(i)
          }}>delete</button>
        </li>
      )
    })
  }

  return (
    <div>
      <h1 className='bg-purple-600 text-white text-center font-bold p-5 text-4xl'>REACT TODO-LIST</h1>

      <form onSubmit={submitHandler} className='flex item-center justify-center m-7'>
        <input type='text' className='text-2xl border-zinc-600  border-2 m-5 px-5 py-1' placeholder='Enter Task here' value={tittle}  onChange={(e)=>{
          settittle(e.target.value)
        }}/>

        <input type='text' className='text-2xl border-zinc-600 border-2 m-5 px-5 py-1' placeholder='Enter Description here' value={desc}  onChange={(e)=>{
          setdesc(e.target.value)
        }}/>
        <button className='bg-purple-600 text-white text-2xl border-white px-5 py-1 m-5 font-semibold rounded'>Add Task</button> 
      </form>

      <hr/>

    {/* below code for todo list */}
      <div className='bg-slate-200 p-8 text-center text-bold mt-5 text-2xl'>
        <ul className='text-center'>
          {renderTask}
        </ul>
      </div>
    </div>
  )
}

export default page
 