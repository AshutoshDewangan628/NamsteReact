const heading=React.createElement("h1",{},"Hello World!");
const heading2=React.createElement("h2",{},"heading 2");          
const container=React.createElement("div",{},[heading,heading2]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);