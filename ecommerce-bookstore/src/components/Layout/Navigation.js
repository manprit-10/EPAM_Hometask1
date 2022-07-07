import styles from './css/Navigation.module.css'
import { Link } from 'react-router-dom';
export const Nav = function(){
    return(
        <nav className={styles['nav-items']}>
            
                <Link to="/" className={styles['nav-item']}>Home &nbsp; &nbsp;| </Link>
                <Link to="/orders" className={styles['nav-item']}>&nbsp;My Orders&nbsp; &nbsp;| </Link>
                <Link to="/cart" className={styles['nav-item']}>&nbsp;Cart</Link>
        </nav>
    );
}
