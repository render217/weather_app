import React from 'react'
import { getFormatedDate, getImage, kelvinToCelsius } from '../../../util/helper';
import { useGlobalState } from '../../../context/GlobalContextProvider';

const DayCard = (props) => {
  const {setCurrentForecast,setSelectedHighlightTitle} = useGlobalState();
  const {data} = props;
  const temp_min = kelvinToCelsius(data.main.temp_min);
  const temp_max = kelvinToCelsius(data.main.temp_max);
  const date = getFormatedDate(data.dt_txt);
  const image = getImage( data.weather[0].main)

  
  console.log(data.weather[0].main)
   return (
    <div className="day-card" onClick={()=>{
      setCurrentForecast(data)
      setSelectedHighlightTitle(date)
     }
      }>
        <p className='date'>{date}</p>
        <div className="img-container">
          <img src={image} alt="" />
        </div>
        <div className='temp-container'>
            <p className='temp-max'>{temp_min}&deg;C</p>
            <p className='temp-min'>{temp_max}&deg;C</p>
        </div>
    </div>
  )
}

export default DayCard