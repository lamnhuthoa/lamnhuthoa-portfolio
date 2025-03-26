import { Experience } from "../sections/Experience";
import styles from "../styles/TimelineItem.module.scss";

interface TimelineItemProps extends Experience {
  showAll: boolean;
  setShowAll: (val: boolean) => void;
}

const TimelineItem = (props: TimelineItemProps) => {
  const MAXIMUM_DESCRIPTIONS_SHOW = 4;
  const { year, role, company, description, showAll, setShowAll } = props;
  const visibleDescriptions = showAll ? description : description.slice(0, MAXIMUM_DESCRIPTIONS_SHOW);

  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineDot}></div>
      <div className={styles.content}>
        <div className="flex flex-row justify-between items-center">
          <h4 className={styles.company}>{company}</h4>
          <span className={styles.year}>{year}</span>
        </div>
        <h3 className={styles.role}>{role}</h3>
        <ul className={styles.description}>
          {visibleDescriptions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {description.length > MAXIMUM_DESCRIPTIONS_SHOW && (
          <div className={`${styles.showMoreBtnContainer}`}>
            <button
              className={`${styles.showMoreBtn}`}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
