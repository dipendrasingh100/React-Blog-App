import React, { useEffect, useState, useContext } from 'react'
import "../css/image_slider.css"
import { Link } from 'react-router-dom'
import { ContextData } from './ContextData'

const ImageSlider = ({ slides }) => {
    const data = useContext(ContextData);
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
            <div style={{ backgroundImage: `url(${data[slides[currentIndex]].thumb})` }} className='slideStyles'>
                <Link className='pad' to={`/${data[slides[currentIndex]].genre.toLowerCase()}/${data[slides[currentIndex]].id}`} >
                    <div className="cover-title-conatiner height">
                        <div className="cover-subheading fontsize">{data[slides[currentIndex]].title}</div>
                    </div>
                    <div className="tile-foot fcover">
                        <span>{data[slides[currentIndex]].genre}</span> / {data[slides[currentIndex]].post_date}
                    </div>
                </Link>
            </div>
            <div className='dot-container'>
                {slides.map((slide, index) => (
                    <div key={index} className='dotStyle' onClick={() => goToSlide(index)}>
                        <div className={`dot ${index === currentIndex ? 'bg-color': ''}`}></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider
