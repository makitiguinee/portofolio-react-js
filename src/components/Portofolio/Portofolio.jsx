import React from 'react'
import './Portofolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Slidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import Misicapp from '../../img/musicapp.png';
import 'swiper/css';
import { ThemeContext } from '../../../Context'; 
import { useContext } from "react";
const Portofolio = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  return (
  <div className="protofolio" id='protofolio'>
    {/* heating */}
    <span style={{ color: darkMode ? "white" : "" }}>Projets Recents</span>
    <span>Portofolio</span>
    {/* slide swiper */}

     <Swiper
       spaceBetween={1}
       slidesPerView={1}
       grabCursor={true}
       className='protofolio-slider'
     >
        <SwiperSlide>
            <img src={Slidebar} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={Ecommerce} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={HOC} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={Misicapp} alt="" />
        </SwiperSlide>

     </Swiper>
  </div>
  )
}

export default Portofolio
