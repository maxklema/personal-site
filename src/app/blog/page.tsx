import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <Image src="/window.svg" alt="Profile" width={100} height={100} />
  );
}
