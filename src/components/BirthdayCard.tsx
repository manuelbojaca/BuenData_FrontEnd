import { Button } from '@mantine/core';
import styles from '@styles/Home.module.css';

interface Props {
  name: string;
  birthday: string;
}

const BirthdayCard: React.FC<Props> = ({ name, birthday }) => {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p>{birthday}</p>
    </div>
  );
};

export default BirthdayCard;
