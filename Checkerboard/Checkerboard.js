// Create element cell
function Cell(props) {
    const bgcolor = props.bgcolor
    const side = props.side
    return React.createElement('div', { style: { backgroundColor: bgcolor, width: side, height: side, display: 'inline-block', margin: '0px' } });
}
// Create element row, contain n_square cells
function Row(props) {
    const n_square = props.n_square
    const rnum = props.rnum
    const colorA = props.colorA
    const colorB = props.colorB
    const side = props.side
    var block = [];
    for (let i = 0; i < n_square; i++) {
        var col = colorA
        if (i % 2 == (rnum % 2)) {
            col = colorB
        }
        block.push(React.createElement(Cell, { bgcolor: col, side: side }));
    }
    block_ = React.createElement('div', { style: { display: 'block', margin: '-5px', border: '0px', padding: '0px' } }, block)
    return block_
}
// Create element board, contain n_square rows
function Board(props) {
    const n_square = props.n_square || 12
    const colorA = props.colorA || 'black'
    const colorB = props.colorB || 'red'
    const side = props.side || '20px'
    var row = [];
    for (let i = 0; i < n_square; i++) {
        row.push(React.createElement(Row, { n_square: n_square, rnum: i, side: side, colorA: colorA, colorB: colorB }));
    }
    return row
}
// define parameters
var styles = { side: '35px', n_square: 15, colorA: 'black', colorB: 'red' }

ReactDOM.render(Board(styles), document.getElementById('checkerboard'));