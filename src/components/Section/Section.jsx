import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title = '', children }) => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.header}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
