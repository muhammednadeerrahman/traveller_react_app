import React, {useState, useEffect,useParams} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Nav from '../includes/Nav'

export default function Places() {
    const [places, setPlaces] = useState([])
    

    useEffect(() =>{

        axios.get("https://traveller.talrop.works/api/v1/places/")
        .then(function (response) {
            console.log(response.data.data)
            setPlaces(response.data.data)
        })
        .catch(function (error){
            console.log(error)

        })

    },[])

    let renderPlaces =()=>{
      return (
        
            places.map((place)=>(
                <Place key = {place.id}>
                    <Link to={`place/${place.id}`}>
                        <PlaceImage src={place.image} alt ={place.name}></PlaceImage>
                        <h2>{place.name}</h2>
                    </Link>
                    
                </Place>
                
            ))
       
       
      )  
        
    }
  return (
    <>
        
        <Nav/>
        <PlacesDetailContainer>
            <ContentTitle>
                Welcome
            </ContentTitle>
            <SubTitle>
                Explore World Around You
            </SubTitle>
            <PlacesContianer>
                {renderPlaces()}
                
            </PlacesContianer>
        </PlacesDetailContainer>
    </>
  )
}



const PlacesDetailContainer = styled.div `
padding : 20px 30px ;
`
const ContentTitle = styled.h1 ``
const SubTitle = styled.p ``
const PlacesContianer = styled.div `
display: flex;
justify-content: space-between;
flex-wrap: wrap;

`
const Place = styled.div `
width: 25%;
margin-bottom: 30px;


`
const PlaceImage = styled.img`
display: block;
width: 90%;
border-radius: 10px;
margin-bottom: 15px;


`
