import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categorylist/CategoryList";
import CardList from "@/components/cardlist/CardList";
import Menu from "@/components/menu/Menu";

export default function Home({ searchParams }) {

  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;


  return (
    <div>
    <Featured />
    <CategoryList/>
    <div
    className="flex gap-[50px]"
    >
      <CardList page={page}/>
      <Menu/>
    </div>
  </div>
  )
}
