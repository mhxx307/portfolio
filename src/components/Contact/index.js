import emailjs from 'emailjs-com';
import classNames from 'classnames/bind';
import { useContext, useRef, useState } from 'react';
import images from '~/assets/imgs';
import styles from './Contact.module.scss';
import ThemeContext from '~/store/Context';

const cx = classNames.bind(styles);

function Contact() {
    const formRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const subjectRef = useRef();
    const [done, setDone] = useState(false);

    const { state } = useContext(ThemeContext);
    const darkMode = state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        emailjs
            .sendForm(
                'service_hmjifmb',
                'template_zobwruq',
                formRef.current,
                'AWO40v2atLHqbVutj',
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                    emailRef.current.value = '';
                    nameRef.current.value = '';
                    subjectRef.current.value = '';
                    messageRef.current.value = '';
                    nameRef.current.focus();
                },
                (error) => {
                    console.log(error.text);
                },
            );
    };

    return (
        <div className={cx('contact', 'grid')}>
            <div className={cx('background')}></div>
            <div className={cx('wrapper', 'row')}>
                <div className={cx('col', 'l-6 m-6 c-12')}>
                    <div className={cx('left')}>
                        <h1>Let's discuss your project</h1>
                        <div className={cx('info')}>
                            <div className={cx('info-item')}>
                                <img src={images.phone} alt="phone icon" />
                                <span>+84788778579</span>
                            </div>
                            <div className={cx('info-item')}>
                                <img src={images.email} alt="phone icon" />
                                <span>minhquan.lavo@gmail.com</span>
                            </div>
                            <div className={cx('info-item')}>
                                <img src={images.address} alt="phone icon" />
                                <span>Go Vap district</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('col', 'l-6 m-6 c-12')}>
                    <div className={cx('right')}>
                        <p>
                            <b>What's your story?</b> Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Eius vero tempora
                            obcaecati possimus odio minima ?
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input
                                style={{
                                    backgroundColor: darkMode && '#333',
                                    color: darkMode && '#fff',
                                }}
                                ref={nameRef}
                                type="text"
                                placeholder="Name"
                                name="user_name"
                            />
                            <input
                                style={{
                                    backgroundColor: darkMode && '#333',
                                    color: darkMode && '#fff',
                                }}
                                ref={subjectRef}
                                type="text"
                                placeholder="Subject"
                                name="user_subject"
                            />
                            <input
                                style={{
                                    backgroundColor: darkMode && '#333',
                                    color: darkMode && '#fff',
                                }}
                                ref={emailRef}
                                type="email"
                                placeholder="Email"
                                name="user_email"
                            />
                            <textarea
                                style={{
                                    backgroundColor: darkMode && '#333',
                                    color: darkMode && '#fff',
                                }}
                                ref={messageRef}
                                row="5"
                                placeholder="Message"
                                name="message"
                            />
                            <button type="submit">Send</button>
                            {done && <span>Thanks, I'll reply ASAP</span>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
