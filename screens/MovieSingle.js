import React from 'react'
import { StyleSheet, Text, View, ImageBackground,Image,Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// const initialState = {
//     id: "",
//     title: "",
//     poster_path: "",
//     backdrop_path: "",
//     overview: "",
//     popularity: "",
//     tagline: "",
//     release_date: "",
//     revenue:"",
//   };

const MovieSingle = ({route,navigation}) => {

    const {title}=route.params
    const {backdrop_path}=route.params
    const {poster_path}=route.params
    const {overview}=route.params
    const {id}=route.params
    const {popularity}=route.params
    const {revenue}=route.params
    const {release_date}=route.params
    const {tagline}=route.params
    

    return (
        <ScrollView style={styles.MovieContainerView}>
            <ImageBackground
                source={{
                    uri:"https://image.tmdb.org/t/p/original"+backdrop_path
                }}
                style={styles.bannerImage}>
                    <Text style={styles.MovieTitle}>{title}</Text>
                    <Image
                        source={{
                            uri:"https://image.tmdb.org/t/p/original"+poster_path
                        }}
                        style={styles.MoviePoster}
                    />
            </ImageBackground>
                <View style={styles.ContainerWithMargin}>
                    <Text style={styles.taglineText}>{tagline}</Text>
                    <Text style={styles.overviewText}>{overview}</Text>
                    <Text style={styles.ContainerText}>Popularity: {popularity}</Text>
                    <Text style={styles.ContainerText}>Revenue: ${revenue}</Text>
                    <Text style={styles.ContainerText}>Release date: {release_date}</Text>
                </View>
        </ScrollView>
    )
}

export default MovieSingle

const styles = StyleSheet.create({
    MovieContainerView:{
        height:windowHeight,
    },
    bannerImage:{
        height:300,
        width:windowWidth,
    },
    MoviePoster:{
        height:300,
        width:200,
        borderRadius:11,
        alignSelf:'center',
        marginTop:30,
        borderColor:'#fff',
        borderWidth:2,
    },
    MovieTitle:{
        fontFamily:'ProductSansBold',
        fontWeight:'bold',
        color:'#fff',
        fontSize:32,
        textAlign:'center',
        marginHorizontal:20,
        marginTop:50,
        padding:20,
        backgroundColor:'rgba(0,0,0,0.7)',
        borderRadius:11,
    },
    ContainerWithMargin:{
        marginTop:180,
        paddingHorizontal:50,
    },
    taglineText:{
        fontFamily:'ProductSans',
        fontSize:28,
        fontWeight:'bold',
        marginTop:30,
        marginBottom:0,
    },
    overviewText:{
        fontSize:20,
        fontFamily:'ProductSans',
        marginVertical:10,
    },
    ContainerText:{
        fontSize:20,
        fontFamily:'ProductSans',
        marginVertical:5,
    }
})
