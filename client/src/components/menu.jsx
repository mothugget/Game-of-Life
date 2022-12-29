export default function Menu({menuProps:{
    toggleRunning,
    refresh,
    setRefresh,
    width,
    setWidth,
    height,
    setHeight
}}){
    const tempRefresh= refresh;
    const  tempWidth = width;
    const tempHeight = height;
    
    function handleRefresh(event){
        event.preventDefault();
        setRefresh( event.target[0].value);
    }

    function handleDimensions(event) {
        event.preventDefault();
        setHeight(event.target[0].value);
        setWidth(event.target[1].value);
    }

    return (
        <div className="menu-container">
            <button className="run-button" onClick={toggleRunning}>Run</button>
            <form onSubmit={handleRefresh}>
                <input type="number"  placeholder={tempRefresh}  />
                <button type="submit"> Set Lifecycle </button>
            </form>
            <form onSubmit={handleDimensions}>
                <label>Height</label>
                <input name="height" type="number" placeholder={tempHeight} />
                <label>Width</label>
                <input name="width" type="number" placeholder={tempWidth} />
                <button type="submit"> Set Dimensions </button>
            </form>

        </div>
    )
}