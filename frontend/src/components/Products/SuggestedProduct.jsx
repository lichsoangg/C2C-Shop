import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import styles from '../../styles/styles';
import ProductCard from '../Route/ProductCard/ProductCard';
import axios from 'axios';
import {server} from '../../server';

const SuggestedProduct = ({data}) => {
  const {user, loading} = useSelector((state) => state.user);
  const {allProducts} = useSelector((state) => state.products);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const getSuggestedProduct = async () => {
      try {
        const response = await axios.get(`${server}/user/recommend/${user?._id}`, {
          withCredentials: true,
        });
        if (response.data.success) {
          setProductData(response.data.recommendList);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getSuggestedProduct();
  }, []);

  return (
    <div>
      {data ? (
        <div className={`p-4 ${styles.section}`}>
          <h2 className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}>
            Gợi ý cho bạn
          </h2>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-4 xl:gap-[30px] mb-12">
            {productData && productData.map((i, index) => <ProductCard data={i} key={index} />)}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SuggestedProduct;
