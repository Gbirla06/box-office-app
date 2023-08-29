import { useQuery } from "@tanstack/react-query";
import { useStarredShows } from "../Components/lib/useStarredShows";
import { getShowByIds} from "../Api/tvmaz";
import ShowGrid from "../Components/shows/ShowGrid";
import {TextCenter} from "../Components/common/TextCenter";
 
const Starred = () => {
  const [starredShowsIds] = useStarredShows();
  
  const {data:starredShows,error:starredshowsError} = useQuery({
    queryKey:['starred',starredShowsIds],
    queryFn: () => getShowByIds(starredShowsIds).then(result => result.map(show => {
      return {show}
    }))

  })

  // starredShows && starredShows.length>0
  if(starredShows?.length===0){
    return <TextCenter>No Shows were starred</TextCenter>
  }
  if(starredShows?.length>0){
    return <ShowGrid shows={starredShows} />
  }
  if(starredshowsError){
    return <TextCenter>Error occured : {starredshowsError.message}</TextCenter>
  }

  return <TextCenter>
    Shows are still loading...
    </TextCenter>;
};

export default Starred;
