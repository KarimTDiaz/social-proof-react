import style from './stars.module.scss';
import { v4 } from 'uuid';
const stars = 5;
const Stars = () => {
	return (
		<div className={style.stars}>
			{[...Array(stars)].map(() => (
				<img
					className={style['stars-item']}
					src='./public/images/icon-star.svg'
					alt='Icono de estrella'
					key={v4()}
				/>
			))}
		</div>
	);
};

export default Stars;
