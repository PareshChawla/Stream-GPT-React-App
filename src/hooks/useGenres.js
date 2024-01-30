import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { setGenres } from "../utils/genresSlice";
import { useEffect } from "react";


const useGenres = () => {
    const dispatch = useDispatch();
    const genres = useSelector((store) => store.genres);

    const fetchGenres = async () => {
        const data = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', API_OPTIONS);
        const jsonData = await data.json();
        dispatch(setGenres(jsonData.genres));
    }

    useEffect(() => {
        fetchGenres();
    },[]);

    return genres;
};

export default useGenres;