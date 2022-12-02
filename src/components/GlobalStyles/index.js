import PropTypes from 'prop-types';
import './GlobalStyles.scss';
import '~/assets/responsive/grid.scss';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
