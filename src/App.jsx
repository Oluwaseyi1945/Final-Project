import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Features from './components/Features'
import Gallery from './components/Gallery'
import TestimonialsCarousel from './components/Testimony'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import imgleft from "./assets/bb.png";
import imgright from "./assets/cc.png";
import img1 from "./assets/aa.png";
import img2 from "./assets/dd.png";
import logo from "./assets/logo.png";
import logo1 from "./assets/logo (1).png";
import logo2 from "./assets/logo (2).png";
import logo3 from "./assets/logo (3).png";
import logo4 from "./assets/logo (4).png";
import image8 from "./assets/image8.png";
import ic from "./assets/icon1.png";
import ic2 from "./assets/icon2.png";
import ic3 from "./assets/vector.png";
import ic4 from "./assets/calls.png";
import c1 from "./assets/c1.png";
import c2 from "./assets/c2.png";
import c3 from "./assets/c3.png";
import c4 from "./assets/c4.png";
import c5 from "./assets/c5.png";
import c6 from "./assets/c6.png";
import c7 from "./assets/c7.png";
import s1 from "./assets/sub1.png";
import s2 from "./assets/sub2.png";
import DealsSection from './components/DealsSection'
import DealsGallery from './Dealsgallery'
import CategoryTabs from './components/Categories'
import { Link } from "react-router";
import { useEffect } from 'react';










function App() {
  const products = [
  { id: 1, title: "Hello 1", price: 95.5 },
  { id: 2, title: "Hello 2", price: 80.0 },
  { id: 3, title: "Hello 3", price: 120.0 },
  { id: 4, title: "Hello 1", price: 95.5 },
  { id: 5, title: "Hello 2", price: 80.0 },
  { id: 6, title: "Hello 3", price: 120.0 },
];

const features = [
  {
    title: "High Quality",
    text: "crafted from top materials",
    icon: ic,
  },
  {
    title: "Warranty Protection",
    text: "Over 2 years",
    icon: ic2,
  },
  {
    title: "Free Shipping",
    text: "Order over 150 $",
    icon: ic3,
  },
  {
    title: "24 / 7 Support",
    text: "Dedicated support",
    icon: ic4,
  },
];

const testimonials = [
    {
      name: "James K.",
      role: "Traveler",
      text: "You won’t regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
      rating: 5,
      image: "https://via.placeholder.com/80"
    },
    {
      name: "Sarah L.",
      role: "Designer",
      text: "This product has completely changed the way I work. Highly recommended!",
      rating: 5,
      image: "https://via.placeholder.com/80"
    },
    {
      name: "Michael T.",
      role: "Entrepreneur",
      text: "Fantastic experience from start to finish. Great support team too!",
      rating: 4,
      image: "https://via.placeholder.com/80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const { name, role, text, rating, image } = testimonials[currentIndex];


  return (
    <>

    <section className='header'>
      <Navbar/>
        <section className='hero-content '>
          <div className='left-card ' >
            <img  src={imgleft} alt="" />

          </div>

          <div className='middle-box'>
            <div className='top-card'>
                 <img src={img1} alt="" />
            </div>

           <div className="center-content">
             <h1>ULTIMATE</h1>
              <h2>SALE</h2>
            <p>NEW COLLECTION</p>
            <button  className='btn btn-dark shadow w-50 mt-20'>SHOP NOW</button>
          </div>

            <div className="bottom-card">
             <img src={img2} alt="" />
            </div>
           
          </div>
          <div className='right-card'>
            <img src={imgright} alt="" />
          </div>
        </section>
    </section>

    <section className='logos-box'>
      <div className='logos-mini'>   
        <img src={logo} alt="" />
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
      </div>
    </section>

    <DealsSection/>


    <section className='header2 text-center'>
      <div>
        <h1 style={{fontFamily: '"Volkhov", serif', fontWeight: 400, fontSize: "46px", color:"#484848"}}>New Arrivals</h1>
        <p style={{fontFamily: '"poppins", serif', fontWeight: 400, fontSize: "16px", color:"#8A8A8A"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis <br />
         ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
      </div>
      <div>
      <CategoryTabs onSelect={(cat) => console.log(cat)} />
    </div>
    <div className="row row-cols-12 row-col-md-3 g-4 products-grid">
  {products.map((item) => (
    <div className="col" key={item.id}>
      <div className="card">
        <img src="" alt="" />

        <div className="card-content">
          <h3>{item.title}</h3>
          <p className="brand">al karam</p>
          <p className="reviews">(4.1k) Customer Reviews</p>

          <div className="price-row">
            <span className="price">${item.price}</span>
            <span className="sold">Almost Sold Out</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>    
     <button className="btn btn-dark m-5"
  style={{ width: "207px", height: "56px",  opacity: 1, fontFamily: "Poppins, sans-serif",fontSize: "16px",lineHeight: "100%",
    letterSpacing: "0px", textAlign: "center", fontWeight: "400",
  }} >View More</button>
    </section>

   <Slider/>
   <Features/>
    <Gallery/>
      
    <TestimonialsCarousel/>

  <Subscribe/>

     <div class="footer-divider"></div>
     <Footer/>




   
          

    
    
      
    

    
    </>
  )
}

export default App
