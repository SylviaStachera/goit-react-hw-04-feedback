import css from './Section.module.css';
const { Component } = require('react');

class Section extends Component {
  static defaultProps = {
    title: '',
  };

  render() {
    const { title, children } = this.props;
    return (
      <div className={css.wrapper}>
        <h2 className={css.header}>{title}</h2>
        {children}
      </div>
    );
  }
}

export default Section;
