import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchForShows, searchForPeople } from "./../../src/Api/tvmaz";
import SearchForm from "./../Components/SearchForm";
import ShowGrid from "../Components/shows/ShowGrid";
import ActorsGrid from "../Components/actors/ActorsGrid";
import { TextCenter } from "../Components/common/TextCenter";

const Home = () => {
  
  const [filter, setFilter] = useState(null)
  

  const { data: apiData, error: apiDataError } = useQuery({
      queryKey: ['search', filter],
      queryFn: () => 
      filter.searchOption === 'shows' 
      ? searchForShows(filter.q) 
      : searchForPeople(filter.q),
      // ⬇️ disabled as long as the filter is empty
      enabled: !!filter
  })


  const onSearch = async ({ q, searchOption }) => {   
    setFilter({q,searchOption});
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <TextCenter>Error occured : {apiDataError.message}</TextCenter>;
    }
    if(apiData?.length ===0){
      return <TextCenter>No result found</TextCenter>
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
