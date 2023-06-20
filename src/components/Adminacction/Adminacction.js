import { Tooltip } from 'antd';
import { useMemo, useState } from 'react';
import Styles from './Admin.module.scss'
import classNames from 'classnames/bind';
const buttonWidth = 70;
const btnProps = {
  style: {
    width: buttonWidth,
  },
};
const cx = classNames.bind(Styles)
const Adminacction = ({titlephara, children }) => {
    const text = <span>{titlephara}</span>;
    return (
        <div className={cx('wrraper')}>
            <Tooltip placement="top" title={text} >
                {children}
            </Tooltip>
        </div>
    );
};
export default Adminacction;