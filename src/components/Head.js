import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { SERCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    // API call

    //make an API call after every key press
    //but if the difference between 2 API calls is <200ms
    //decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(SERCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    // Update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex">
        <img
          onClick={() => toggleMenuHandler()}
          className="cursor-pointer h-12 col-span-1 mx-3"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
        />
        <a href="/">
          <img
            className="h-12"
            alt="youTube-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnk9Y1gJNsfef0Q970Qgi87cJuheUycIstjw&s"
          />
        </a>
      </div>
      <div className="col-span-10 pl-32">
        <div>
          <input
            className="px-5 w-1/2 rounded-l-full h-10 border border-gray-400"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="h-10 w-20 rounded-e-full border border-gray-400 bg-gray-50">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white px-5 w-96 shadow-lg rounded-lg border border-gray-300">
            <ul>
              {suggestions.map((s) => (
                <li className="py-2 shadow-sm hover:bg-gray-200 cursor-pointer">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-12"
          alt="user-profile"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-Gh6uC11b9BUzfJ1OAuC3MgwwQdOLZL7PA&s"
        />
      </div>
    </div>
  );
};

export default Head;
