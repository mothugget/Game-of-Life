import Cell from "./cell"

export default function BoardRender(props) {
    return (
        <div className="board-container">
            {props.board.map(
                (row) =>
                    <div key={row[0].cellPosition[0]} className="row-container">{row.map(
                        (cell) =>
                            <Cell key={cell.cellPosition.toString()} cell={cell} cellProps={props.cellProps} />
                    )}</div>)}
        </div>
    )
}