import Image from "next/image";
import myCard from "../../components/Widgets/myCard";
import Girl from "../../components/Widgets/Girl";
import Promotion from "../../components/Widgets/Promotion";
import Products from "../../components/Widgets/Products";
import Quality from "../../components/Widgets/Quality";
import NewsLetter from "../../components/Widgets/NewsLetter";
import EndSection from "../../components/Widgets/EndSection";

export default function Home() {
  return <>
<div className="space-y-16">
  <Girl/>
  <Promotion/>
<Products/>
<Quality/>
<NewsLetter/>



</div>
  </>;
}
