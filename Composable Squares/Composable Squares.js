function Square(props) {
    const text = props.text || 'Hola'
    const color = props.color || 'black'
    const bgcolor = props.bgcolor || 'white'

    return React.createElement('h1', { style: { backgroundColor: bgcolor, color: color, width: '200px', height: '200px', display: 'inline-block' } },
        text);
}

Content = React.createElement('div', null,
    Square({ text: 'white on blue', color: 'white', bgcolor: 'blue' }),
    Square({ text: 'blue on red', color: 'blue', bgcolor: 'red' }),
    Square({ text: 'green of pink', color: 'green', bgcolor: 'pink' })
)

ReactDOM.render(Content, document.getElementById('squares'));