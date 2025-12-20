import sampleData from "@/db/sample-data"
import { log } from "console"
import ProductList from "@/components/shared/product/product-list"

export const metadata = {
  title: "Home",
}

const Homepage = () => {
  log(sampleData)
  return (
    <>
      <ProductList data={sampleData.products} title="Newest Arrivals" limit={4} />
    </>
  )
}

export default Homepage
