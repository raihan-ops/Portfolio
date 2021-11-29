import React, { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Navbar from '../NavBar/Navbar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [])
    return (
        <div>
            {
                loading ? (
                    <div className="App">
                        <PacmanLoader size={40} color={'#FFFFFF'} loading={loading}></PacmanLoader>
                    </div>

                )
                    : (<div className="text-gray-400 bg-gray-900 body-font">
                        <Navbar></Navbar>
                        <About></About>
                        <Projects></Projects>
                        <Skills></Skills>
                        <Contacts></Contacts>
                        <Footer></Footer>

                    </div>)
            }
        </div>
    );
};

export default Home;