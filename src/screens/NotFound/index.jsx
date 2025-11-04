// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import DefaultLayout from "../../components/DefaultLayout";

function NotFound() {
  return (
    <div className="not-found-page">
      <DefaultLayout>
        <section className="main-banner clipedShaped-sec bg-gradiant">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-12 mb-3">
                <div className="main-banner-content d-flex justify-content-center align-items-center flex-column">
                  <h2 className="text-center">404 - Page Not Found</h2>
                  <p className="text-center text-white">
                    Oops! The page you're looking for doesn't exist.
                  </p>
                  <Link
                    to="/"
                    className="ny-btn"
                    // style={{ maxWidth: "200px" }}
                  >
                    Go to Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </div>
    // <div className="d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
    //     <div className="container text-center py-5">
    //       <h1>404 - Page Not Found</h1>
    //       <p>Oops! The page you're looking for doesn't exist.</p>
    //       <Link to="/" className="btn btn-primary mt-3">Go to Homepage</Link>
    //     </div>
    // </div>
  );
}

export default NotFound;
