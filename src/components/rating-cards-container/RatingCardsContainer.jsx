import RatingCard from '../rating-card/RatingCard';
import style from './rating-cards-container.module.scss';
import { v4 } from 'uuid';

const RatingCardsContainer = ({ info }) => {
	return (
		<div className={style['rating-container']}>
			{info.map((data, index) => (
                <RatingCard key={v4()} stars={[1,2,3,4,5]} data={data} class={index}/>
				
			))}
		</div>
	);
};

export default RatingCardsContainer;
