import React, { useEffect, useState } from "react";

import rupor from "../../image/PNG/castingCalls/bigRupor.png"
import girl from "../../image/PNG/castingCalls/girlBig.png"
import man from "../../image/PNG/castingCalls/manBig.png"

import gps from "../../image/PNG/castingCalls/icon/agesBig.png" 

export const NavigationBlock = (props) => {
	const [select, setSelect] = useState({
		castingName: [
			`Casting Calls and auditions`,
			'North American agencies',
			'European Agencies',
			'Kids Agencies',
			'Acting course'
		],
		castingPicture: [
			rupor,
			girl,
			man
		],
		selectedCasting: '',
		classActive: 'active-link',
		selectedTarget: 'Casting Calls and auditions'
	})


	const changeLink = (e) => {
		const links = document.querySelectorAll('.selectes__link')
		links.forEach((link) => {
			if (!link.classList.contains('active-link')) { return }
			link.classList.toggle('active-link')
		})
		e.currentTarget.classList.toggle('active-link')
		console.log(e.currentTarget.innerText.split('\n')[0])
		returnSelectedLink(e.currentTarget.innerText.split('\n')[0])
		
	}

	const returnSelectedLink = (selectedScreen) => {
		setSelect({...select, selectedTarget: selectedScreen})
	}
		
		
	
	useEffect(() => {
		// returnSelectedLink()
	}, [])
	
	return <>
	{/* ВЕРХНИЙ БЛОК НАВИГАЦИИ */}
		<div className="navigation-block">
			<div className="navigation-block__wrapper">
				{/* ВЫБОР ССЫЛКИ */}
				<ul className="navigation-block__selectes selectes">
					<li className="selectes__link" onClick={(e) => { changeLink(e) }}>
						<span className="select__link-select">Casting Calls and auditions</span>
						<span className="select__link-select_arrow">>></span>
					</li>
					<li className="selectes__link" onClick={(e) => { changeLink(e) }}>
						<span className="select__link-select">North American agencies</span>
						<span className="select__link-select_arrow">>></span>
					</li>
					<li className="selectes__link" onClick={(e) => { changeLink(e) }}>
						<span className="select__link-select">European Agencies</span>
						<span className="select__link-select_arrow">>></span>
					</li>
					<li className="selectes__link" onClick={(e) => { changeLink(e) }}>
						<span className="select__link-select">Kids Agencies</span>
						<span className="select__link-select_arrow">>></span>
					</li>
					<li className="selectes__link" onClick={(e) => { changeLink(e) }}>
						<span className="select__link-select">Acting course</span>
						<span className="select__link-select_arrow">>></span>
					</li>
				</ul>
				<div className="navigation-block__title">
					{/* ======================================================================== */}
					{/* НАЗВАНИЕ ССЫЛКИ */}
					<div className="navigation-block__title-wrapper">
						<h2 className="navigation-block__title-text">
							{select.selectedTarget === 'Casting Calls and auditions' ? 'Casting\nCalls &\nAuditions' : select.selectedTarget}
						</h2>
					</div>
					{/* КАРТИНКА ССЫЛКИ */}
					<div className="navigation-block__title-img">
						<img
								className="navigation-block__img" 
								src={select.castingPicture[select.castingName.findIndex((name) => { return name === select.selectedTarget})]} 
								alt="ling-img" />
					</div>
				</div>
			</div>
		</div>

		{/* РЕЗУЛЬТАТ ВЫБРАННОЙ НАВИГАЦИИ == ИЛИ НЕ ВЫБРАННОЙ */}
		
		{/* ЕСЛИ ВЫБРАННАЯ ССЫЛКА СООТВЕТСВУЕТ НАЗВАНИЮ ТАЙТЛА = БЛОК ОТОБРАЖАЕТСЯ */}
		
		<div className="navigation-result">
			{ select.castingName[0] === select.selectedTarget ? <>
				<div className="navigation-result__wrapper">
				{/* ТАКИХ НАДО ДВА 2222222222222222222222222222222222222222 ==================== */}
				{/* БЭКГРАУНД */}
					<div className="navigation-result__content-background"></div>
					<div className="navigation-result__content-background-block" >
						{/* ПЛАВАЮЩИЙ В ВОЗДУХЕ ПОПАП */}
						<div className="navigation-result__content-popup">
							<div className="navigation-result__content-title">
								<h3 className="navigation-result__content-title-text">Casting Contestants to Go To A Tropical Island Game Show</h3>
							</div>
							<div className="navigation-result__content-description">
								<p className="navigation-result__content-description-text">The people that brought to “The Circle” 
								are now casting for a brand new game show that is being produced to air on a major streaming
								network. The game show will take place on a tropical island and the winner will get 
								a big cash prize. <br/><br/>looking for contestants for a brand-new reality gameshow for a major
									streaming network. The chosen contestants will be transported to a beautiful tropical 
									location to live together and face a series of challenges and dilemmas as they compete
									for a huge cash prize.</p>
							</div>
							<div className="navigation-result__content-options">
								<div className="navigation-result__content-options-item">
									<div className="navigation-result__content-options-icon">
									</div>
									<div className="navigation-result__content-options-text">
										<h3 className="navigation-result__content-options-title">COMPENSATION:</h3>
										<span className="navigation-result__content-options-desc">Cash Prize</span>
									</div>
								</div>
								<div className="navigation-result__content-options-item">
									<div className="navigation-result__content-options-icon">
									</div>
									<div className="navigation-result__content-options-text">
										<h3 className="navigation-result__content-options-title">HOW TO APPLY:</h3>
										<span className="navigation-result__content-options-desc">learn more and apply at <br/><a href="#">jetsetcasting.tv</a></span>
									</div>
								</div>
							</div>
						</div>
					</div>
			
					{/* ТАКИХ НАДО ДВА 2222222222222222222222222222222222222222 ==================== */}
					<div className="navigation-result__content-background"></div>
					<div className="navigation-result__content-background-block">
						{/* ПЛАВАЮЩИЙ В ВОЗДУХЕ ПОПАП */}
						<div className="navigation-result__content-popup">
							<div className="navigation-result__content-title">
								<h3 className="navigation-result__content-title-text">Casting Call in Dallas Texas for Horror Film</h3>
							</div>
							<div className="navigation-result__content-description">
								<p className="navigation-result__content-description-text">The people that brought to “The Circle” are now casting 
																																						for a brand new game show that is being produced to air on a major streaming network.
																																						The game show will take place on a tropical island and the winner will get a big
																																						cash prize.<br/><br/> looking for contestants for a brand-new reality gameshow for a major
																																						streaming network. The chosen contestants will be transported to a beautiful
																																						tropical location to live together and face a series of challenges and dilemmas
																																						as they compete for a huge cash prize.
								</p>
							</div>
							<div className="navigation-result__content-options">
								<div className="navigation-result__content-options-item">
									<div className="navigation-result__content-options-icon">
									</div>
									<div className="navigation-result__content-options-text">
										<h3 className="navigation-result__content-options-title">COMPENSATION:</h3>
										<span className="navigation-result__content-options-desc">Cash Prize</span>
									</div>
								</div>
								<div className="navigation-result__content-options-item">
									<div className="navigation-result__content-options-icon">
									</div>
									<div className="navigation-result__content-options-text">
										<h3 className="navigation-result__content-options-title">HOW TO APPLY:</h3>
										<span className="navigation-result__content-options-desc">learn more and apply at <br/><a href="#">jetsetcasting.tv</a></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</> : ''
			} 
		
		{ select.castingName[1] === select.selectedTarget && 
			<div className="navigation-result__wrapper">
				{/* ТАКИХ НАДО ДВА 2222222222222222222222222222222222222222 ==================== */}
				{/* БЭКГРАУНД */}
				{/* <div className="navigation-result__content-background"></div> */}
				<div className={ select.castingName[1] === select.selectedTarget ? 'navigation-result__content-background-block_active navigation-result__content-background-block' : 'navigation-result__content-background-block' }>
					{/* ПЛАВАЮЩИЙ В ВОЗДУХЕ ПОПАП */}
					<div className="navigation-result__content-popup">
						<div className="navigation-result__content-title">
							<h3 className="navigation-result__content-title-text">The I Group Model And Talent Management</h3>
						</div>
						<div className="navigation-result__content-description navigation-result__about-talent about-talent">
							<div className="about-talent__wrapper">
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">WORKS WITH:</span>
										<p className="about-talent__info-desc-text">
											
											Magicians, Fashion & Runway Models, Martial Artists & Stunt Actors,
											Sports Personalities, Voiceover Artists, Commercial Actors, Film & 
											TV Actors, Print Models, Comedians, Broadcast Journalists & Newscasters, 
											Hosts & Spokespersons
										</p>
									</div>
								</div>
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">LOCATION:</span>
										<p className="about-talent__info-desc-text">
											Austin, TX, USA
										</p>
									</div>
								</div>
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">HOW TO APPLY:</span>
										<p className="about-talent__info-desc-text">
											Headshot/resume by mail or email, email preferred. Interviews by appointment only. No calls. No drop-offs.
										</p>
									</div>
								</div>
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">AGES:</span>
										<p className="about-talent__info-desc-text">
											0+ (Kids & Adults)
										</p>
									</div>
								</div>
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">CONTACTS:</span>
										<p className="about-talent__info-desc-text">
												igroup@theigroup.com <br/>
												248 552 8842
										</p>
									</div>
								</div>
					
							</div>
						</div>
						
						<div className="navigation-result__content-link-btn">
							<button className="navigation-result__button button__visit-site">Visit website</button>
							<span className="button__button-for-more-deteils">for more details</span>
						</div>
					</div>
				</div>
				{/* ТАКИХ НАДО ДВА 2222222222222222222222222222222222222222 ==================== */}
				{/* <div className="navigation-result__content-background"></div> */}
				<div className={ select.castingName[1] === select.selectedTarget ? 'navigation-result__content-background-block_active navigation-result__content-background-block' : 'navigation-result__content-background-block' }>
					{/* ПЛАВАЮЩИЙ В ВОЗДУХЕ ПОПАП */}
					<div className="navigation-result__content-popup">
						<div className="navigation-result__content-title">
							<h3 className="navigation-result__content-title-text">The I Group Model And Talent Management</h3>
						</div>
						<div className="navigation-result__content-description navigation-result__about-talent about-talent">
							<div className="about-talent__wrapper">
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">WORKS WITH:</span>
										<p className="about-talent__info-desc-text">
											
											Magicians, Fashion & Runway Models, Martial Artists & Stunt Actors,
											Sports Personalities, Voiceover Artists, Commercial Actors, Film & 
											TV Actors, Print Models, Comedians, Broadcast Journalists & Newscasters, 
											Hosts & Spokespersons
										</p>
									</div>
								</div>
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">LOCATION:</span>
										<p className="about-talent__info-desc-text">
											Austin, TX, USA
										</p>
									</div>
								</div>
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">HOW TO APPLY:</span>
										<p className="about-talent__info-desc-text">
											Headshot/resume by mail or email, email preferred. Interviews by appointment only. No calls. No drop-offs.
										</p>
									</div>
								</div>
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">AGES:</span>
										<p className="about-talent__info-desc-text">
											0+ (Kids & Adults)
										</p>
									</div>
								</div>
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">CONTACTS:</span>
										<p className="about-talent__info-desc-text">
												igroup@theigroup.com <br/>
												248 552 8842
										</p>
									</div>
								</div>
					
							</div>
						</div>
						<div className="navigation-result__content-link-btn">
							<button className="navigation-result__button button__visit-site">Visit website</button>
							<span className="button__button-for-more-deteils">for more details</span>
						</div>
					</div>
				</div>
			</div>
		}
		{ select.castingName[2] === select.selectedTarget && 
			<div className="navigation-result__wrapper">
				{/* ТАКИХ НАДО ДВА 2222222222222222222222222222222222222222 ==================== */}
				{/* БЭКГРАУНД */}
				{/* <div className="navigation-result__content-background"></div> */}
				<div className={ select.castingName[2] === select.selectedTarget ? 'navigation-result__content-background-block_active navigation-result__content-background-block' : 'navigation-result__content-background-block' }>
					{/* ПЛАВАЮЩИЙ В ВОЗДУХЕ ПОПАП */}
					<div className="navigation-result__content-popup">
						<div className="navigation-result__content-title">
							<h3 className="navigation-result__content-title-text">The I Group Model And Talent Management</h3>
						</div>
						<div className="navigation-result__content-description navigation-result__about-talent about-talent">
							<div className="about-talent__wrapper">
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">WORKS WITH:</span>
										<p className="about-talent__info-desc-text">
											
											Magicians, Fashion & Runway Models, Martial Artists & Stunt Actors,
											Sports Personalities, Voiceover Artists, Commercial Actors, Film & 
											TV Actors, Print Models, Comedians, Broadcast Journalists & Newscasters, 
											Hosts & Spokespersons
										</p>
									</div>
								</div>
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">LOCATION:</span>
										<p className="about-talent__info-desc-text">
											Austin, TX, USA
										</p>
									</div>
								</div>
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">HOW TO APPLY:</span>
										<p className="about-talent__info-desc-text">
											Headshot/resume by mail or email, email preferred. Interviews by appointment only. No calls. No drop-offs.
										</p>
									</div>
								</div>
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">AGES:</span>
										<p className="about-talent__info-desc-text">
											0+ (Kids & Adults)
										</p>
									</div>
								</div>
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">CONTACTS:</span>
										<p className="about-talent__info-desc-text">
												igroup@theigroup.com <br/>
												248 552 8842
										</p>
									</div>
								</div>
					
							</div>
						</div>
						<div className="navigation-result__content-link-btn">
							<button className="navigation-result__button button__visit-site">Visit website</button>
							<span className="button__button-for-more-deteils">for more details</span>
						</div>
					</div>
				
				</div>
				{/* ТАКИХ НАДО ДВА 2222222222222222222222222222222222222222 ==================== */}
				{/* <div className="navigation-result__content-background"></div> */}
				<div className={ select.castingName[2] === select.selectedTarget ? 'navigation-result__content-background-block_active navigation-result__content-background-block' : 'navigation-result__content-background-block' }>
					{/* ПЛАВАЮЩИЙ В ВОЗДУХЕ ПОПАП */}
					<div className="navigation-result__content-popup">
						<div className="navigation-result__content-title">
							<h3 className="navigation-result__content-title-text">The I Group Model And Talent Management</h3>
						</div>
						<div className="navigation-result__content-description navigation-result__about-talent about-talent">
							<div className="about-talent__wrapper">
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">WORKS WITH:</span>
										<p className="about-talent__info-desc-text">
											
											Magicians, Fashion & Runway Models, Martial Artists & Stunt Actors,
											Sports Personalities, Voiceover Artists, Commercial Actors, Film & 
											TV Actors, Print Models, Comedians, Broadcast Journalists & Newscasters, 
											Hosts & Spokespersons
										</p>
									</div>
								</div>
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">LOCATION:</span>
										<p className="about-talent__info-desc-text">
											Austin, TX, USA
										</p>
									</div>
								</div>
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">HOW TO APPLY:</span>
										<p className="about-talent__info-desc-text">
											Headshot/resume by mail or email, email preferred. Interviews by appointment only. No calls. No drop-offs.
										</p>
									</div>
								</div>
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">AGES:</span>
										<p className="about-talent__info-desc-text">
											0+ (Kids & Adults)
										</p>
									</div>
								</div>
								<div className="about-talent__info">
									<div className="about-talent__info-icon">
										<img src={gps} alt="tal" className="about-talent__title-icon"/>
									</div>
									<div className="about-talent__info-desc">
										<span className="about-talent__info-desc-title">CONTACTS:</span>
										<p className="about-talent__info-desc-text">
												igroup@theigroup.com <br/>
												248 552 8842
										</p>
									</div>
								</div>
					
							</div>
						</div>
						<div className="navigation-result__content-link-btn">
							<button className="navigation-result__button button__visit-site">Visit website</button>
							<span className="button__button-for-more-deteils">for more details</span>
						</div>
					</div>
				</div>
			</div>
		}
		</div>
	</>
}

export default NavigationBlock;