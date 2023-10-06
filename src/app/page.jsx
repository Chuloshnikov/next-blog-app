import Link from "next/link";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categorylist/CategoryList";

export default function Home() {
  return (
    <div className={''}>
    <Featured />
    <CategoryList/>
  </div>
  )
}
