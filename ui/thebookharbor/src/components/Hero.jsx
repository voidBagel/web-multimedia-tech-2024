import React from 'react';
import hero from '../assets/hero.png';
class Hero extends React.Component {
    render() {
        return (
            <div className="hero col px-4">
            <div className="row flex-lg-row-reverse align-items-center p-4 px-4 m-2">
              <div className="p-4 col-10 col-sm-8 col-lg-6">
                <img className="" src={hero} width="550" height="550" loading="lazy"/>
              </div>
              <div className="col-lg-6 p-4">
                <h1 className="display-5 fw-bold lh-1 mb-3 p-4">Find your next read</h1>
                <p className="lead px-4">Take your pick! From a wide variety of genres, titles and authors you'll love.</p>
                <p className="lead px-4">Borrow, trade or buy a book from our collection.</p>
                
                <div className="d-grid gap-2 d-md-flex justify-content-md-start px-4">
                  <button type="button" className="button btn-lg mr-sm-2 px-4 me-md-2">Browse by genre</button>
                </div>
              </div>
            </div>
          </div> 
        );
    }
}

export default Hero;