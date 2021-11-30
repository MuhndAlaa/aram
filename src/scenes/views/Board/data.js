import React, { useState } from "react";
import firebase from "../../../firebase/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";


const project_id ='ODmhjrhsHZLpcAw3M79x';
//Declare firebase
const ref = firebase.firestore();
// const user = useSelector((state) => state.user); //State of user









const data_default = [{
    id: 1,
    icon: "⭕️",
    status: "open",
    title: "Human Interest Form",
    content: "Fill out human interest distribution form"
}, {
    id: 2,
    icon: "⭕️",
    status: "open",
    title: "Purchase present",
    content: "Get an anniversary gift"
}, {
    id: 3,
    icon: "⭕️",
    status: "open",
    title: "Invest in investments",
    content: "Call the bank to talk about investments"
},
, {
    id: 4,
    icon: "⭕️",
    status: "open",
    title: "Invest in investments",
    content: "Call the bank to talk about investments"
},

{
    id: 5,
    icon: "⭕️",
    status: "open",
    title: "Daily reading",
    content: "Finish reading Intro to UI/UX"
}];

const statuses = [{
    status: "notOpened",
    progress: "To Do",
    icon: "⭕️",
    color: "#EB5A46"
}, {
    status: "inProgress",
    progress: "in progress",
    icon: "🔆️",
    color: "#00C2E0"
}, {
    status: "in review",
    progress: "in review",
    icon: "📝",
    color: "#C377E0"
}, {
    status: "completed",
    progress: "Done",
    icon: "✅",
    color: "#3981DE"
}];


export { data_default, statuses };