"use client"
import { useCallback,useState,memo } from "react"
import {GoogleMap,useJsApiLoader,Marker} from  "@react-google-maps/api";

const Map = ({locations})=>{
    const containerStyle = {
        width:'100%',
        height:'90%'
    }
    const center={
        lat: locations[0].lattitude,
        lng: locations[0].longitude
    }
    const image = '🚩'
    const {isLoaded}=useJsApiLoader({
        id:'google-map-script',
    })
    return(
        <>
        </>
    )
}

export default Map