import axios from "axios";
import {useEffect} from "react";
import './App.css';

function App() {
  const key= "a94ea8aacf81a7f4483794ee04feb324";
  
    useEffect(() => {
      async function getApi() {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${key}&units=metric`);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
      getApi();
    }, [])
    return <div className="App"> </div>
  }

export default App;
