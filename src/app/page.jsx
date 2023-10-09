import Link from "next/link";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categorylist/CategoryList";
import CardList from "@/components/cardlist/CardList";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className={''}>
    <Featured />
    <CategoryList/>
    <div
    className="flex gap-[50px]"
    >
      <CardList/>
      <Menu/>
    </div>
  </div>
  )
}
