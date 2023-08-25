export default function AppTitle(props){
    const {title="Box Office",subtitles="Are you looking for movies"} = props;

    return (
        <div>
            <h1>{title}</h1>        
            <p>{subtitles}</p>
        </div>
    );
};