import { useQuery } from "@tanstack/react-query";
import { useStarredShows } from "../Components/lib/useStarredShows";
import { getShowByIds} from "../Api/tvmaz";
import ShowGrid from "../Components/shows/ShowGrid";
 
const Starred = () => {
  const [starredShowsIds] = useStarredShows();
  
  const {data:starredShows,error:starredshowsError} = useQuery({
    queryKey:['starred',starredShowsIds],
    queryFn:async () => getShowByIds(starredShowsIds)

  })

  if(starredShows){
    return <ShowGrid />
  }

  return <div>
    Starred page {starredShowsIds.length};
    </div>;
};

export default Starred;
