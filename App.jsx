import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import Geolocation from '@react-native-community/geolocation'
import axios from 'axios'
import { BaseUrl } from './util'

export default function App() {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [location, setLocation] = useState({ })

    useEffect(() => {
        Geolocation.getCurrentPosition(
            position => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            },
            error => console.error(error)
        );
    }, []);

//     useEffect(() => {
//         const Actualise = () => {
//         axios.get(`${BaseUrl}&q=${latitude},${longitude}`)
//                 .then(response => {
//                     console.log('Données de localisation reçues :', response.data);
//                     setLocation(response.data);
//                 })
//                 .catch(error => {
//                     console.error('Erreur lors de la récupération de la localisation :', error);
//                 });
//                 if (latitude !== null && longitude !== null) {
//                     Actualise();
//                 }
// }},[latitude, longitude]);
    function Actualise() {
        console.log("press");
        axios.get(`${BaseUrl}&q=${latitude},${longitude}`)
                .then(response => {
                    console.log('Données de localisation reçues :', response.data);
                    setLocation(response.data);
                    console.log(location)
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération de la localisation :', error);
                });
    }
   

  return (
    <View>
       <Text>Latitude : {latitude}</Text>
            <Text>Longitude : {longitude}</Text>
           
                <View>
                    <Text>Vous êtes :</Text>
                    {/* <Text>Ville : {location.LocalizedName}</Text>
                    <Text>Pays : {location.Country.LocalizedName}</Text> */}
                    <Button title='Actualiser' onPress={Actualise}/>
                </View>
          
    </View>
  )
}

const styles = StyleSheet.create({})