import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>Docs</h1>
      <Button children='Boop' appName="Docs"/>
    </div>
  );
}
