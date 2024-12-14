import React from 'react'
import './banner.css'

const Banner = () => {


  return (


    <>
      <div class="container mt-3">
        <div class="row">
          <div class="col-md-10 mx-auto">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://i.redd.it/akvkcr32fyh21.png" class="d-block w-100" alt="First slide" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                  
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://www.justwatch.com/images/backdrop/237875639/s1440/trolls-world-tour" class="d-block w-100" alt="Second slide" />

                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p
                                  style={{
                                    color: '#7fffd4', // Bright green
                                    textShadow: '0 0 5px #32cd32, 0 0 10px #32cd32',
                                    fontWeight: 'bold',
                                  }}
                    >Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://www.rotoscopers.com/wp-content/uploads/2021/01/00-2020-review-thumbnail.jpg" class="d-block w-100" alt="Third slide" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
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
          </div>
        </div>

        <div class="row mt-5 text-center">
          <div class="col-md-6 mx-auto">
            <h1
              style={{
                color: '#7fffd4', // Bright green
                textShadow: '0 0 5px #32cd32, 0 0 10px #32cd32',
                fontWeight: 'bold',
                fontSize: '2rem'
              }}
              className='font-serif'
            >
              New Releases This Week
            </h1>      <p class="mb-4 text-white">It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone.</p>
            <button class="btn btn-primary">Subscribe</button>
          </div>
        </div>




        {/* <!-- Latest Books Section --> */}

        <h1 className="text-center mt-5 text-violet-400">Latest Books</h1>
        <div className="container mt-5">
          {/* Wrapper for the horizontally moving cards */}
          <div className="horizontal-scroll-container snap-x snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
            <div className="horizontal-scroll-wrapper flex space-x-100">
              {/* Card 1 */}
              <div className="card w-[350px]">
                <img
                  src="https://books.disney.com/content/uploads/2022/02/1368055443.jpg"
                  className="card-img-top w-full h-[250px] object-cover"
                  alt="Book 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Book Title 1</h5>
                  <div className="rating">
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-gray-400"></span>
                    <span className="fa fa-star text-gray-400"></span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    View Details
                  </button>
                </div>
              </div>
              {/* Card 2 */}
              <div className="card">
                <img
                  src="https://books.disney.com/content/uploads/2021/11/1368055540-3.jpg"
                  className="card-img-top w-full h-[250px] object-cover"
                  alt="Book 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Book Title 2</h5>
                  <div className="rating">
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-gray-400"></span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    View Details
                  </button>
                </div>
              </div>
              {/* Card 3 */}
              <div className="card">
                <img
                  src="https://books.disney.com/content/uploads/2023/01/1368089232.jpg"
                  className="card-img-top w-full h-[250px] object-cover"
                  alt="Book 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Book Title 3</h5>
                  <div className="rating">
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-gray-400"></span>
                    <span className="fa fa-star text-gray-400"></span>
                    <span className="fa fa-star text-gray-400"></span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal3"
                  >
                    View Details
                  </button>
                </div>
              </div>
              {/* Duplicate the cards to create a continuous loop */}
              <div className="card">
                <img
                  src="https://images.macmillan.com/folio-assets/macmillan_us_frontbookcovers_1000H/9781250775221.jpg"
                  className="card-img-top w-full h-[250px] object-cover"
                  alt="Book 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Book Title 1</h5>
                  <div className="rating">
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-gray-400"></span>
                    <span className="fa fa-star text-gray-400"></span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="card">
                <img
                  src="https://secondskybooks.com/wp-content/uploads/9781786814593-1500-675x1024.jpg"
                  className="card-img-top w-full h-[250px] object-cover"
                  alt="Book 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Book Title 2</h5>
                  <div className="rating">
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-gray-400"></span>
                    <span className="fa fa-star text-gray-400"></span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="card">
                <img
                  src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476759920/the-storm-sister-9781476759920_hr.jpg"
                  className="card-img-top w-full h-[250px] object-cover"
                  alt="Book 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Book Title 3</h5>
                  <div className="rating">
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-gray-400"></span>
                    <span className="fa fa-star text-gray-400"></span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal3"
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="card">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644605295i/60393672.jpg"
                  className="card-img-top w-full h-[250px] object-cover"
                  alt="Book 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Book Title 2</h5>
                  <div className="rating">
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-gray-400"></span>
                    <span className="fa fa-star text-gray-400"></span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="card">
                <img
                  src="https://th.bing.com/th/id/OIP.RmV8Ww70n3dgH-nWyO93_gHaLL?rs=1&pid=ImgDetMain"
                  className="card-img-top w-full h-[250px] object-cover"
                  alt="Book 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Book Title 2</h5>
                  <div className="rating">
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-gray-400"></span>
                    <span className="fa fa-star text-gray-400"></span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="card w-150">
                <img
                  src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/05/18101316/8-1-560x560.jpg?tr=w-1000"
                  className="card-img-top w-full h-[250px] object-cover"
                  alt="Book 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Book Title 2</h5>

                  <div className="rating">
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-yellow-400"></span>
                    <span className="fa fa-star text-gray-400"></span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    View Details
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>






      </div>



    </>




  )
}

export default Banner