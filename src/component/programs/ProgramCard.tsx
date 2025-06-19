import Image from 'next/image';
import { Program } from '../../data/programs';
import styles from './programs.module.css';

interface ProgramCardProps {
  program: Program;
}

const ProgramCard = ({ program }: ProgramCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={program.image}
          alt={program.title}
          fill
          className={styles.image}
        />
        <div className={styles.category}>{program.category}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.icon}>{program.icon}</div>
        <h3 className={styles.title}>{program.title}</h3>
        <p className={styles.description}>{program.description}</p>
        <div className={styles.impact}>
          <span className={styles.impactText}>{program.impact}</span>
          <span className={styles.beneficiaries}>
            {program.beneficiaries.toLocaleString()}+ lives impacted
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;