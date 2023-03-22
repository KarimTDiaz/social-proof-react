import { CARDS_INFO } from '../../constants/cards-info';
import ProfileCard from '../profile-card/ProfileCard';
import style from './profile-cards.module.scss';

import { v4 } from 'uuid';

const ProfileCardsContainer = () => {
	return (
		<div className={style['profile-cards']}>
			{CARDS_INFO.map(card => (
				<ProfileCard {...card} key={v4}/>
			))}
		</div>
	);
};

export default ProfileCardsContainer;
