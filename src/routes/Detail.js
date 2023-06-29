import { useEffect } from "react";
import { useParams } from "react-router-dom"
export default function Detail() {

//App.js router에서 설정한 :id 값을 useParams으로 넘겨 받음.
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (
        await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.&sort_by=year`)
        ).json();
        console.log(json);
    };

    useEffect(()=> {
        getMovie();
    },[]);

    console.log(id);

    return (
        <>
        <h1>Detail</h1>
        </>
    )

}