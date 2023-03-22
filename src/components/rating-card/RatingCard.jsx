import style from './rating-card.module.scss';
import Stars from '../stars/Stars';

const RatingCard = ({stars,data, index}) => {
	return (
		<div className={style['rating-card'] }>
			<Stars stars={stars}/>
			<p>Rated 5 Stars in {data}</p>
		</div>
	);
};

export default RatingCard