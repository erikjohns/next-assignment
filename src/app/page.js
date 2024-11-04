import Image from "next/image";
import styles from "./page.module.css";
import Counter from "@/app/components/Counter";
import GitHubLink from "@/app/components/GitHubLink";
import SearchBar from "@/app/components/SearchBar";

export default function Home() {
  return (
    <div className={styles.page}>
        <h1>Erik Johns</h1>
        <Counter incrementAmount={1} buttonColor={"green"} />
        <Counter incrementAmount={2} buttonColor={"blue"} />
        <GitHubLink />
        <SearchBar />
    </div>
  );
}
