import { useState,useEffect} from "react";

const SearchForm = ({onSearch}) =>{
    const [searchStr, setSearchStr] = useState("");
    const [searchOption, setSearchOption] = useState("shows");
    
    /*
    life Cycle of components
      1) mounts
      2) rerender
      3) unmount
    */
   console.log("Component rerender");
    useEffect(()=> {
      console.log("Component mount")
      return () =>{
        console.log("Component unmount")
      }
    },[]);

    const onSearchInputChange = (ev) => {
        setSearchStr(ev.target.value);
      };
    const onRadioChange = (ev) => {
        setSearchOption(ev.target.value);
      };

    const onSubmit = (ev) =>{
        ev.preventDefault();
        
        const options = {
            q:searchStr,
            searchOption
        }
        onSearch(options);
    }

    return (<form onSubmit={onSubmit}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />

        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value="shows"
            checked={searchOption === "shows"}
            onChange={onRadioChange}
          />
        </label>
        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            value="actors"
            checked={searchOption === "actors"}
            onChange={onRadioChange}
          />
        </label>

        <button type="submit">Search</button>
      </form>
)};

export default SearchForm;