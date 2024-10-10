"use client"

import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';
import React, { useEffect } from "react";
import { createSwapy } from "swapy";

const DEFAULT = {
    'left': 'a',
    'center': 'c',
    'right': 'd'
}

function Left() {
    return (
        <div className="item a" data-swapy-item="a">
            <div>Left side</div>
        </div>
    )
}

function Center() {
    return (
        <div className="item c" data-swapy-item="c">
            <div>Center</div>
        </div>
    )
}

function Right() {
    return (
        <div className="item d" data-swapy-item="d">
            <div>Right side</div>
        </div>
    )
}

function getItemById(itemId: 'left' | 'center' | 'right' | null) {
    switch (itemId) {
        case 'left':
            return <Left />
        case 'center':
            return <Center />
        case 'right':
            return <Right />
    }
}

export default function Home() {

    const slotItems: Record<string, 'left' | 'center' | 'right' | null> = localStorage.getItem('slotItem') ? JSON.parse(localStorage.getItem('slotItem')!) : DEFAULT

    useEffect(() => {
        const container = document.querySelector('.main-content')
        const swapy = createSwapy(container, {
            swapMode: 'hover'
        })
        swapy.onSwap(({ data }) => {
            console.log('swap', data);
            localStorage.setItem('slotItem', JSON.stringify(data.object))
        })

        swapy.onSwapEnd(({ data, hasChanged }) => {
            console.log(hasChanged);
            console.log('end', data);
        })

        swapy.onSwapStart(() => {
            console.log('start')
        })

        return () => {
            swapy.destroy()
        }
    }, [])

  return (
      <div>
          <Header/>
          <div className="main-content">
              <div className="d-flex justify-content-between">
                  <div className="column text-style d-flex align-items-center justify-content-center"
                       data-swapy-slot="left">
                      {getItemById(slotItems['left'])}
                  </div>
                  <div className="column text-style d-flex align-items-center justify-content-center"
                       data-swapy-slot="center">
                      {getItemById(slotItems['center'])}
                  </div>
                  <div className=" column text-style d-flex align-items-center justify-content-center"
                       data-swapy-slot="right">
                      {getItemById(slotItems['right'])}
                  </div>
              </div>
          </div>
      </div>
  );
}