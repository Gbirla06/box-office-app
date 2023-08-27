const ShowMainData = ({image,name,rating,summary,genres}) =>{
    return <div>
        <img src={image?image.original:"/imageNotFound.png"} alt={name} />
        <div>
            <h1>{name}</h1>
            <div>{rating.average || 'N/A'}</div>
            <div dangerouslySetInnerHTML={{__html:summary}}/>
            <div>
                Genres
                <div>
                    {genres.map((ele) => 
                        <span key={genres}> {ele}</span>)}
                </div>
            </div>
        </div>
    </div>
};

export default ShowMainData;