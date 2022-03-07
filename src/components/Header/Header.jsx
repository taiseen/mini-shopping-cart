import './Header.scss'

const Header = ({totalItems, setToggle}) => {
	
	return (
		<header className="header">

			<a href="/#" className="logo" onClick={() => setToggle(true)} >
				<i className="fas fa-shopping-basket"></i>
				groco
			</a>

			<a href="/#" className="cart" onClick={() => setToggle(false)}>
				<i className="fas fa-shopping-cart"></i>
				<span>{totalItems > 0 ? totalItems : '0'}</span>
			</a>
		</header>
	)
}

export default Header;