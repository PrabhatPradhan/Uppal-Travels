import React from 'react'
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
             <p>Some representative placeholder content for the first slide.</p>
             <button className='book-btn'>BOOK NOW</button>
           </div>
         </div>
         <div class="carousel-item">
           <img src="https://www.delhitempotraveller.com/assets/images/banner/manali-tour.jpg" class="d-block w-100" alt="..."/>
           <div class="carousel-caption d-none d-md-block">
             <h5 className='booking-plan'>Delhi to Agra Tour</h5>
             <p>Some representative placeholder content for the second slide.</p>
             <button className='book-btn'>BOOK NOW</button>
           </div>
         </div>
         <div class="carousel-item">
           <img src="https://www.delhitempotraveller.com/assets/images/banner/agra-tour.jpg" class="d-block w-100" alt="..."/>
           <div class="carousel-caption d-none d-md-block">
             <h5 className='booking-plan'>Delhi to Manali Tour</h5>
             <p>Some representative placeholder content for the third slide.</p>
             <button className='book-btn'>BOOK NOW</button>
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
     
         <div class="tour-container" id='Packages'>
             <h1 class="tour-heading">Tour Packages</h1>
             <div class="tour-card-container">
                 <div class="tour-card">
                     <img src="https://www.uppaltempotravellers.com/wp-content/uploads/2024/02/Untitled-1-300x225.png" alt="Delhi To Agra"/>
                     <h2 class="tour-title">Delhi To Agra Tempo Traveler Service</h2>
                     <p class="tour-description">Uppal Travels takes pride in providing reliable and comfortable tempo traveler services from Delhi to Manali.</p>
                     <button class="tour-button">Read More</button>
                 </div>
                 <div class="tour-card">
                     <img src="https://www.uppaltempotravellers.com/wp-content/uploads/2024/02/Untitled-2678-1024x768.png" alt="Delhi To Jaipur"/>
                     <h2 class="tour-title">Delhi To Jaipur Tempo Traveller Service</h2>
                     <p class="tour-description">Embark on a regal journey from Delhi to Jaipur with Uppal Travels, where every mile takes you deeper.</p>
                     <button class="tour-button">Read More</button>
                 </div>
                 <div class="tour-card">
                     <img src="https://www.uppaltempotravellers.com/wp-content/uploads/2024/02/Untitled-1-1-1024x768.png" alt="Delhi To Ayodhya"/>
                     <h2 class="tour-title">Delhi To Ayodhya Tempo Traveler  </h2>
                     <p class="tour-description">Journey from the bustling city of Delhi to the sacred city of Ayodhya with Uppal Travels, where every mile </p>
                     <button class="tour-button">Read More</button>
                 </div>
                 <div class="tour-card">
                     <img src="https://www.uppaltempotravellers.com/wp-content/uploads/2024/02/chardham-yatra-1024x604.jpg" alt="Char Dham Yatra"/>
                     <h2 class="tour-title">Tempo Traveler Service For Char  </h2>
                     <p class="tour-description">Experience the divine aura of the Char Dham Yatra with Uppal Travels, where every bend of the holy paths </p>
                     <button class="tour-button">Read More</button>
                 </div>
             </div>
         </div>
     
         
         <div class="tour-container">
            
             <div class="tour-card-container">
                 <div class="tour-card">
                     <img src="https://www.uppaltempotravellers.com/wp-content/uploads/2024/02/Untitled-1-300x225.png" alt="Delhi To Agra"/>
                     <h2 class="tour-title">Delhi To Agra Tempo Traveler Service</h2>
                     <p class="tour-description">Uppal Travels takes pride in providing reliable and comfortable tempo traveler services from Delhi to Manali.</p>
                     <button class="tour-button">Read More</button>
                 </div>
                 <div class="tour-card">
                     <img src="https://www.uppaltempotravellers.com/wp-content/uploads/2024/02/Untitled-2678-1024x768.png" alt="Delhi To Jaipur"/>
                     <h2 class="tour-title">Delhi To Jaipur Tempo Traveller Service</h2>
                     <p class="tour-description">Embark on a regal journey from Delhi to Jaipur with Uppal Travels, where every mile takes you deeper.</p>
                     <button class="tour-button">Read More</button>
                 </div>
                 <div class="tour-card">
                     <img src="https://www.uppaltempotravellers.com/wp-content/uploads/2024/02/Untitled-1-1-1024x768.png" alt="Delhi To Ayodhya"/>
                     <h2 class="tour-title">Delhi To Ayodhya Tempo Traveler  </h2>
                     <p class="tour-description">Journey from the bustling city of Delhi to the sacred city of Ayodhya with Uppal Travels, where every mile </p>
                     <button class="tour-button">Read More</button>
                 </div>
                 <div class="tour-card">
                     <img src="https://www.uppaltempotravellers.com/wp-content/uploads/2024/02/chardham-yatra-1024x604.jpg" alt="Char Dham Yatra"/>
                     <h2 class="tour-title">Tempo Traveler Service For Char  </h2>
                     <p class="tour-description">Experience the divine aura of the Char Dham Yatra with Uppal Travels, where every bend of the holy paths </p>
                     <button class="tour-button">Read More</button>
                 </div>
             </div>
         </div>
         
         {/* <div class="booking-section">
         <div class="booking-overlay">
           <div class="booking-content">
             <h1>24X7 Booking for Outstation Tempo Traveller At Uppal Travels</h1>
             <div class="contact-info">
               <div class="contact-item">
                 <i class="phone-icon"></i>
                 <span>+91-9910229914</span>
               </div>
               <div class="contact-item">
                 <h3>Call Now</h3>
               </div>
               <div class="contact-item">
                 <i class="phone-icon"></i>
                 <span>+91-7838729914</span>
               </div>
             </div>
           </div>
         </div>
       </div> */}
     
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
             <span class="material-symbols-outlined">location_on</span>
           </div>
           <div class="unique-contact-item">
             <h3 class="unique-contact-heading">Make A Call</h3>
             <p class="unique-contact-text">+91-99102 29914</p>
             <span class="material-symbols-outlined">call</span>
           </div>
           <div class="unique-contact-item">
             <h3 class="unique-contact-heading">Flaticon-Email</h3>
             <p class="unique-contact-text">harishuppal1986@gmail.com</p>
             <span class="material-symbols-outlined">
mail
</span>
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
                 <p>Design by Webclickindia.NET | Copyright 2024 Uppal Travels</p>
             </div>
         </footer>
        
     
        
           </>
           </div>
    </>
  )
}
