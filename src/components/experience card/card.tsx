import styles from "./card.module.css";
import Link from "next/link";

export default function ExperienceCard({
    imgSrc,
    imgAlt,
    companyName,
    companyURL,
    positionTitle,
    positionDate,
    experienceDesc,
    id
}: {
    imgSrc: string;
    imgAlt: string;
    companyName: string;
    companyURL: string;
    positionTitle: string;
    positionDate: string;
    experienceDesc: any;
    id?: string;
}) {
    return (
        <div className={styles.experienceCard} id={id}>
            <div className={styles.experienceCardLogo}>
                <Link href={companyURL} target="_blank">
                    <img src={imgSrc} alt={imgAlt} width={30} height={30} />
                </Link>
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