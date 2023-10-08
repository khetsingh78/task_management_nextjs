// import context api 
import { useState, createContext, useContext } from "react";

// create a context 
const TaskContext = createContext();

// Create a provider component
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        {
            title: "This is defalut task",
            description: "Lorem Ipsum is simply dummy text of the printing ",
            date: "2023-10-08"
        }
    ]);

    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    );
};

// Create a custom hook to access the context
export const useTask = () => {
    return useContext(TaskContext);
};
