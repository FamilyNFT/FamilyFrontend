import Layout from "components/Layout";
import Typography from "components/Typography";
import CenterCarousel from "components/CenterCarousel";
import Button from "components/Button";
import MarketplaceCard from "components/Card/MarketplaceCard";

import topImg from "assets/img/symbols/top.png";
import belowImg from "assets/img/symbols/below.png";
import SortImg from "assets/img/symbols/ArrowsDownUp.png";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "redux/hooks/redux-hooks";
import { setProduct } from "redux/product/reducer";
import StoreCard from "components/Card/StoreCard";
import LoadingScreen from "components/LoadingScreen";
import shopifyBackendURL from "constants/backendURL";

export const datas = [
  {
    id: 1,
    cover: "https://i.ibb.co/0Bqtcyv/image-3.png",
    title: "Interstaller",
    amount: 5,
  },
];
const Store = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState([]);
  const getProducts = useCallback(async () => {
    let products = await fetch(`${shopifyBackendURL}/products`).then((res) =>
      res.json()
    );
    // console.log(products);
    setProducts(products);
    dispatch(setProduct(products[0]));
    setLoading(false);
  }, []);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Layout>
      <div className="max-w-screen-2xl mx-auto">
        <div className="md:flex items-end mt-5  z-50 ">
          <h1 className="text-white text-[55px] md:text-[75px] pt-[10px] md:pt-0 clash-font font-semibold leading-[0.8] z-50">
            Store
          </h1>
          <div className="w-full flex justify-start md:justify-end my-7 md:my-0">
            <Button
              text="Price"
              rightImgSrc={SortImg}
              className="text-xl border-white/10 text-white/70"
              imgClassName="w-5"
            />
          </div>
        </div>
        <div className="mt-2 md:mt-12 grid items-stretch grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products?.map((data: any, key: any) => (
            <StoreCard
              id={key}
              key={key}
              title={data.title}
              imgSrc={data.video}
              amount={data.variants[0].price}
              onClick={() => {
                dispatch(setProduct(data));
              }}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Store;
