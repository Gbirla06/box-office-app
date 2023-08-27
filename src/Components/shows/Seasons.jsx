const Seasons = ({seasons}) =>{
    return <div>
        <p>Seasons in total : {seasons.length}</p>
        <p>Episodes in total :{' '}
        {seasons.reduce((sum,seasons)=>sum+seasons.episodeOrder,0)}
        </p>
        <div>
            {seasons.map(season =>(
                <div key={season.id}>
                    <h3>Season {season.number}</h3>
                    <p>Episodes: {season.episodeOrder}</p>
                    <p>Aired: {season.premiereDate}  -  {season.endDate}</p>
                </div>
            ))}
        </div>
    </div>;
};
export default Seasons;