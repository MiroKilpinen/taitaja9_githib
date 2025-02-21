import "../styles/appInfo.css";

function AppInfo(props) {
    return (
        <div className="App-info">
            <span className="App-info-1">{props.KilpailuNimi}</span>
            <span className="App-info-1">rasti {props.rasti}</span>
            <span className="App-info-1">{props.RAika}</span>
            <select className="App-info-2" id="AppInfo2">
                <option value="default" select>Filter</option>
                <option value="nopeaEnsi">Nopein ensin</option>
                <option value="hidasEnsi">Hitain ensin</option>
                <option value="top5">TOP 5</option>
                <option value="koulu1">{props.Koulu1}</option>
                <option value="koulu2">{props.Koulu2}</option>
            </select>
        </div>
        );
};

export default AppInfo;