import React, { useState } from 'react'
import "../css/footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram, faSquareTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

import { faCircleMinus, faCirclePlus, faEnvelope, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { handleLink } from './HelperFunctions';

const Footer = () => {
    const [res, setRes] = useState(false)
    const [ser, setSer] = useState(false)

    return (
        <footer className='footer-container'>
            <hr />
            <div className="grid grid-cols-1 grid-cols-5">
                <div className="flex flex-col items-center items-start order-last order-first-900">
                    <div className="flex flex-col items-start text">
                        <Link to={"/"} className="flex justify-center" onClick={handleLink}>
                            <div className="tt">The</div>
                            <div className="th">Siren</div>
                        </Link>
                        <p className='text-center text-start text-gray'>
                            Discover the latest happenings in Bollywood, Hollywood, fitness, food, and technology with our dynamic blog app. Stay updated with engaging and informative posts on all your favorite topics, brought to you in one convenient platform
                        </p>
                    </div>
                    <div className="social-icons2">
                        <FontAwesomeIcon icon={faSquareInstagram} size="lg" style={{ color: "#b3b3b3", }} />
                        <FontAwesomeIcon icon={faSquareFacebook} size="lg" style={{ color: "#b3b3b3", }} />
                        <FontAwesomeIcon icon={faSquareTwitter} size="lg" style={{ color: "#b3b3b3", }} />
                        <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: "#b3b3b3", }} />
                    </div>
                </div>
                <div className="flex-900 mx-auto col-span-3 hidden-mob gap-6 gap-12">
                    <div>
                        <h2>Services</h2>
                        <div className='flex flex-col text-gray gap-3'>
                            <Link to={'/technology'} onClick={handleLink}><span className='text-gray'>Technology</span></Link>
                            <Link to={'/bollywood'} onClick={handleLink}><span className='text-gray'>Bollywood</span></Link>
                            <Link to={'/hollywood'} onClick={handleLink}><span className='text-gray'>Hollywood</span></Link>
                            <Link to={'/fitness'} onClick={handleLink}><span className='text-gray'>Fitness</span></Link>
                            <Link to={'/food'} onClick={handleLink}><span className='text-gray'>Food</span></Link>
                        </div>
                    </div>
                    <div>
                        <h2>Resources</h2>
                        <div className='flex flex-col text-gray gap-3'>
                            <Link to={'/github'}><span className='text-gray'>Github</span></Link>
                            <Link to={'/help'}><span className='text-gray'>Help</span></Link>
                            <Link to={'/contact'}><span className='text-gray'>Contact</span></Link>
                        </div>
                    </div>
                </div>
                <div className="block hidden">
                    <div className="w-full">
                        <div style={{ width: '100%' }} className="mb-2 overflow-hidden rounded mx-auto hover:shadow">
                            <div className="flex cursor-pointer h-12 items-center justify-between px-4 text-dark" onClick={() => { setSer(!ser) }}>
                                <p>Services</p>
                                <FontAwesomeIcon icon={ser ? faCircleMinus : faCirclePlus} size="lg" />
                            </div>
                            <div className={`flex flex-col text-gray gap-3 close ${ser && 'open'}`}>
                                <Link to={'/technology'} onClick={handleLink}><span className='text-gray'>Technology</span></Link>
                                <Link to={'/bollywood'} onClick={handleLink}><span className='text-gray'>Bollywood</span></Link>
                                <Link to={'/hollywood'} onClick={handleLink}><span className='text-gray'>Hollywood</span></Link>
                                <Link to={'/fitness'} onClick={handleLink}><span className='text-gray'>Fitness</span></Link>
                                <Link to={'/food'} onClick={handleLink}><span className='text-gray'>Food</span></Link>
                            </div>
                        </div>
                        <div style={{ width: '100%' }} className="mb-2 overflow-hidden rounded mx-auto hover:shadow">
                            <div className="flex cursor-pointer h-12 items-center justify-between px-4 text-dark" onClick={() => { setRes(!res) }}>
                                <p>Resources</p>
                                <FontAwesomeIcon icon={res ? faCircleMinus : faCirclePlus} size="lg" />
                            </div>
                            <div className={`flex flex-col text-gray gap-3 close ${res && 'open'}`} >
                                <Link to={'/github'}><span className='text-gray'>Github</span></Link>
                                <Link to={'/help'}><span className='text-gray'>Help</span></Link>
                                <Link to={'/contact'}><span className='text-gray'>Contact</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col order-first items-center items-start order-last-900">
                    <h2 className='text-3xl'>Ready to get started?</h2>
                    <div className="flex flex-warp gap-5 flex-col-900px items-start mb-10">
                        <div className="flex items-center gap-2 ">
                            <FontAwesomeIcon icon={faMobileScreenButton} size="lg" />
                            <a href="tel:000000000" className='text-dark'>00000000000</a>
                        </div>
                        <div className="flex flex-warp gap-5 flex-col-900px items-start">
                            <div className="flex items-center gap-2 text-dark">
                                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                                <a href="mailto:support@siren.in" className='text-dark'>support@siren.in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
