import '../App.css';
import { Link } from "react-router";
import s1 from "../assets/sub1.png";
import s2 from "../assets/sub2.png";


function Subscribe (){
    return(
        <section className='subscribe'>
              <div className='sub-right'>
                <img src={s1} alt="" />
              </div>
              <div className='sub-box '>
                <h1 style={{fontFamily: '"Volkhov", serif', fontWeight: 400, fontSize: "46px", color:"#484848"}} >Subscribe To Our Newsletter</h1>
                <p style={{fontFamily: '"Poppins", serif', fontWeight: 400, fontSize: "16px", color:"#484848"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                <div className='email'>
                   <input type="email" placeholder="michael@ymail.com" />
                </div>
                <button type="button" class="btn btn-dark mt-5" style={{fontFamily: '"Poppins", serif', fontWeight: 400, fontSize: "10px", color:"#ffffff"}}>Subscribe Now</button>
              </div>
              <div className='sub-left'>
                <img src={s2} alt="" />
              </div>
              </section>

    )

}

export default Subscribe;