import './Task.scss';
import '../../../App.css'
import Button from "@restart/ui/esm/Button"
import { MdSettingsSuggest} from 'react-icons/md'
import { MdDateRange } from 'react-icons/md'
import { ImAttachment } from 'react-icons/im'
import { BiAddToQueue, BiUserPlus } from 'react-icons/bi'
import { useState } from 'react';
import { useFormik } from 'formik';

const Task = () => {
 
    const formik = useFormik({    //return Object

        initialValues:{
            title:"",
            description:"",
            comment:"",
            fileAttach:"",
            createdByname:"",
            createdByEmail:"",
            date:"",
            assignedForName:"",
            assignedForEmail:"",
        },
        onSubmit: values=>{
            console.log("from data ------->", formik.values)
        }

    }); 

    // console.log("from values ------->", formik.values);

    const [cardForm, setCardForm] = useState(false);
    const [assignForm, setAssignForm] = useState(false);
    const [createdBy, setCreatedBy] = useState(false);
    const [dueTo, setDueTo] = useState(false);

    const attachFile = () => {
        setCardForm(!cardForm)
    };
    const taskMaking = () => {
        setAssignForm(!assignForm)
    };
    const createdTask = () => {
        setCreatedBy(!createdBy)
    };
    const DueTo = () => {
        setDueTo(!dueTo)
    };


    const doupload = () => {
        let data = document.getElementById("file").files[0];
        let entry = document.getElementById("file").files[0];
        console.log('doupload', entry, data)
        fetch('uploads/' + encodeURIComponent(entry.name), { method: 'PUT', body: data });
        alert('your file has been uploaded');
        window.location.reload();
    };

    return (
        <section className="mt-5">
            <div className="Task-header">
                <h2 className="newTask">New Task</h2>
                <div className="settingIcon px-2">
                    <MdSettingsSuggest className="setting-icon-item"></MdSettingsSuggest>
                    <h6 className="mt-2 settingName ms-1">setting</h6>
                </div>    
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group mb-3">
                    <label className="label ">Title</label>
                    <input type="text" className="form-control" id="title" name="title" placeholder="Task Title" onChange={formik.handleChange} value={formik.values.title}></input>
                </div>
                <div className="form-group mb-5">
                    <label className="label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" placeholder="Task Title" onChange={formik.handleChange} value={formik.values.descriptions}></input>
                </div>
                <div className="form-group">
                    <textarea type="text" className="w-100" id="comment" name="comment" placeholder="Comment" onChange={formik.handleChange} value={formik.values.comment}></textarea>
                </div>
                
                <div className="mx-5 task-items">
                    <li className="text-muted task-items-wrapper" onClick={attachFile}>
                        <ImAttachment className="icon"></ImAttachment>
                        File Attachment
                    </li>
                    <li className="task-items-wrapper text-muted" onClick={createdTask}><BiAddToQueue className="icon" />Created By</li>
                    <li className="task-items-wrapper text-muted" onClick={DueTo}><MdDateRange className="icon" />Due To</li>
                    <li className="task-items-wrapper text-muted" onClick={taskMaking}><BiUserPlus className="icon" />Assigned for</li>
                </div>
                <div>
                    {
                        cardForm && 
                        <div>
                            <input type="file" name="fileAttach" id="fileAttach" onChange={formik.handleChange} value={formik.values.fileAttach}/>
                            {/* <button className="file-attachment" onclick="doupload()" name="submit">Drop Your File Here</button>  */}
                        </div>
                    }
                </div>
                {
                    createdBy &&
                    <form className="d-flex">
                        <label className="label">Enter Name</label>
                        <input placeholder="name" type="text" id="createdByname" name="createdByname" onChange={formik.handleChange} value={formik.values.createdByname}></input>
                        <label className="label">Enter Email</label>
                        <input placeholder="email" type="email" id="createdByEmail" name="createdByEmail" onChange={formik.handleChange} value={formik.values.createdByEmail}></input>
                    </form>
                }
                {
                    dueTo &&
                    <form>
                        <label className="label" for="start">choose The Date:</label>

                        <input type="date" id="date" name="date"
                            placeholder="2021-11-30"
                            min="2021-01-01" max="2025-12-31" onChange={formik.handleChange} value={formik.values.date}></input>
                    </form>
                }
                {
                    assignForm &&
                    <form className="d-flex">
                        <label className="label fs-6">Enter Name</label>
                        <input placeholder="name" type="text" id="assignedForName" name="assignedForName" onChange={formik.handleChange} value={formik.values.assignedForName}></input>
                        <label className="label fs-6">Enter Email</label>
                        <input placeholder="email" type="email" id="assignedForEmail" name="assignedForEmail" onChange={formik.handleChange} value={formik.values.assignedForEmail}></input>
                    </form>
                }
                <Button className="addBtn mt-5" type="submit">ADD TASK</Button>
             
            </form>

        </section>
    )
}
export { Task }