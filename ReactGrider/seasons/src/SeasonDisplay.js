import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  Summer: 
  {
    text: "This is why I'm hot!",
    iconName: 'sun',
    season: 'summer'
  },
  Winter: 
  {
    text: "Cooler then a polar bear's toenails.",
    iconName: 'snowflake',
    season: 'winter'
  }
}

const getSeason = (lat, month) => 
{
  if (month > 2 && month < 9)
  {
    return lat > 0 ? 'Summer' : 'Winter';
  }
  else
  {
    return lat < 0 ? 'Winter' : 'Summer';
  }
};

const SeasonDisplay = (props) =>
{
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`massive icon-left ${iconName} icon`}/>
        <h1>{text}</h1>
      <i className={`massive icon-right ${iconName} icon`}/>
    </div>
  )
 
};

export default SeasonDisplay;