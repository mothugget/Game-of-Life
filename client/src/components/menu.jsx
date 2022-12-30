export default function Menu({ menuProps: {
    toggleRunning,
    refresh,
    setRefresh,
    width,
    setWidth,
    height,
    setHeight,
    running
} }) {


    function handleRefresh(event) {
        event.preventDefault();
        setRefresh(event.target[0].value || refresh);
    }

    function handleDimensions(event) {
        event.preventDefault();
        setHeight(event.target[0].value || height);
        setWidth(event.target[1].value || width);
    }

    return (
        <div className="menu-container">
            <button className="run-button" onClick={toggleRunning}>{running?"Running":"Run"}</button>
            {running ?
                '' :
                <div className="forms-container">
                    <form className="refresh-input" onSubmit={handleRefresh}>
                        <label>Lifecycle</label>
                        <input type="number" placeholder={refresh} />
                        <button type="submit"> Set Lifecycle </button>
                    </form>
                    <form className="dimension-input" onSubmit={handleDimensions}>
                        <label>Height</label>
                        <input name="height" type="number" placeholder={height} />
                        <label>Width</label>
                        <input name="width" type="number" placeholder={width} />
                        <button type="submit"> Set Dimensions </button>
                    </form>
                </div>}
        </div>
    )
}