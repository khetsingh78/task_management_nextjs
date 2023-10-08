"use client"
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useEffect, useState } from 'react';
import { useTask } from '@/context/TaskContext';
import { useRouter } from 'next/navigation';
export default function Home() {
    let router = useRouter();
    let { tasks, setTasks } = useTask();
    let [minDate, setMinDate] = useState('');
    let [task, setTask] = useState({
        title: "",
        description: "",
        date: ""
    })

    const inputHandle = (e) => {
        let { name, value } = e.target;

        setTask({
            ...task,
            [name]: value
        })

    }

    const addTask = () => {
        if (task.title !== "" && task.description !== "" && task.date !== "") {
            setTasks([...tasks, task]);
            router.push('/')
        } else {
            alert('Please Fill Details');
        }
    }

    useEffect(() => {

        let dtToday = new Date();
        let month = dtToday.getMonth() + 1;
        let day = dtToday.getDate();
        let year = dtToday.getFullYear();
        if (month < 10) {
            month = '0' + month.toString();
        }
        if (day < 10) {
            day = '0' + day.toString();
        }

        let date = year + '-' + month + '-' + day;
        // console.log(date);
        setMinDate(date);

    }, [])


    return (
        <>
            <Header />

            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-md w-96">
                    <h1 className="text-2xl font-semibold mb-4">Add Task</h1>
                    <div className="mb-4">
                        <label  className="block text-sm font-medium text-gray-700">Title</label>
                        <input type="text" id="title" value={task.title} name="title" className="w-full px-4 py-2 border rounded-md" placeholder="Enter  title" onChange={inputHandle} />
                    </div>
                    <div className="mb-4">
                        <label  value={task.descreption} className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea id="description" name="description" rows="4" className="w-full px-4 py-2 border rounded-md " placeholder="Enter your description" onChange={inputHandle}></textarea>
                    </div>
                    <div className="mb-4">
                        <label  className="block text-sm font-medium text-gray-700">Select Date</label>
                        <input type="date" value={task.date} id="birthdate" name="date" className="w-full px-4 py-2 border rounded-md" min={minDate} onChange={inputHandle} />
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none  " onClick={addTask}>Save</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
