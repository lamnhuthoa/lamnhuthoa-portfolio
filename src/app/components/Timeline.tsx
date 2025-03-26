"use client";

import { Experience } from "../sections/Experience";
import TimelineItem from "./TimelineItem";
import styles from "../styles/Timeline.module.scss";
import { useState } from "react";

interface TimelineProps {
    experiences: Experience[];
}

const Timeline = (props: TimelineProps) => {
    const { experiences } = props;
    const [showAll, setShowAll] = useState(false);

    return (
        <div className={styles.timeline}>
            {experiences.map((exp, index) => (
                <TimelineItem key={index} {...exp} showAll={showAll} setShowAll={setShowAll} />
            ))}

        </div>
    );
};

export default Timeline;
