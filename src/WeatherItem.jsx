const WeatherItem = (props) => {
    return (
        <div className="weatherItem"> 
        <h2>{props.weatherItem.stacja}</h2>
        <p>Temperature: {props.weatherItem.temperatura} st. C.</p>
        <p>Pressure: {""} {props.weatherItem.cisnienie ? props.weatherItem.cisnienie + 'hPa' : 'no data'}</p>
    </div>
    );
};

export default WeatherItem;