import { FC } from 'react';
import styles from './SelectedCurrencyBox.module.scss';

type SelectedCurrencyBoxProps = {
  title: string
  onClick: () => void
}

const SelectedCurrencyBox:FC<SelectedCurrencyBoxProps> = ({ title, onClick }) => {
  const a = 5;

  return (
    <div className={`${styles.selectedCurrency}`}>
      {title}
      <button className={`${styles.closeButton}`} onClick={onClick}>X</button>
    </div>
  );
};

export default SelectedCurrencyBox;
