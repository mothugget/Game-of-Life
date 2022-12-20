import Cell from "./cell"

export default function BoardRender(props){
    return (
        <div className="board-container">
            {props.board.map((row)=> <p className="row-container">{row.map((cell)=> <Cell cell={cell}/>)}</p>)}
        </div>
    )
}