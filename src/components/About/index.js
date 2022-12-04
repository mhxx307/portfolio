import classNames from 'classnames/bind';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('grid', 'wrapper')}>
            <div className={cx('row')}>
                <div className={cx('col', 'l-6 m-6 c-12')}>
                    <div className={cx('left')}>
                        {/* card */}
                        <div className={cx('card', 'bg')}></div>
                        <div className={cx('card')}>
                            <img
                                src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt="card img"
                            />
                        </div>
                        {/* card */}
                    </div>
                </div>
                <div className={cx('col', 'l-6 m-6 c-12')}>
                    <div className={cx('right')}>
                        <h1>About Me</h1>
                        <p className={cx('sub')}>
                            I am a 4th year student at Industrial University of
                            Ho Chi Minh City
                        </p>
                        <p className={cx('description')}>
                            Majoring in software engineering. I have good logic
                            in programming. Capable of working independently and
                            in groups. I can also read and understand the
                            required documents in English and can work from 3
                            days to 5 days a week.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
