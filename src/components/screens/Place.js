import React,{useState, useEffect,} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Nav from '../includes/Nav'

export default function Place() {
    const[place, setPlace] = useState([])
    const[image, setImage] = useState([])
    const {id} = useParams()

    useEffect(() =>{
    axios.get(`https://traveller.talrop.works/api/v1/places/view/${id} `)
        .then(function (response){
            console.log(response.data.data)
            setPlace(response.data.data)
            setImage(response.data.data.gallery)
            
        })
    },[])

    let rendorPlaces = () =>{
        return (  
                image.map((image) =>(
                    <ImageLocation src ={image.image}  />

            ))
        )
    }
  return (
    <>
        <Nav/>
          <ContentSection>
            <WrapperSection>
                <SectionTop>
                <PlaceName>{place.name}</PlaceName>
                        <SectionSpan>
                            <Sectiontag>{place.category_name}</Sectiontag>
                            <SectionPng src ={require("../assets/images/place.svg").default}></SectionPng>
                            <SectionLocation>{place.name}</SectionLocation>
                        </SectionSpan>
                   
                </SectionTop>
                <SectionMiddle>
                        <ImageLeftSection>
                            <LeftImage></LeftImage>
                        </ImageLeftSection>
                        <ImageRightSection>
                            <div className='places'>
                            <ImageLocation src={place.image}/>
                                 {rendorPlaces()} 
                            </div>
                        </ImageRightSection>
                    </SectionMiddle>
                    <SectionBottom>
                        <BottomTitle>Place Details</BottomTitle>
                        <BottomContent>{place.description}</BottomContent>
                    </SectionBottom>
            </WrapperSection>

        </ContentSection>
    </>
  )
}

const WrapperSection = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    align-items : center;
`
const ContentSection = styled.div`
    padding : 50px;
`
const SectionTop = styled.div``
const PlaceName = styled.h1`
margin-bottom: 20px;`
const SectionSpan = styled.span`
display :flex;
align-items:center;
 `
const Sectiontag = styled.span`
display: block;
border : 1px solid rgb(192, 192, 192);
border-radius: 25px;
padding :8px 14px;
margin-right:20px;
color: rgb(192, 192, 192) `
const SectionPng = styled.img`
display: block;
margin-right:5px;`
const SectionLocation = styled.span`
color: rgb(192, 192, 192);
display: block;
color: rgb(192, 192, 192) ;
align-items:center;


`

const SectionMiddle = styled.div``
const ImageLeftSection = styled.div``
const LeftImage = styled.img``
const ImageRightSection = styled.div``

const ImageLocation = styled.img`
    display : inline-block;
    width: 100%;`
const SectionBottom = styled.div`
margin-top : 40px;`
const BottomTitle = styled.h2`
margin-bottom: 20px;`
const BottomContent = styled.p``
