import React, { useEffect, useState } from 'react'
import "../css/image_slider.css"

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        const slideInterval = setInterval(() => {
            currentIndex === 2 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
        }, 3000)
        return () => clearInterval(slideInterval)
    }, [currentIndex])

    const goToSlide = (index) => {
        setCurrentIndex(index)

    }
    return (
        <div className='sliderStyles'>
            <div style={{ backgroundImage: `url(${slides[currentIndex].thumb})` }} className='slideStyles'></div>
            <div className='dot-container'>
                {slides.map((slide, index) => (
                    <div key={index} className='dotStyle' onClick={() => goToSlide(index)}>
                        <div className="dot" style={index === currentIndex ? { backgroundColor: 'black' } : null}></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider
