import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error =  useRouteError();
    console.log(error);
  return (
    <div className="container h-100">
      <div className="row  align-items-center">
        <div className="col-md-4"></div>
        <div className="col-md-4 mt-5">
          <div className="card mt-5" >
            <img src="https://cdn.pixabay.com/photo/2018/01/16/10/36/mistake-3085712_1280.jpg" className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">{error.status} Page {error.statusText} </h5>
              <p className="card-text">
               {error.error.message}
              </p>
              <p className="text-center">
              <Link to='/' className="btn btn-primary">
                Back to Home
              </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default ErrorPage;
