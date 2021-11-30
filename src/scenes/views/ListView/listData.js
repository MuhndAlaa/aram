const lists = [{
    id: 100,
    title: "Project 1",
    data: [{
        id: 1,
        icon: "⭕️",
        status: "open",
        title: "Human Interest Form",
        content: "Fill out human interest distribution form"
    }, {
        id: 2,
        icon: "📝",
        status: "in review",
        title: "Purchase present",
        content: "Get an anniversary gift"
    }, {
        id: 3,
        icon: "⭕️",
        status: "open",
        title: "Invest in investments",
        content: "Call the bank to talk about investments"
    }, {
        id: 4,
        icon: "✅",
        status: "done",
        title: "Daily reading",
        content: "Finish reading Intro to UI/UX"
    }],
},
];

const statuses = [{
    status: "open",
    icon: "⭕️",
    color: "RGBA(255,0,0,0.73)"
}, {
    status: "in progress",
    icon: "🔆️",
    color: "#C377E0"
}, {
    status: "in review",
    icon: "📝",
    color: "#E1C800"
}, {
    status: "done",
    icon: "✅",
    color: "#009300"
}];

export{lists, statuses}