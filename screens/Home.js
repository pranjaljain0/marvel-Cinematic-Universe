import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import MovieList from '../components/MovieList'

var ids=[
    "1726",
    "1724",
    "10138",
    "10195",
    "1771",
    "24428",
    "68721",
    "76338",
    "100402",
    "118340",
    "99861",
    "102899",
    "271110",
    "284052",
    "283995",
    "315635",
    "284053",
    "284054",
    "299536",
    "363088",
    "299537",
    "299534",
    "429617",]

const Home = ({ navigation: { navigate } }) => {

    const initialState = {
        id: "",
        title: "",
        poster_path: "",
        backdrop_path: "",
        overview: "",
        popularity: "",
        tagline: "",
        release_date: "",
        revenue:"",
      };

    const [movie,setMovie]=useState([])
    useEffect(() =>
        ids.forEach((element,index,arr)=>{
            fetch("https://api.themoviedb.org/3/movie/"+element+"?api_key=7793cc77a9bf4a20c93232b767974513&language=en-US")
            .then(res => res.json())
            // .then(setMovie())
            .then(jsonVal=>{
                setMovie((prevMovies)=>{
                    return [
                        ...prevMovies,
                        {
                            local_id:index,
                            id:jsonVal['id'],
                            title:jsonVal['title'],
                            poster_path:jsonVal['poster_path'],
                            backdrop_path:jsonVal['backdrop_path'],
                            overview: jsonVal['overview'],
                            popularity: jsonVal['popularity'],
                            tagline: jsonVal['tagline'],
                            release_date: jsonVal['release_date'],
                            revenue:jsonVal['revenue'],
                    }
                    ]
                })
            })
        })
    ,[]);

    return (
        <MovieList movies={movie} navigate={navigate}/>
    )
}

export default Home


// helper
// onPress={()=>navigate("singleMovie",{title:"SINGLE MOVIE"})}