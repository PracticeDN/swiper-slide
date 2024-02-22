import styles from "./App.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 4</SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
}

export default App;
