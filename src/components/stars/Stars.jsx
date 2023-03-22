import style from './stars.module.scss';
import { v4 } from 'uuid';

const Stars = ({ stars }) => {
	return (
		<div className={style.stars}>
			{stars.map(() => (
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
