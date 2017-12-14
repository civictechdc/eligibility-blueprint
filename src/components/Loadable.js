import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
    Row,
    Col
} from 'reactstrap';

const Loadable = ({loading, children, style, className = '', size = '40px'}) => {

  if (!loading && children) {
    return children();
  }

  return (
    <Row>
        <Col xs={4} />
        <Col xs={4}>
            <div className="pending-spinner" />
        </Col>
        <Col xs={4} />
    </Row>
  );
};

Loadable.propTypes = {
  loading: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.func,
  style: PropTypes.object
};

export default Loadable;