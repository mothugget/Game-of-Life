export default function Cell(props) {
    const cellClass = `all-cells cell-state-${props.cell.cellState}`

    return <button className={cellClass} onClick={() => {
        props.cellProps.toggleCells(props.cell.cellPosition[0], props.cell.cellPosition[1])
    }}>
        {props.cell.cellState ?<div className="cell-highlight"></div>:''}
    </button>
}