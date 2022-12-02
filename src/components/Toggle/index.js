import classNames from 'classnames/bind';
import { useContext } from 'react';
import images from '~/assets/imgs';
import ThemeContext from '~/store/Context';
import styles from './Toggle.module.scss';

const cx = classNames.bind(styles);

function Toggle() {
    const { state, dispatch } = useContext(ThemeContext);
    const darkMode = state.darkMode;

    const handleToggle = () => {
        dispatch({ type: 'TOGGLE' });
    };

    return (
        <div className={cx('toggle')}>
            <img src={images.sun} alt="sun" />
            <img src={images.moon} alt="moon" />
            <button
                onClick={handleToggle}
                style={{ left: darkMode ? 0 : 25 }}
            ></button>
        </div>
    );
}

export default Toggle;
