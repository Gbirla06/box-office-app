import { useState } from "react";
import { searchForShows, searchForPeople } from "./../../src/Api/tvmaz";
import SearchForm from "./../Components/SearchForm";
import ShowGrid from "../Components/shows/ShowGrid";
import ActorsGrid from "../Components/actors/ActorsGrid";


const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setApiDataError(null);
      let result;
      if (searchOption === "shows") {
        result = await searchForShows(q);
      } else {
        result = await searchForPeople(q);
      }
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured : {apiDataError.message}</div>;
    }
    if(apiData?.length ===0){
      return <div>No result found</div>
    }
    if(apiData) {
      return apiData[0].show
        ? <ShowGrid shows={apiData}/>
        : <ActorsGrid actors={apiData}/>;
    }
    return null;
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
