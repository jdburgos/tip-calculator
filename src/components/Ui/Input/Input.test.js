/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import Input from './Input';
import styles from '../../BillForm/BillForm.module.scss';

test('should renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Input
      className={styles['bill-input-control']}
      input={{
        id: 'bill-input',
        type: 'number',
      }}
      label="Bill"
      icon="currency"
      error={false}
      onChange={() => {}}
    />,
    div,
  );
});
