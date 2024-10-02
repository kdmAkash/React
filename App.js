const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"Hello React js h1"),
            React.createElement("h2",{},"Hello React js h2")
        ]
    )
,React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"Hello React js h1"),
        React.createElement("h2",{},"Hello React js h2")
    ]
)
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
setTimeout(()=>{
    root.render(parent);
},5000);