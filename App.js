const div = React.createElement("div", {}, 
    React.createElement('div',{ 'className': 'container' }, [
        React.createElement('div', {'className': 'firstBox'},
            [
                React.createElement('h1', {'id':'firstBoxH1'}, "Hello This is first box h1 tag"),
                React.createElement('h2', {'id':'firstBoxH2'}, "Hello This is first box h2 tag")
            ]         
        ),
        React.createElement('div', {'className': 'secondBox'}, [
            React.createElement('h1',{'id':'secondBoxH1'}, 'Hello this is secondbox h1 tag'),
            React.createElement('h2', {'id':'secondBoxh2'}, 'Hello this is secondbox h2 tag')
        ])        
    ]
        
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(div)