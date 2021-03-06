import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class CardHeaderIcon extends React.PureComponent {
  static displayName = 'Card.Header.Icon'

  static propTypes = {
    className: PropTypes.string,
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }

  static defaultProps = {
    className: '',
    renderAs: 'div',
  }

  render() {
    const {
      className,
      renderAs,
      ...props
    } = this.props;
    const Element = renderAs;
    return (
      <Element {...props} className={classnames('card-header-icon', className)} />
    );
  }
}
