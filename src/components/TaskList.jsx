import React, { useEffect, useState } from 'react';
import { Badge } from '@material-tailwind/react';
import { FaCalendarAlt, FaPencilAlt, FaTrashAlt  } from 'react-icons/fa'; 
import { useTranslation } from 'react-i18next';


export default function TaskList({ listData, handleEdit, handleDelete, editId, setEditId }) {
  const [newText, setNewText] = useState("")
  const [updateData, setUpdateData] = useState([])
  const {t} = useTranslation();
  console.log(listData)
  useEffect(() =>{
   setUpdateData(listData)
  }, [listData])
  const getPriorityClass = (priority) => {
    console.log(priority)
   switch (priority) {
    case 'High':
      return 'bg-red-500 text-white';
    case 'Medium':
      return 'bg-yellow-400 text-black';
    case 'Low':
      return 'bg-green-500 text-white';
    default:
      return 'bg-gray-300 text-black';
  }
  };

  const saveData = (index) =>{
    const updatedData = [...updateData];
    if (updatedData[index]) {
    updatedData[index].text = newText;
    setEditId("")
    console.log(`Updated index ${index}:`, updatedData[index]);
  } else {
    console.warn(`Index ${index} not found in updateData`);
  }
  }

  const canceButton = () =>{
    setEditId("")
  }

const handleCheck = (index) =>{
  const updatedData = [...updateData];
       updatedData[index].checked = !updatedData[index].checked;
setUpdateData(updatedData)
}
  return (
    <div className='w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 mx-auto mt-10'>
      <h2 className='text-3xl font-bold mb-6'>
        {t("seconhead")} <span className="text-blue-700">{listData.length}</span>
      </h2>

      <div className='space-y-4'>
        { updateData.length > 0 ? (listData.map((task, index) => (
          <div
            key={index}
            className='p-4 border border-[#ddd] rounded-lg shadow-sm bg-[#f9faff]'
          >
            {editId === index ? (
           <div className='flex justify-between items-center'>
              <div className='flex gap-2 items-center mb-1'>
              <div>
            <input type='checkbox'/>
            </div>
              <div>
                <input type='text' className='border-[#ddd] border-2 rounded py-1 px-1 rounded-md' value={newText} onChange={(e) => setNewText(e.target.value)} />
                </div>
                </div>
              <div className='flex gap-6 cursor-pointer'>
                 <button className='bg-[#079603] px-4 py-2 rounded-xl text-white cursor-pointer' onClick={() => saveData(index)}>{t("save")}</button>
                 <div>
                 <button className='bg-[#ddd] px-4 py-2 rounded-xl text-black cursor-pointer' onClick={canceButton}>{t("cancel")}</button>
                  </div>
               
            </div>
            </div>
            ) :(
          <div className='flex justify-between items-center'>
              <div className='flex gap-2 items-center mb-1'>
              <div>
            <input type='checkbox' onChange={() => handleCheck(index)} />
            </div>
              <p className='text-lg font-semibold text-gray-800' style={{ textDecoration: task.checked ? 'line-through' : 'none',}}>
                {task.text}
                </p>
                </div>
              <div className='flex gap-6 cursor-pointer'>
                 <FaPencilAlt className='text-[#669dff]' onClick={() => handleEdit(index, task.text)} />
                 <div>
                  <FaTrashAlt className='text-red-500' onClick={() => handleDelete (index)} />
                  </div>
               
            </div>
            </div>
            )}
          

            <div className='flex gap-4 items-center'>
            <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityClass(
                  task.priority
                )}`}
              >
                {t(`optionData.${task.priority}`)}
              </div>

            {task.dueDate && (
              <div className='flex items-center gap-2 text-gray-600 text-sm rounded-full bg-gray-900 px-3 py-1 text-white'>
                <FaCalendarAlt className='text-white' />
                <span>{task.dueDate}</span>
              </div>
            )}
            </div>
          </div>
          
        )
      )) : (
         <p className='text-lg font-semibold text-gray-800'>
                {t("noTasks")}!
                </p>
      )}
      </div>
    </div>
  );
}
