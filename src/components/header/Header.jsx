import style from './header.module.scss'

const Header = () => {
    return <header className={style.header}>
        <h1 className={style['header-title']}>10,000+ of our users love our products.</h1>
        <p className={style['header-data']}>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
    </header>
}
export default Header