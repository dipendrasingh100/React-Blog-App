import React, { useState } from 'react'

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const sliderStyles = {
        height: '100%',
        position: '100%',

    }
    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].thumb})`
    }

    const dotContainerStyles = {
        display:'none',
        justifyContent: 'center' 
    }

    const dotStyle = {
        margin: '0 3px',
        cursor:"pointer",
        fontSize: '50px'
    }

    const goToSlide = (index)=>{
        setCurrentIndex(index)
    }
    return (
        <div style={sliderStyles}>
            <div style={slideStyles}></div>
            <div style={dotContainerStyles} className='dot-container'>{slides.map((slide, index) => (
                <div key={index} style={dotStyle} onClick={()=>goToSlide(index)}><div className="dot">•</div></div>
            ))}</div>
        </div>
    )
}

export default ImageSlider
