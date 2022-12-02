import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product({ className, link, img }) {
    const classes = cx('wrapper', {
        [className]: className,
    });

    return (
        <div className={classes}>
            <div className={cx('product')}>
                <div className={cx('browser')}>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <a href={link} target="_blank" rel="noreferrer">
                    <img src={img} alt="product img" className={cx('image')} />
                </a>
            </div>
        </div>
    );
}

export default Product;
