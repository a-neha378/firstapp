import React from 'react'
import styled from 'styled-components'

export const HeroSection = () => {

  const Wrapper = styled.section`



  `  
  return (
   <Wrapper> 
    <div className='container'>

       <div className='grid grid-two-column'>
            <div className='hero-section-data'>
                <p className='intro-data'>Welcome To</p>
                <h1> Neha Store </h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                atque temporibus veniam doloribus libero ad error omnis voluptates
                animi! Suscipit sapiente.
                </p>
            </div>
            <div className='hero-section-image'></div>
       </div>

    </div>
   </Wrapper>
  )
}
