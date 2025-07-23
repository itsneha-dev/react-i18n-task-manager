import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import TaskList from './TaskList';
import { useTranslation } from 'react-i18next';

const priorityOptions = ["Low", "Medium", "High"];

export default function AddToDo() {
    const [inputText, setInputText] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [dueDate, setDueDate] = useState('');
    const [addTask, setAddTask] = useState([]);
      const [checked, setChecked] = useState(false)
    const [editId, setEditId] = useState("");
    const {t} = useTranslation();

    const addList = () => {
        if (inputText.trim() !== '') {
            const newTask = {
                text: inputText.trim(),
                checked,
                priority,
                dueDate
            };
            setAddTask([...addTask, newTask]);
            setInputText('');
            setPriority('Medium');
            setDueDate('');
        }
    };
const handleEdit = (index, task) =>{
    console.log(index,task)
    setEditId(index)
  }
  const handleDelete = (delIndex) =>{
  const newData = addTask.filter((task, index) => index !== delIndex )
  setAddTask(newData)
  }


    return (
        <>
            <div className='w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 mx-auto mt-10'>
                <h2 className='text-3xl font-bold mb-6'>
                    📝 {t("mainHead")}
                </h2>

                <div className='flex flex-col sm:flex-row gap-4 mb-4'>
                    <input
                        type='text'
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={(e) =>{
                            console.log("enha")
                            if(e.key === "Enter"){
                                addList();
                            }
                        }}
                        className='flex-1 border border-gray-300 px-4 py-3 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#ddd]'
                        placeholder= {t("pleaceholderText")}
                    />
                    <button
                        onClick={addList}
                        className='bg-[#0028b4] cursor-pointer text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 text-base hover:bg-[#001f8b] transition-all'

                    >
                        <FaPlus /> {t("addButton")}
                    </button>
                </div>

                <div className='flex w-full gap-4 items-center'>
                    <div className='flex items-center gap-2'>
                        <label className='text-sm font-medium'>{t("priority")}: </label>
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className='w-full border border-gray-300 px-2 py-1 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0028b4]'
                        >
                            {priorityOptions.map((option, idx) => (
                                <option key={idx} value={option}>
                                {t(`optionData.${option}`)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='flex items-center gap-2'>
                        <label className='text-sm font-medium w-full'>{t("dueData")}: </label>
                        <input
                            type='date'
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            placeholder='Pick a Date'
                            className='w-full border border-gray-300 px-2 py-1 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0028b4]'
                        />
                    </div>
                </div>
            </div>

          <div className='mt-6 px-4 sm:px-10'>
                    <TaskList listData={addTask} handleDelete={handleDelete} handleEdit={handleEdit} editId={editId} setEditId={setEditId} />
                </div>
        </>
    );
}
