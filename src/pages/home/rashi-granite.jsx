import Seo from "../../components/common/Seo";
import Header5 from "../../components/header/Header5";
import FilterProperty from "../../components/home-page/home-5/ProperyFilter";
import Property from "../../components/home-page/home-5/Property";
import Quote from "../../components/home-page/home-5/Quote";
import Hero from "../../components/home-page/home-5/hero";
import About from "../../components/home-page/home-5/about";
import CallToActions from "../../components/home-page/home-5/CallToActions";
import Footer from "../../components/home-page/home-5/footer";

const Rashi = () => {
  return (
    <>
      <Seo pageTitle="Rashi Granite" />

      {/* <!--  =============================================
        Theme Header3 Menu
        ============================================== 	--> */}
      <Header5 />

      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <Hero />

      {/* 
			=============================================
			Feature Section Forty Six
			============================================== 
			*/}
      <div className="fancy-feature-fortySix position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative pt-80 pb-120 lg-pt-120 md-pb-130">
            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="title-style-eleven md-mb-20">
                  <h2 className="main-title tx-dark">
                  Exceptional Service Tailored for You
                  </h2>
                </div>
              </div>
              <div className="col-lg-5 ms-auto " data-aos="fade-left">
                <p className="text-lg m0">
                We deliver top-quality granite with meticulous attention to detail, ensuring a seamless and personalized experience for every project.
                </p>
              </div>
            </div>
            {/* End .row */}

            <div className="row gx-xxl-5 pt-90 lg-pt-40 md-pt-20">
              <Property />
            </div>
            {/* End .row */}

            <Quote />
            {/* /.quote-wrapper */}

           
            <div className="shapes shape-two" />
            <img
              src="/images/shape/shape_162.svg"
              alt="sticker"
              className="lazy-img shapes shape-three"
            />
            <img
              src="/images/assets/sticker_01.png"
              alt="sticker"
              className="lazy-img shapes shape-four" style={{height: '150px'}}
            />
            <div className="shapes shape-five" />
            <div className="shapes shape-six" />
          </div>
          {/* /.line-bg-wrapper */}
        </div>
        {/* /.container */}
      </div>

      {/* 
			=============================================
				Feature Section Forty Seven
			============================================== 
			*/}
      <div className="fancy-feature-fortySeven zn2 position-relative pt-80 pb-120 lg-pt-100 lg-pb-100">
        <div className="container">
          <FilterProperty />
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_163.svg"
          alt="media"
          className="lazy-img shapes shape-one"
        />
      </div>

      {/* 
			=============================================
				Feature Section Forty Eight
			============================================== 
			*/}
      <div className="fancy-feature-fortyEight position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative pt-100 pb-120 lg-pt-120 lg-pb-110">
            <About />
          </div>
          {/* /.line-bg-wrapper */}
        </div>
        {/* /.container */}
      </div>

      {/* 
			=============================================
				Feature Section Forty Nine
			============================================== 
			*/}
      {/* <FancySection /> */}

      {/*
			=====================================================
			Feedback Section Fourteen
			=====================================================
			*/}
      {/* <div className="feedback-section-fourteen position-relative zn2">
        <div className="container">
          <div className="line-bg-wrapper position-relative zn2 pt-250 pb-180 lg-pt-120 lg-pb-80">
            <div className="row">
              <div className="col-md-6" data-aos="fade-right">
                <div className="title-style-five">
                  <h2 className="main-title fw-500 tx-dark">
                    Check our client lovely words.
                  </h2>
                </div>
                <div className="mt-120 lg-mt-40 ps-xl-5 ms-xl-5">
                  <div className="feedback_slider_eleven">
                    <Testimonial />
                  </div>
              
                </div>
              </div>
         

              <div className="col-xl-6 col-lg-5 col-md-6 ms-auto">
                <div
                  className="img-holder position-relative mt-25"
                  data-aos="fade-left"
                >
                  <img
                    src="/images/media/img_84.jpg"
                    alt="shape"
                    className="lazy-img ms-auto"
                  />

                  <div className="rating-box bg-black text-white d-flex flex-column justify-content-center align-items-center">
                    <strong className="fw-500">4.8</strong>
                    <span>avg rating</span>
                  </div>
                  <img
                    src="/images/shape/shape_163.svg"
                    alt="shape"
                    className="lazy-img shapes shape-one"
                  />
                  <img
                    src="/images/shape/shape_168.svg"
                    alt="shape"
                    className="lazy-img shapes shape-two"
                  />
                </div>
              </div>
            </div>
          </div>
        
        </div>

        <img
          src="/images/shape/shape_169.svg"
          alt="shape"
          className="lazy-img shapes shape-three"
        />
        <img
          src="/images/assets/sticker_03.png"
          alt="shape"
          className="lazy-img shapes shape-four"
          data-aos="fade-up"
        />
      </div> */}

      {/* 
			=============================================
				Blog Section Six
			============================================== 
			*/}
      {/* <div className="blog-section-six position-relative zn2 pt-150 pb-200 lg-pt-90 lg-pb-100">
        <div className="container">
          <div className="position-relative">
            <div className="title-style-five text-center text-sm-start mb-30 lg-mb-10">
              <h2 className="main-title fw-500 tx-dark">Our Blog</h2>
            </div>

            <div className="row gx-xxl-5">
              <Blog />
            </div>

            <div className="btn-holder text-center">
              <div className="btn-eighteen position-relative d-inline-block tx-dark">
                <Link to="/blog/blog-v1" className="fw-500 tran3s">
                  Check our all news <i className="fa-solid fa-angle-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/shape/shape_163.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div> */}

      {/* 
			=============================================
				Feature Section Fifty
			============================================== 
			*/}
      {/* <div className="fancy-feature-fifty position-relative mt-200 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6" data-aos="fade-right">
              <div className="title-style-five">
                <h2 className="main-title fw-500 tx-dark">
                  Question &amp; Answers.
                </h2>
              </div>
              <p className="text-lg mt-40 mb-45 lg-mt-20 lg-mb-30">
                Don’t find your answer here? just send us a message for help
              </p>
              <Link to="/faq" className="btn-one fw-500">
                See More
              </Link>
            </div>

            <div className="col-xl-7 col-lg-6 ms-auto" data-aos="fade-left">
              <Faq />
            </div>
          </div>
        </div>
        <img
          src="/images/shape/shape_163.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div> */}

      {/*
			=====================================================
				Fancy Short Banner Fifteen
			=====================================================
			*/}
      <div className="fancy-short-banner-fifteen pt-150 lg-pt-80 pb-30 position-relative zn2 lg-mt-100">
        <CallToActions />
      </div>

      {/* <!--
			=====================================================
				Footer
			=====================================================
			--> */}
      <Footer />
    </>
  );
};

export default Rashi;
