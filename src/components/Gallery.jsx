import '../App.css';

import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.png";
import c7 from "../assets/c7.png";
import s1 from "../assets/sub1.png";
import s2 from "../assets/sub2.png";

function Gallery(){
    return(
         <section className='gallery'>
              <h1 style={{fontFamily: '"Volkhov", serif', fontWeight: 400, fontSize: "46px", color:"#484848"}}>Follow us On Instagram</h1>
              <p style={{fontFamily: '"Poppins", serif', fontWeight: 400, fontSize: "16px", color:" #8A8A8A;"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ratione recusandae voluptas ad, libero </p>
              <div className='gallery-img'>
              <img src={c1} alt=""  style={{width: "320px",height: "320px",marginTop: "35px"}} />
              <img src={c2} alt=""  style={{width: "256px",height: "380px"}} />
              <img src={c3} alt=""  style={{width: "256px",height: "308px",marginTop: "35px"}} />
              <img src={c4} alt=""  style={{width: "320px",height: "380px"}} />
              <img src={c5} alt=""  style={{width: "320px",height: "308px",marginTop: "35px"}} />
              <img src={c6} alt=""  style={{width: "256px",height: "380px"}} />
              <img src={c7} alt=""  style={{width: "320px",height: "320px",marginTop: "35px"}} />
              </div>
            </section>
    )
}
export default Gallery