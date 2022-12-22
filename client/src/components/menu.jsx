export default function Menu (props){

    return (
        <div className="menu-container">
            <button className="run-button" onClick={props.toggleRunning}>Run</button>
        </div>
    )
}