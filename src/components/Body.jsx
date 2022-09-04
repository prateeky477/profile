import React from 'react'
import ReactDOM from 'react-dom/client'
import photo from '../assets/profile.png'
import photo1 from '../assets/F.png'
import photo2 from '../assets/G.png'
import photo3 from '../assets/I.png'
import photo4 from '../assets/T.png'

export default function Body() {
    return (
        <div className='body-container'>
            <img src={photo} alt='profile-img' width={317} className='img' />
            <div className='main-body'>
                <h2>Prateek Yadav</h2>
                <h3>frontend developer</h3>
                <h5>website</h5>
                <div className='social'>
                    <button className='email'>Email</button>
                    <button className='linkedin'>LinkedIn</button>
                </div>
                <h4 className='about'>About</h4>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h4 className='interest'>Interests</h4>
                <p>Cricket lover. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                <nav className='nav-container'>
                    <img src={photo4} alt='twitter' />
                    <img src={photo1} alt='facebook' />
                    <img src={photo3} alt='instagram' />
                    <img src={photo2} alt='github' />
                </nav>
            </div>
        </div>
    )
}