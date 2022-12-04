import classNames from 'classnames/bind';
import Product from '~/components/Product';
import styles from './ProductList.module.scss';
import products from '~/data/products';

const cx = classNames.bind(styles);

function ProductList() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <div className={cx('row')}>
                    <h1 className={cx('col', 'l-12 m-12 c-12')}>
                        Create by <span>La Vo Minh Quan</span>
                    </h1>
                </div>
                <div className={cx('row')}>
                    <p className={cx('col', 'l-12 m-12 c-12')}>
                        The project below was created by me during my school
                        studies and self-study.
                    </p>
                </div>
            </div>

            <div className={cx('product-list')}>
                <div className={cx('row')}>
                    {products.map((product) => {
                        return (
                            <Product
                                className={cx('col', 'l-4 m-6 c-12')}
                                key={product.id}
                                link={product.link}
                                img={product.img}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProductList;
