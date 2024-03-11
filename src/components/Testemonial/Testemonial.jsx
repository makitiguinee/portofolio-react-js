import React from 'react'
import "./Testemonial.css"
import Profil1 from '../../img/profile1.jpg';
import Profil2 from '../../img/profile2.jpg';
import Profil3 from '../../img/profile3.jpg';
import Profil4 from '../../img/profile4.jpg';
// Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Testemonial = () => {
    const clients = [
        {
          id: 2,
          name: "Jane Smith",
          review: "Nous avons été impressionnés par leur expertise dans le développement mobile. Ils ont rendu notre application fluide et intuitive pour nos utilisateurs.",
          img:Profil1
        },
        // Ajoutez les données pour les autres clients ici
        {
          id: 3,
          name: "Maxime Dupont",
          review: "Je suis extrêmement satisfait de leur travail. Ils ont su comprendre nos besoins et ont livré un produit de haute qualité dans les délais impartis.",
          img:Profil2
        },
        {
          id: 4,
          name: "Sophie Martin",
          review: "Le développement de notre application mobile a été une expérience formidable avec cette équipe. Leur professionnalisme est remarquable.",
          img:Profil3
        },
        {
          id: 5,
          name: "Lucas Garcia",
          review: "Je recommande vivement leurs services. Ils ont été très réactifs et ont su répondre à toutes nos demandes, même les plus exigeantes.",
          img: Profil4
        }
       
      ];
      console.log(clients)
  return (
    <div className="t-wrapper">
        <div className="t-headinng">
            <span>Les clients obtiennent </span>
            <span>toujours de l'expérience </span>
            <span>pour moi...</span>
            <div className="blur t-blur1" sùtyle={{background:"var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background:"var(skyblue)"}}></div>
        </div>
        {/* the slide */}
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        >
       { clients.map((client,id)=>{
           return(
           <SwiperSlide key={client.id}>
            <div className="tesmonial">
               <img src={client.img} alt=""/>
               <span>{client.review}</span>
            </div>     
           </SwiperSlide>)
        })}

        </Swiper>
    </div>
  )
}

export default Testemonial
