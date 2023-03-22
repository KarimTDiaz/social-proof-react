import Header from '../header/Header';
import RatingCardsContainer from '../rating-cards-container/RatingCardsContainer';
import ProfileCardsContainer from '../profile-cards-container/ProfileCardsContainer';
import style from './main-container.module.scss';

const MainContainer = () => {
	return (
		<>
			<div className={style['main-container-top']}>
				<Header/>
				<RatingCardsContainer 
					info={['Reviews', 'Report Guru', 'BestTech']}
				></RatingCardsContainer>
			</div>
			<ProfileCardsContainer/>
		</>
	);
};

export default MainContainer;
