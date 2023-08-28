import { useQuery } from "@tanstack/react-query";
import { useStarredShows } from "../Components/lib/useStarredShows";
import { getShowByIds} from "../Api/tvmaz";
import ShowGrid from "../Components/shows/ShowGrid";
 
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
    return <div>No Shows were starred</div>
  }
  if(starredShows?.length>0){
    return <ShowGrid shows={starredShows} />
  }
  if(starredshowsError){
    return <div>Error occured : {starredshowsError.message}</div>
  }

  return <div>
    Shows are still loading...
    </div>;
};

export default Starred;
