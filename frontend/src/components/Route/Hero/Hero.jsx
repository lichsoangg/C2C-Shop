import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../../styles/styles';

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: 'url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)',
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <div className="shop__name">
          <div className="contents">
            <h1 className="">C2C_SHOP</h1>
            <h1 className="">C2C_SHOP</h1>
          </div>
        </div>
        <p className="pt-5 text-[16px] font-[400] text-[#000000ba]">
          Kết nối mọi người, mua sắm mọi lúc, mọi nơi!
          <br /> Trải nghiệm mua sắm độc đáo, kết nối người mua và người bán trực tiếp, tạo cơ hội
          mua sắm linh hoạt và tiện lợi mọi lúc, mọi nơi.
          <p>Đem đến cho bạn những thứ bạn cần</p>
        </p>
        <Link
          to="/products"
          className="relative inline-flex mt-5 items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            Mua ngay
          </span>
          <span className="relative invisible">Mua ngay</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
