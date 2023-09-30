import styles from './styles.module.css'

const Bar = ({ value}) => {
  return (
    <div>
      <div className={styles.max}>
        <div
          className={styles.value}
          style={{ width: `${(value)}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Bar;
