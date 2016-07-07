/* eslint-disable no-unused-vars*/
import { h } from 'preact';
/* eslint-enable no-unused-vars*/

// A simple component to render FontAwesome icons
import classNames from 'classnames';

const FontAwesome = ({name, size}) => {
  const classes = classNames('fa', `fa-${name}`, size && `fa-${size}`);
  return (
    <span className={classes} />
  );
};

export default FontAwesome;
