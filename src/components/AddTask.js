import React, { useState } from 'react';
import { FaRegListAlt, FaRegCalenderAlt } from 'react-icons/fa';
import moment from 'moment';
import { firebase } from '../firebase';
import { useSelectedProjectValue } from '../context';


export const AddTask = ({
        showAddtaskMain = true, 
        showShouldMain = false, 
        showQuickAdTask,
        setShowQuickAddTask
    }) => {
        const [task, setTask] = useState('');
        const [taskDate, setTaskDate] = useState('');
        const [project, setProject] = useState('');
        const [showMain, setShowMain] = useState(shouldShowMain);
        const [showProjectOverlay, setShowProjectOverlay] = useState(false);
        const [showTaskDate, setShowTaskDate] = useState(false);
      
        const { selectedProject } = useSelectedProjectValue();

        const addTask = () => {
            const projectId = project || 
        }
    return <div> Add Task </div>
}