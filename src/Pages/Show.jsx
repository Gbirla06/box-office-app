// import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { getShowById } from "../Api/tvmaz";
import { useQuery } from "@tanstack/react-query";

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
        return <div>Got show data : {showData.name}</div>
    }

    return <div>
        Data is loading
    </div>
};

export default Show;
