import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "../css/detail_desc.css"
import "../css/home.css"
import { ContextData } from './ContextData'
import avtar from "../assets/Mask Group 16.png";
import { handleLink } from './HelperFunctions';
import { shuffleArray } from './HelperFunctions'

const Suggestion = (props) => {
    let data = useContext(ContextData).filter(item => (item.genre === props.category));
    data = shuffleArray(data).slice(0, 3)
    return (
        <div className='dd-tile-container'>
            {data.map((item, index) => (
                <Link to={`/${data[index].genre.toLowerCase()}/${data[index].id}`} key={index} onClick={handleLink}>
                    <div className="dd-tile" >
                        <div><img className="dd-cover" src={data[index].thumb} alt="not found!" /></div>
                        <div>
                            <div className="subheading-container">
                                <div className="subheading">{data[index].title}</div>
                            </div>
                            <div className="dd-tile-foot">
                                <div className="profile">
                                    <img src={avtar} alt="not found" />
                                </div>
                                <div className="writer-desc">
                                    <div className="written_by">WRITTEN BY</div>
                                    <div className="author">Dipendra Singh</div>
                                    <div className="date_time">Jan 28 2019 - 10 min read</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))
            }
        </div>
    )
}

export default Suggestion
