'use client'

import Header from './components/header';
import ImageCards from './components/imageCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';

export default function Home() {

    return (
        <div>
            <Header/>
            <div className="d-flex justify-content-between">
                <ImageCards
                    caption="Linke Auswahl"
                    answer="1.500.000"
                />
            </div>
        </div>
    );
}
