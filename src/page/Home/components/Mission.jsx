import React from "react";

const Mission = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6 my-3">
          <h3>OUR MISSION</h3>
          <hr className="w-25" />
          <p>
            Inspire Automotive Passion: We aim to inspire a deep appreciation
            and passion for cars in people of all ages. Whether you're a
            seasoned collector or just beginning your journey into the world of
            car toys, we want to ignite your enthusiasm and fuel your love for
            automobiles. Our carefully curated selection showcases the beauty,
            diversity, and rich history of the automotive industry.
          </p>
          <p>
            Deliver Superior Quality: We are dedicated to delivering superior
            quality in every product we offer. We meticulously select toy cars
            from renowned manufacturers known for their craftsmanship and
            attention to detail. By providing exceptional quality, we ensure
            that each car toy captures the essence of the original vehicle,
            creating an immersive and satisfying experience for our customers.
          </p>
          <button className="btn btn-primary">Read More</button>
        </div>
        <div className="col-md-6 my-3">
          <h3> POPULAR QUESTIONS</h3>
          <hr className="w-25" />
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How do I determine the scale of the toy cars?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                The scale of a toy car refers to its proportional size in relation to the actual vehicle. Common scales include 1:18, 1:24, and 1:64. To determine the scale of a toy car, you can usually find this information in the product description or specifications. If you're unsure, feel free to reach out to our customer service team for assistance.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Are the toy cars suitable for children of all ages?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                While many of our toy cars are suitable for children, it's essential to consider the age recommendations and safety guidelines provided by the manufacturer. Some models may contain small parts or have intricate details that make them more suitable for older collectors or display purposes. We recommend reviewing the product descriptions or contacting us for specific age suitability information.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Can I return or exchange a purchased toy car?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                We strive to ensure your satisfaction with your purchase. If you receive a defective or damaged item, please contact us within a reasonable timeframe, and we will assist you with the return or exchange process. However, please note that due to the collectible nature of some toy cars, returns or exchanges may be subject to specific conditions. We encourage you to review our return policy or contact our customer service for further assistance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
