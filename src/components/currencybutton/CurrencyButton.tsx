import { FC } from 'react';
import styles from './CurrencyButton.module.scss';

type CurrencyButtonProps = {
    title: string
    selected: boolean
    onClick: () => void
}

const CurrencyButton:FC<CurrencyButtonProps> = ({ title, selected, onClick }) => {
  const a = 5;
  return (
    <button className={`${styles.button} ${selected ? styles.currencySelected : ''}`} onClick={onClick}>
      <div className={`${styles.close} ${selected ? styles.checkBox : ''}`}>X</div>
      {title}
    </button>
  );
};

export default CurrencyButton;
