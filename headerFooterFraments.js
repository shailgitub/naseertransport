class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header id="header" class="header align-items-center fixed-top">
  
   <nav
      class="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0"
    >
    <div class="container-fluid">
      
      <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
    <a href="index.html" class="logo d-flex align-items-center me-auto p-0">
  <img
    src="img/shabnamCargo3.JPG"
    alt="Your Logo"
    class="img-fluid m-0 p-0 d-block"
    style="max-height: 60px; width: auto; display: block;"
  />
</a>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
          <a href="index.html" class="nav-item nav-link active">Home</a>
          <a href="index.html#about" class="nav-item nav-link">About</a>
          <div class="nav-item dropdown">
            <a
              href="index.html#services"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >Services</a
            >
              <div class="dropdown-menu fade-up m-0">
              <a href="servicehouseshift.html" class="dropdown-item"
                >House Shifting Services</a
              >
              <a href="serviceofficeshift.html" class="dropdown-item"
                >Office Relocation Services</a
              >
              <a href="servicecitytrans.html" class="dropdown-item"
                >Inter-City Transport</a
              >
              <a href="servicegoodstrans.html" class="dropdown-item"
                >Goods & Cargo Transport</a
              >
              <a href="servicevehicleshift.html" class="dropdown-item"
                >Vehicle Shifting</a
              >
              <a href="servicewarehousing.html" class="dropdown-item"
                >Warehousing & Storage</a
              >
            </div>
          </div>
         <!-- <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >Pages</a
            >
            <div class="dropdown-menu fade-up m-0">
              <a href="price.html" class="dropdown-item">Pricing Plan</a>
              <a href="feature.html" class="dropdown-item">Features</a>
              <a href="quote.html" class="dropdown-item">Free Quote</a>
              <a href="team.html" class="dropdown-item">Our Team</a>
              <a href="testimonial.html" class="dropdown-item">Testimonial</a>
              <a href="404.html" class="dropdown-item">404 Page</a>
            </div>
          </div>-->
          <a href="index.html#pricing" class="nav-item nav-link">Pricing</a>
          <a href="contact.html" class="nav-item nav-link">Contact</a>
        </div>
        <h4 class="m-0 pe-lg-5 d-none d-lg-block">
          <i class="fa fa-headphones text-primary me-3"></i>+91 99020 11670
          
        </h4>
      </div>

    </div>
  </nav>
  
       <!-- <a class="cta-btn" href="index.html#about">Get Started</a> -->
  
     
    </header> `;
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
         <footer id="footer" class="footer dark-background">
  
       <div
      class="container-fluid bg-dark text-light footer pt-5 wow fadeIn"
      data-wow-delay="0.1s"
      style="margin-top: 6rem"
    >
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Address</h4>
            <p class="mb-2">
              <i class="fa fa-map-marker-alt me-3"></i>52/7, 1st Main, 6th Cross, Lakshmi Layout, Garvebhavipalya, Hosur Main Road, Bengaluru-560068, INDIA
            </p>
            <p class="mb-2">
              <i class="fa fa-phone-alt me-3"></i>+91 99020 11670<br>
              <i class="fa fa-phone-alt me-3"></i>+91 99020 12470
            </p>
            <p class="mb-2">
              &nbsp;&nbsp;sales@shubnamcargo-movers.com
            </p>
            <div class="d-flex pt-2">
              <a class="btn btn-outline-light btn-social" href=""
                ><i class="fab fa-twitter"></i
              ></a>
              <a class="btn btn-outline-light btn-social" href=""
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a class="btn btn-outline-light btn-social" href=""
                ><i class="fab fa-youtube"></i
              ></a>
              <a class="btn btn-outline-light btn-social" href=""
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Services</h4>
            <a class="btn btn-link" href="">Air Freight</a>
            <a class="btn btn-link" href="">Sea Freight</a>
            <a class="btn btn-link" href="">Road Freight</a>
            <a class="btn btn-link" href="">Logistic Solutions</a>
            <a class="btn btn-link" href="">Industry solutions</a>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Quick Links</h4>
            <a class="btn btn-link" href="">About Us</a>
            <a class="btn btn-link" href="">Contact Us</a>
            <a class="btn btn-link" href="">Our Services</a>
            <a class="btn btn-link" href="">Terms & Condition</a>
            <a class="btn btn-link" href="">Support</a>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div class="position-relative mx-auto" style="max-width: 400px">
              <input
                class="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a class="border-bottom" href="#">shabnammoverspackers.com</a>,
              <!-- All Right Reserved..-->
            </div>
            <div class="col-md-6 text-center text-md-end">
              <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
             <!-- Designed By
              <a class="border-bottom" href="https://htmlcodex.com"
                >HTML Codex2</a
              >-->
            </div>
          </div>
        </div>
      </div>
    </div>
  
    </footer>
          `;
  }
}
customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);
