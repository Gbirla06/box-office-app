// import { useEffect, useState } from "react";
import {useParams, Link} from "react-router-dom"
import { getShowById } from "../Api/tvmaz";
import { useQuery } from "@tanstack/react-query";
import ShowMainData from "../Components/shows/ShowMainData";
import Details from "../Components/shows/Details";
import Seasons from "../Components/shows/Seasons";
import Cast from "../Components/shows/Cast";

const Show = () =>{
    const {showId} = useParams();

    // const [showData, setShowData] = useState(null);
    // const [showError,setShowError] = useState(null);

    // useEffect(() =>{
    //     // getShowById();
    //     async function fetchData(){
    //         try{
    //             const data = await getShowById(showId);
    //             setShowData(data);
    //         }
    //         catch(err){
    //             setShowError(err);
    //         }
    //     }

    //     fetchData();
    // },[showId]);

    const {data:showData,error:showError}= useQuery({ 
        queryKey: ['show',showId], 
        queryFn: () => getShowById(showId)
    });

    


    if(showError){
        return <div>We have an error : {showError.message}</div>
    }
    if(showData){
        return <div>
            <Link to="/">Go back to home</Link>
            <ShowMainData 
                image={showData.image} 
                name={showData.name} 
                rating={showData.rating} 
                summary={showData.summary} 
                genres={showData.genres} 
            /> 
            <div>
                <h2>Details</h2>
                <Details
                    status={showData.status}
                    premiered={showData.premiered}
                    network={showData.network}
                />
            </div>
            <div>
                <h2>Seasons</h2>
                <Seasons seasons={showData._embedded.seasons} />
            </div>
            <div>
                <h2>Cast</h2>
                <Cast cast={showData._embedded.cast}/>
            </div>
        </div>
    }

    return <div>
        Data is loading
    </div>
};

export default Show;
