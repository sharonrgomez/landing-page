import React from 'react'
import mainContent from './assets/phone-laptop.png'
import './MainContent.scss'

const MainContent = () => {
	return (
		<div className='main-content'>
			<div className="main-content__text">
				<div className='body'>
					<h1>Beautiful Landing Page</h1>
					<h4>We built this template to help you create modern and beautiful marketing page.</h4>
				</div>
				<div className="buttons">
					<button className='main-content__button filled'>Get it now</button>
					<button className='main-content__button outlined'>Features</button>
				</div>
			</div>
			<img className='main-content__image' src={mainContent} alt='react logo' />
		</div>
	)
}

export default MainContent