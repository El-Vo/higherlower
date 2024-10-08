import Header from './components/Header';
import CenterCard from './components/centerCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';
import React from "react";

export default function Home() {
  return (
      <div>
        <Header/>
          <div className="d-flex justify-content-between">
              <div className="column text-style d-flex align-items-center justify-content-center">
                  <div>
                      Lower
                  </div>
              </div>
              <CenterCard/>
              <div className=" column text-style d-flex align-items-center justify-content-center">
                  <div>
                      Higher
                  </div>
              </div>
          </div>
      </div>
  );
}
