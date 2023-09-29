import React from 'react'
import styled from 'styled-components'

export default function Nav() {
  return (
    <>
        <Heading>
            <Headingleft>
                <ImageContainer>
                    <LogoImage src={require("../assets/images/logo.svg").default} alt="logo_image" />
                </ImageContainer>
            </Headingleft>
            <HeadingRight>
                <LoginButton>Login</LoginButton>
            </HeadingRight>
        </Heading>
    </>
    

  )
}

const Heading = styled.div `
padding: 30px;
display: flex;
justify-content: space-between;

`

const Headingleft = styled.div `
width:40%;

`
const ImageContainer = styled.div `
width:20%;

`
const LogoImage = styled.img`
    width: 100%;
    display: block;
`
const HeadingRight = styled.div `
align-items: center;
justify-content: center;
display: flex;
width:20%;

`
const LoginButton = styled.a `

padding: 12px 30px;
color: #fff;
background-color: blue;
display: inline-block;
border-radius: 8px;

`
