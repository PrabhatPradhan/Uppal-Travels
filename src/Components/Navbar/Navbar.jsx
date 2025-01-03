import React from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

import './Navbar.css'
export default function Navbar() {
  return (
    < >
    <div className='main'>
   <div className='navbar'>
    <div className='logo'>
        <a href="/">
            <img src="https://www.uppaltempotravellers.com/wp-content/uploads/2024/01/uppaltour_logo.png" alt="Uppal Travels Logo" />
        </a>
    </div>
    <div className='nav'>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="#travels">Travel</a></li>
            <li><a href="#Traveller">Traveller</a></li>
            <li><a href="#Packages">Packages</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
    </div>
</div>


<>
     

     <div id="carouselExampleCaptions" className="carousel slide">
       <div className="carousel-indicators">
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
       </div>
       <div class="carousel-inner">
         <div class="carousel-item active">
           <img src="https://www.delhitempotraveller.com/assets/images/banner/traveller.jpg" class="d-block w-100" alt="..."/>
           <div class="carousel-caption d-none d-md-block">
             <h5 className='booking-plan'>Tempo Traveller Book Now</h5>
             <p className='mt-2'>Some representative placeholder content for the first slide.</p>
             <button className='book-btn mt-3'>BOOK NOW</button>
           </div>
         </div>
         <div class="carousel-item">
           <img src="https://www.delhitempotraveller.com/assets/images/banner/manali-tour.jpg" class="d-block w-100" alt="..."/>
           <div class="carousel-caption d-none d-md-block">
             <h5 className='booking-plan'>Delhi to Agra Tour</h5>
             <p className='mt-2'>Some representative placeholder content for the second slide.</p>
             <button className='book-btn mt-3'>BOOK NOW</button>
           </div>
         </div>
         <div class="carousel-item">
           <img src="https://www.delhitempotraveller.com/assets/images/banner/agra-tour.jpg" class="d-block w-100" alt="..."/>
           <div class="carousel-caption d-none d-md-block">
             <h5 className='booking-plan'>Delhi to Manali Tour</h5>
             <p className='mt-2'>Some representative placeholder content for the third slide.</p>
             <button className='book-btn mt-3'>BOOK NOW</button>
           </div>
         </div>
       </div>
       <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Previous</span>
       </button>
       <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Next</span>
       </button>
     </div>       
     
          <div class="container" id='travels'>
             <div class="image-section">
                 <img src="https://www.uppaltempotravellers.com/wp-content/uploads/2024/02/5678904-768x768-min.png" alt="Travel Image"/>
             </div>
             <div class="text-section">
                 <h2>Uppal Travels</h2>
                 <p>
                     Uppal Travels is the renowned name for Tempo traveller hire service from Delhi to all over India. 
                     Our state-of-the-art in-house fleet of elegant Tempo travellers available in multiple sitting categories. 
                     Our Tempo traveller is well maintained and equipped with modern accessories and comfortable sittings 
                     with ample leg space and the best amenities, so commuters can experience comfortable and relaxed transfers. 
                     Our entire fleet of tempo travellers receives periodic service and maintenance thus we can deliver 
                     a safe and smooth travel experience to tourists looking to hire the best tempo traveller in Delhi.
                 </p>
                 <button class="read-more-btn">Read More</button>
             </div>
         </div>
     
         <div class="header">
             <h1>Welcome to Uppal Travels</h1>
             <h2>Tempo Traveller on Rent</h2>
         </div>
         <div class="card-container" id='Traveller'>
             <div class="card">
                 <img src="https://www.progressivetourtravels.com/images/luxury-tempo-img-1.webp" alt="9 Seater Tempo Traveller"/>
                 <h3>9 Seater Tempo Traveller</h3>
                 <ul>
                     <li><strong>Seat:</strong> 9 Passengers + 1 Driver</li>
                     <li><strong>Facility:</strong> AC, Mic, Pushback Seat Music</li>
                     <li><strong>Available:</strong> Maharaja & Luxury</li>
                     <li><strong>Best Price:</strong> Guaranteed</li>
                 </ul>
                <div className='book-btns'>
                    <button>Book_Now</button>
                    <button>Whatsapp</button>
                    <button>Call Now</button>
                </div>
             </div>
             <div class="card">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-anSUE2enX6nYQGXVy5XV2HFQTQpQ1ECAg&s" alt="12 Seater Tempo Traveller"/>
                 <h3>12 Seater Tempo Traveller</h3>
                 <ul>
                     <li><strong>Seat:</strong> 12 Seater Tempo Traveller</li>
                     <li><strong>Facility:</strong> AC, Mic, Pushback Seat Music</li>
                     <li><strong>Available:</strong> Maharaja & Luxury</li>
                     <li><strong>Best Price:</strong> Guaranteed</li>
                 </ul>
                 <div className='book-btns'>
                    <button>Book_Now</button>
                    <button>Whatsapp</button>
                    <button>Call Now</button>
                </div>
             </div>
             <div class="card">
                 <img src="https://www.delhitempotravellers.com/images/14seater.jpg" alt="14 Seater Tempo Traveller"/>
                 <h3>14 Seater Tempo Traveller</h3>
                 <ul>
                     <li><strong>Seat:</strong> 14 Seater Tempo Traveller</li>
                     <li><strong>Facility:</strong> AC, Mic, Pushback Seat Music</li>
                     <li><strong>Available:</strong> Maharaja & Luxury</li>
                     <li><strong>Best Price:</strong> Guaranteed</li>
                 </ul>
                 <div className='book-btns'>
                    <button>Book_Now</button>
                    <button>Whatsapp</button>
                    <button>Call Now</button>
                </div>
             </div>
             <div class="card">
                 <img src="https://5.imimg.com/data5/NP/FU/MY-5786013/16-seater-tempo-traveller-hire-in-delhi-500x500.jpg" alt="16 Seater Tempo Traveller"/>
                 <h3>16 Seater Tempo Traveller</h3>
                 <ul>
                     <li><strong>Seat:</strong> 16 Seater Tempo Traveller</li>
                     <li><strong>Facility:</strong> AC, Mic, Pushback Seat Music</li>
                     <li><strong>Available:</strong> Maharaja & Luxury</li>
                     <li><strong>Best Price:</strong> Guaranteed</li>
                 </ul>
                 <div className='book-btns'>
                    <button>Book_Now</button>
                    <button>Whatsapp</button>
                    <button>Call Now</button>
                </div>
             </div>
         </div>
         <div class="card-container">
             <div class="card">
                 <img src="https://www.progressivetourtravels.com/images/luxury-tempo-img-1.webp" alt="9 Seater Tempo Traveller"/>
                 <h3>9 Seater Tempo Traveller</h3>
                 <ul>
                     <li><strong>Seat:</strong> 9 Passengers + 1 Driver</li>
                     <li><strong>Facility:</strong> AC, Mic, Pushback Seat Music</li>
                     <li><strong>Available:</strong> Maharaja & Luxury</li>
                     <li><strong>Best Price:</strong> Guaranteed</li>
                 </ul>
                 <div className='book-btns'>
                    <button>Book_Now</button>
                    <button>Whatsapp</button>
                    <button>Call Now</button>
                </div>
             </div>
             <div class="card">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-anSUE2enX6nYQGXVy5XV2HFQTQpQ1ECAg&s" alt="12 Seater Tempo Traveller"/>
                 <h3>12 Seater Tempo Traveller</h3>
                 <ul>
                     <li><strong>Seat:</strong> 12 Seater Tempo Traveller</li>
                     <li><strong>Facility:</strong> AC, Mic, Pushback Seat Music</li>
                     <li><strong>Available:</strong> Maharaja & Luxury</li>
                     <li><strong>Best Price:</strong> Guaranteed</li>
                 </ul>
                 <div className='book-btns'>
                    <button>Book_Now</button>
                    <button>Whatsapp</button>
                    <button>Call Now</button>
                </div>
             </div>
             <div class="card">
                 <img src="https://www.delhitempotravellers.com/images/14seater.jpg" alt="14 Seater Tempo Traveller"/>
                 <h3>14 Seater Tempo Traveller</h3>
                 <ul>
                     <li><strong>Seat:</strong> 14 Seater Tempo Traveller</li>
                     <li><strong>Facility:</strong> AC, Mic, Pushback Seat Music</li>
                     <li><strong>Available:</strong> Maharaja & Luxury</li>
                     <li><strong>Best Price:</strong> Guaranteed</li>
                 </ul>
                 <div className='book-btns'>
                    <button>Book_Now</button>
                    <button>Whatsapp</button>
                    <button>Call Now</button>
                </div>
             </div>
             <div class="card">
                 <img src="https://5.imimg.com/data5/NP/FU/MY-5786013/16-seater-tempo-traveller-hire-in-delhi-500x500.jpg" alt="16 Seater Tempo Traveller"/>
                 <h3>16 Seater Tempo Traveller</h3>
                 <ul>
                     <li><strong>Seat:</strong> 16 Seater Tempo Traveller</li>
                     <li><strong>Facility:</strong> AC, Mic, Pushback Seat Music</li>
                     <li><strong>Available:</strong> Maharaja & Luxury</li>
                     <li><strong>Best Price:</strong> Guaranteed</li>
                 </ul>
                 <div className='book-btns'>
                    <button>Book_Now</button>
                    <button>Whatsapp</button>
                    <button>Call Now</button>
                </div>
             </div>
         </div>
         
     
         <div class="advantages-section">
             <h2>Advantages Of Tempo Travellers</h2>
             <div class="advantages-container">
                 <div class="advantage-card">
                     <img src="https://www.uppaltempotravellers.com/wp-content/uploads/2024/02/90890.png" alt="Large Group Icon"/>
                     <p>Perfect For Large Group</p>
                 </div>
                 <div class="advantage-card">
                     <img src="https://www.uppaltempotravellers.com/wp-content/uploads/2024/02/890000.png" alt="Legroom Icon"/>
                     <p>Ample Legroom</p>
                 </div>
                 <div class="advantage-card">
                     <img src="https://www.uppaltempotravellers.com/wp-content/uploads/2024/02/0098.png" alt="Seats Icon"/>
                     <p>Comfortable Adjustable Seats</p>
                 </div>
                 <div class="advantage-card">
                     <img src="https://www.uppaltempotravellers.com/wp-content/uploads/2024/02/Untitled-789.png" alt="AC Icon"/>
                     <p>Quality Air Conditioning</p>
                 </div>
             </div>
         </div>
        <div className='whyuse-div' id='Packages'>
        <h1 className='whyuse'>Why Use Uppal Tempo Travellers?</h1>
        </div>
        <div className='why-use-tampo'>
            
            <div className='reason'>
                <h2>Comfort and Convenience</h2>
                <img src="https://www.progressivetourtravels.com/images/tempo-traveller-rental-delhi-inside.jpg" alt="" />
            </div>
            <div className='reason'>
                <h2>Cost-Effective</h2>
                <img src="https://cdn.bluebirdtravels.in/wp-content/uploads/2017/01/Tempo_Traveller_PI.webp" alt="" />
            </div>
            <div className='reason'>
                <h2>Ideal for Group Travel</h2>
                <img src="https://www.actempotravellerhire.com/images/tempo1.webp" alt="" />
            </div>
            <div className='reason'>
                <h2>Luggage Space</h2>
                <img src="https://www.actempotravellerhire.com/images/9-seater-tempo-traveller.jpg" alt="" />
            </div>


        </div>

        <div className="reviews-section">
      <h1>Reviews</h1>
      <div className="reviews-summary">
        <div className="summary-item">
          <h2>10.0k</h2>
          <p>Growth in reviews this year</p>
          <span className="growth">21% <span role="img" aria-label="growth">📈</span></span>
        </div>
        <div className="summary-item">
          <h2>4.0</h2>
          <p>Average rating this year</p>
          <div className="stars">⭐⭐⭐⭐☆</div>
        </div>
        <div className="summary-item">
          <p>March 2021 - February 2022</p>
          <div className="rating-distribution">
            <div>
              <span>⭐ 5</span>
              <div className="bar">
                <div style={{ width: '80%' }}></div>
              </div>
              <span>2.0k</span>
            </div>
            <div>
              <span>⭐ 4</span>
              <div className="bar">
                <div style={{ width: '40%' }}></div>
              </div>
              <span>1.0k</span>
            </div>
            <div>
              <span>⭐ 3</span>
              <div className="bar">
                <div style={{ width: '20%' }}></div>
              </div>
              <span>500</span>
            </div>
            <div>
              <span>⭐ 2</span>
              <div className="bar">
                <div style={{ width: '8%' }}></div>
              </div>
              <span>200</span>
            </div>
            <div>
              <span>⭐ 1</span>
              <div className="bar">
                <div style={{ width: '0%' }}></div>
              </div>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      <div className="review-card">
        <div className="user-info">
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
            alt="User Profile"
          />
          <div>
            <h3>Towhidur Rahman</h3>
            <p>Total Spend: <strong>$200</strong></p>
            <p>Total Reviews: <strong>14</strong></p>
          </div>
        </div>
        <div className="review-content">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="review-date">24-10-2022</p>
          <p>
            My first and only mala ordered on Etsy, and I'm beyond delighted! I
            requested a custom mala based on two stones I was called to invite
            together in this kind of creation. The fun and genuine joy I invite
            together in this kind of creation.
          </p>
          <div className="actions">
            <button>Public Comment</button>
            <button>Direct Message</button>
            <button>❤️</button>
          </div>
        </div>
      </div>
    </div>
     
       <div class="unique-container" id='Contact'>
         <div class="unique-form-section">
           <h2 class="unique-heading">Planning for memorable vacations & waiting for the best deal?</h2>
           <h3 class="unique-subheading">Just fill the form we are here for you</h3>
           <form class="unique-form">
             <input type="text" class="unique-input" placeholder="Enter Name*" required/>
             <input type="email" class="unique-input" placeholder="Enter Email *" required/>
             <input type="text" class="unique-input" placeholder="Contact Number *" required/>
             <input type="text" class="unique-input" placeholder="City Name" required/>
             <input type="text" class="unique-input" placeholder="Select No Of Person" required/>
             <button type="submit" class="unique-submit-button">SUBMIT</button>
           </form>
         </div>
         <div class="unique-contact-section">
           <div class="unique-contact-item">
             <h3 class="unique-contact-heading">Location</h3>
             <p class="unique-contact-text">9421/10 Sadar Thana Road Pahar Ganj, New Delhi 110055</p>
             <div>
     
    <div style={{ display: "flex", alignItems: "center", gap: "10px" ,marginTop:"1.5rem"}}>
      <LocationOnIcon style={{ color: "red", fontSize: 30, marginLeft: "2rem" }} />
      <span>Location: New Delhi</span>
    </div>
    
  </div>
           </div>
           <div class="unique-contact-item">
             <h3 class="unique-contact-heading">Make A Call</h3>
             
             <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px",marginTop:"1.5rem" }}>
             <CallIcon style={{ color: "green", fontSize: 30, marginLeft: "2rem" }} />
             <span>Call: +91-99102 29914</span>
             </div>
           </div>
           <div class="unique-contact-item">
             <h3 class="unique-contact-heading">Flaticon-Email</h3>
              <div style={{ display: "flex", alignItems: "center", gap: "10px",marginTop:"1.5rem" }}>
      <EmailIcon style={{ color: "blue", fontSize: 30, marginLeft: "1rem", }} />
      <span> harishuppal1986@gmail.com</span>
    </div>
           </div>
         </div>
        </div>
     
     
         <footer class="footer-wrapper">
             <div class="footer-container">
                
                 <div class="footer-about">
                     <h3 class="footer-title">Uppal Travels</h3>
                     <p class="footer-description">
                         Uppal Travels is the renowned name for Tempo traveler hire service from Delhi to all over India.
                         Our state-of-the-art in-house fleet of elegant Tempo travelers is available in multiple sitting categories.
                     </p>
                     <div class="footer-social-icons">
                         <a href="#" class="social-icon">Facebook</a>
                         <a href="#" class="social-icon">Twitter</a>
                         <a href="#" class="social-icon">YouTube</a>
                     </div>
                 </div>
                  
                 <div class="footer-contact">
                     <h3 class="footer-title">Get In Touch</h3>
                     <p><span class="contact-icon">📞</span> +91 - 9910229914</p>
                     <p><span class="contact-icon">📞</span> +91 - 7838729914</p>
                     <p><span class="contact-icon">📧</span> harishuppal1986@gmail.com</p>
                     <p><span class="contact-icon">📍</span> 117 1st floor, Vardhman Diamond Plaza, R.G. Complex, Pahar Ganj, New Delhi</p>
                 </div>
                
                 <div class="footer-traveler-seats">
                     <h3 class="footer-title">Tempo Traveler By Seats</h3>
                     <ul class="footer-list">
                         <li>9 Seater Tempo Traveller</li>
                         <li>12 Seater Tempo Traveller</li>
                         <li>14 Seater Tempo Traveller</li>
                         <li>16 Seater Tempo Traveller</li>
                         <li>18 Seater Tempo Traveller</li>
                         <li>20 Seater Tempo Traveller</li>
                         <li>26 Seater Tempo Traveller</li>
                     </ul>
                 </div>
                
                 <div class="footer-destinations">
                     <h3 class="footer-title">By Destinations</h3>
                     <ul class="footer-list">
                         <li>Delhi to Manali</li>
                         <li>Delhi to Dharamshala</li>
                         <li>Delhi to Shimla</li>
                         <li>Delhi to Agra</li>
                         <li>Delhi to Mussoorie</li>
                         <li>Delhi to Jaipur</li>
                         <li>Delhi Tempo Travel</li>
                     </ul>
                 </div>
                
                 <div class="footer-pilgrimage">
                     <h3 class="footer-title">Pilgrimage</h3>
                     <ul class="footer-list">
                         <li>Delhi to Varanasi</li>
                         <li>Delhi to Haridwar</li>
                         <li>Delhi to Vrindavan</li>
                         <li>Delhi to Rishikesh</li>
                         <li>Delhi to Ayodhya</li>
                         <li>Delhi to Khatu Shyam</li>
                         <li>Delhi to Katra</li>
                         <li>Chardham Yatra</li>
                     </ul>
                 </div>
             </div>
             
             <div class="footer-bottom">
                 <p>WE ACCEPT:</p>
                 {/* <img src="https://via.placeholder.com/60x30" alt="Visa"/>
                 <img src="https://via.placeholder.com/60x30" alt="MasterCard"/>
                 <img src="https://via.placeholder.com/60x30" alt="Discover"/>
                 <img src="https://via.placeholder.com/60x30" alt="American Express"/> */}
                 <div class="footer-links">
                     <a href="#">Privacy Policy</a> | 
                     <a href="#">Terms & Conditions</a> | 
                     <a href="#">Refund Policy</a> | 
                     <a href="#">Contact Us</a>
                 </div>
                 <p>Design by WebkeyIndia | Copyright 2024 Prabhat</p>
             </div>
         </footer>
        
     
        
           </>
           </div>
    </>
  )
}
