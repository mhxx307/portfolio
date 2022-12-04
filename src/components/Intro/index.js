import classNames from 'classnames/bind';
import { useContext } from 'react';
import images from '~/assets/imgs';
import ThemeContext from '~/store/Context';
import styles from './Intro.module.scss';

const cx = classNames.bind(styles);

function Intro() {
    const jobs = [
        'Frontend Developer',
        'Backend Developer',
        'Html/Css javascript',
        'Node.js',
        'ReactJS',
    ];
    const { state } = useContext(ThemeContext);
    const darkMode = state.darkMode;
    return (
        <div className={cx('wrapper', 'grid')}>
            <div className={cx('row')}>
                {/* left content */}
                <div className={cx('left', 'col', 'l-6 m-12 c-12')}>
                    {/* info */}
                    <div className={cx('info')}>
                        <h2>Hello, I'm </h2>
                        <h1>La Vo Minh Quan</h1>

                        {/* job */}
                        <div className={cx('job')}>
                            <ul className={cx('job-list')}>
                                {jobs.map((jobName, index) => (
                                    <li key={index}>
                                        <span>{jobName}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* end job */}

                        {/* description */}
                        <p className={cx('description')}>
                            Apart from being a web developer, I enjoy most of my
                            time to workout. In my spare time, I watch some
                            movies and listen to music, and I spend a lot of my
                            free time to learn new technologies..
                        </p>
                    </div>
                    {/* end info */}

                    {/* svg */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="OUTLINE"
                        viewBox="0 0 64 64"
                        className={cx('mouse-icon')}
                        width="15"
                        height="15"
                        style={{ fill: darkMode ? '#fff' : '#000' }}
                    >
                        <g id="_20-_Mouse" data-name="20- Mouse">
                            <path d="M23,10.1843V7a1,1,0,0,0-2,0v3.1843A2.995,2.995,0,0,0,19,13v4a2.995,2.995,0,0,0,2,2.8157V23a1,1,0,0,0,2,0V19.8157A2.995,2.995,0,0,0,25,17V13A2.995,2.995,0,0,0,23,10.1843ZM23,17a1,1,0,0,1-2,0V13a1,1,0,0,1,2,0ZM28.3979,2H15.6021A12.6163,12.6163,0,0,0,3,14.6016V43a19,19,0,0,0,38,0V14.6016A12.6163,12.6163,0,0,0,28.3979,2ZM39,43A17,17,0,0,1,5,43V28H39Zm0-17H5V14.6016A10.6138,10.6138,0,0,1,15.6021,4H28.3979A10.6138,10.6138,0,0,1,39,14.6016ZM8.9282,47.1191a1,1,0,0,1,1.877-.6914,13.1475,13.1475,0,0,0,7.3213,7.5938,1,1,0,1,1-.76,1.85A15.1519,15.1519,0,0,1,8.9282,47.1191ZM51.83,12.42a6.2666,6.2666,0,0,1,1.7929,6.6729,1,1,0,1,1-1.8906-.6524,4.3153,4.3153,0,0,0-1.2851-4.5752,4.3164,4.3164,0,0,0-4.6275-1.082,1,1,0,1,1-.7353-1.8594A6.2627,6.2627,0,0,1,51.83,12.42Zm2.7651-2.8906a9.6792,9.6792,0,0,1,2.5777,10.1924,1,1,0,0,1-1.8907-.6524,7.6957,7.6957,0,0,0-2.0693-8.0947,7.7022,7.7022,0,0,0-8.1782-1.7109,1,1,0,1,1-.7354-1.8594A9.6837,9.6837,0,0,1,54.5952,9.5293Zm6.8511,9.9853a1.0005,1.0005,0,0,1-.9761.7872.9506.9506,0,0,1-.2143-.0235.9992.9992,0,0,1-.7637-1.1894A11.2733,11.2733,0,0,0,55.978,8.085,11.2724,11.2724,0,0,0,44.83,5.06a1,1,0,1,1-.5117-1.9336A13.19,13.19,0,0,1,57.3608,6.64,13.1878,13.1878,0,0,1,61.4463,19.5146ZM44.832,14.9258a3,3,0,0,0,4.3355,4.1484h.0005a3,3,0,1,0-4.336-4.1484Zm2.8907,2.7656a1,1,0,1,1-.0313-1.4141A1.0009,1.0009,0,0,1,47.7227,17.6914Z"></path>
                        </g>
                    </svg>
                </div>
                {/* end left content */}
                <div className={cx('right', 'col', 'l-6 m-0 c-0')}>
                    <div className={cx('background')}></div>
                    <img src={images.me} alt="personal img" />
                </div>
            </div>
        </div>
    );
}

export default Intro;
