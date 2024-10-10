import Header from './components/header';
import Animated_Card from './components/animated_card';
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
              <Animated_Card/>
              <div className=" column text-style d-flex align-items-center justify-content-center">
                  <div>
                      Higher3
                  </div>
              </div>
          </div>
      </div>
  );
}
