import styles from "./card.module.css";

export default function ExperienceCard({
    imgSrc,
    imgAlt,
    companyName,
    positionTitle,
    positionDate,
    experienceDesc
}: {
    imgSrc: string;
    imgAlt: string;
    companyName: string;
    positionTitle: string;
    positionDate: string;
    experienceDesc: any;
}) {
    return (
        <div className={styles.experienceCard}>
            <div className={styles.experienceCardLogo}>
                <img src={imgSrc} alt={imgAlt} width={30} height={30} />
            </div>
            <div className={styles.experienceCardDescription}>
                <div className={styles.experienceCardTitleParent}>
                    <div className={styles.experienceCardTitle}>
                        {/* Title */}
                        <p id={styles.experienceCompany}>{companyName}</p>
                        <p id={styles.experienceTitle}>{positionTitle}</p>
                    </div>
                    <div className={styles.experienceCardDate}>
                        {/* Date */}
                        <p id={styles.experienceDate}>{positionDate}</p>
                    </div>
                </div>
                <div id={styles.experienceDescription}>
                    { experienceDesc }
                </div>
            </div>
        </div>
    );
}