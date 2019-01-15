import * as React from 'react';
import classNames from 'classnames';
import styles from './progress-bar.styles';

export const ProgressBar = ({ current, max, children }) => (
  <div
    className={classNames(styles.background, {
      [styles.loaderComplete]: current >= max
    })}
  >
    <div
      className={classNames(styles.loader, {
        [styles.loaderComplete]: current >= max
      })}
      style={{ width: `${((current >= max ? max : current) / max) * 100}%` }}
    >
      <span
        className={classNames(styles.loaderMessage, {
          [styles.loaderMessageVisible]: current >= max
        })}
      >
        {children}
      </span>
    </div>
  </div>
);
