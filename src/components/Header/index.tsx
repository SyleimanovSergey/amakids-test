import React from 'react';

import logo from 'assets/images/header__logo_w.png';
import imgTiger from 'assets/images/tiger.png';
import styles from './index.module.scss';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<img className={styles.logo} src={logo} alt="#" />
			<p className={styles.title}>Развитие без границ </p>
			<img className={styles.tiger} src={imgTiger} alt="#" />
		</header>
	);
};

export default Header;
