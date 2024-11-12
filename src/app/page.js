import Image from "next/image";
import Counter from "@/app/components/Counter";
import GitHubLink from "@/app/components/GitHubLink";
import SearchBar from "@/app/components/SearchBar";
import Link from 'next/link';

export default function Home() {
  return (
      <div className={"outer-container"}>
          <div className={"container"}>
              <h1>Erik Johns - NextJS Assignment</h1>
              <div className={"counters"}>
                  <Counter incrementAmount={1} buttonColor={"lightgreen"}/>
                  <Counter incrementAmount={2} buttonColor={"lightblue"}/>
              </div>
              <GitHubLink/>
              <div className={'shop-link'}>
                  <p>Visit my shop here: </p><Link href='/shop'>Shop</Link>
              </div>
          </div>
      </div>
  );
}
