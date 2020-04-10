import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, Image, Button,SafeAreaView,Dimensions } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

// https://api.themoviedb.org/3/movie/100402?api_key=7793cc77a9bf4a20c93232b767974513&language=en-US

// const [ movie, setMovie ] = useState({})

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MovieList = ({movies,navigate}) => {
    
    return (
        <SafeAreaView style={styles.container}>
        <FlatList
          data={movies.sort((a,b)=>(a.local_id>b.local_id)?1:-1)}
          numColumns={2}
          contentContainerStyle={styles.contentContainerStyleView}
          renderItem={({ item }) =>
          <TouchableOpacity
            style={styles.movieItem}
            onPress={()=>navigate("singleMovie",item)}
            // onPress={()=>console.log(item)}
          >
              <Image
                source={{
                    uri:"https://image.tmdb.org/t/p/w500"+item.poster_path
                }}
                
                style={styles.moviePoster}
              />
              <Text style={styles.titleText}>{item.title}</Text>
          </TouchableOpacity>
          }
          keyExtractor={item => item.local_id}
        />
      </SafeAreaView>
    )
}

export default MovieList

const styles = StyleSheet.create({
    movieItem:{
        width:windowWidth/2,
        alignContent:'center',
        paddingVertical:10,
        paddingHorizontal:10,
    },
    moviePoster:{
        height:300,
        width:210,
        borderRadius:11,
        alignSelf:'center',
    },
    contentContainerStyleView:{

    },
    titleText:{
        fontSize:20,
        fontFamily:'ProductSans',
    }
})
