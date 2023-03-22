import style from './profile-card.module.scss';
const ProfileCard = ({ image, name, status, data }) => {
	return (
		<div className={style['profile-card']}>
			<div className={style['profile-card-top']}>
				<img
					className={style['profile-card-image']}
					src={image}
					alt='Imagen de perfil'
				/>
				<div>
					<h2 className={style['profile-card-name']}>{name}</h2>
					<span className={style['profile-card-status']}>{status}</span>
				</div>
			</div>
			<p className={style['profile-card-data']}>{data}</p>
		</div>
	);
};

export default ProfileCard;
