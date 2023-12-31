import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Table, Button } from 'reactstrap';

import s from './TableContainer.module.scss';

const states = {
  sent: 'primary',
  pending: 'success',
  declined: 'danger',
};

class TableContainer extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        // product: PropTypes.string,
        // price: PropTypes.string,
        createdDate: PropTypes.string,
        city: PropTypes.string,
        status: PropTypes.string,
      }),
    ).isRequired,
  }

  render() {
    const { data } = this.props;

    const keys = Object.keys(data[0]).map(i => i.toUpperCase());
    keys.shift(); // delete "id" key
    return (
      <Table className={cx('mb-0', s.table)} borderless responsive>
        <thead>
          <tr className="text-white">
            {keys.map((key, index) => (
              index === 0
              ? <th key={key} scope="col" className={"p-3"}><span className="ps-2">{key}</span></th>
              : <th key={key} scope="col" className={"p-3"}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            data.map(({ name, email, state, product, price, createdDate, city, status }) => (
              <tr key={name}>
                <td className="p-3">{state}</td>
                <td>{name}</td>
                <td>{email}</td>
                {/* <td>{price}</td> */}
                <td>{createdDate}</td>
                {/* <td>{city}</td> */}
                <td>
                  <Button
                    color={states[status.toLowerCase()]}
                    size="xs"
                    className="px-2"
                  >
                    {status}
                  </Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    );
  }
}

export default TableContainer;
