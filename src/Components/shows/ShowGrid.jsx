import ShowCard from "./ShowCard";

const ShowGrid = ({ shows }) => {
  shows.map((data) => 
  <ShowCard key={data.show.id} 
            name={data.show.name} 
            image={data.show.image ? data.show.image.medium : '/public/logo192.png'} 
            id={data.show.id}
            summary={data.show.summary}/>);
};
export default ShowGrid;

// (apiData.map(data  => <div key={data.show.id}>{data.show.name}</div>))
