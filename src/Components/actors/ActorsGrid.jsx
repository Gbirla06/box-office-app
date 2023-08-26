import ActorCard from "./ActorCard";

const ActorsGrid = ({ actors }) => {
  actors.map((data) => 
  <ActorCard key={data.people.id} 
            name={data.people.name} 
            country={data.person.country?data.person.country.name : null}
            birthday={data.person.birthday}
            deathday={data.person.deathday}
            gender={data.person.gender}
            image={data.people.image ? data.people.image.medium : '/public/logo192.png'} 
    />);
            
};
export default ActorsGrid;
