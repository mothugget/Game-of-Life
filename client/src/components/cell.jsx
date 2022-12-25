export  default function Cell(props){
    const cellClass = `cell-button-${props.cell.cellState}`

    return <button className={cellClass} onClick={() => { props.cellProps.toggleCells(props.cell.cellPosition[0], props.cell.cellPosition[1])}}>{props.cell.cellState}</button>
}