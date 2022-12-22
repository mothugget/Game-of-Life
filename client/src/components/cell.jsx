export  default function Cell(props){
    const cellClass = `cell-button-${props.cell.cellState}`

    return <button className={cellClass}>{props.cell.cellState}</button>
}