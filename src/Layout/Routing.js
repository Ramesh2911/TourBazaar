import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import About from '../Components/About/About'
//import Contact from '../Components/Contact/Contact'
import Contact from '../Components/Contact/Contact'
import Home from '../Components/Home/Home'
import Login from '../Components/Login/Login'
import Registation from '../Components/Registation/Registation'
import Places from '../Components/Places/Places'
import Header from './Header'
import Placesub from '../Components/Places/Placesub'
import PlaceDetails from '../Components/Places/PlaceDetails'
import Com from '../Com/Com'
import Reading from '../Components/Reading/Reading'
import { Footer } from '../Components/Footer/Footer'
import Terms from '../Components/Terms/Terms'
//import Protected from './Protected'

export default function Routing() {
    return (
        <Router>
            <Header/>
            <Routes>
             <Route path="" element={<Home/>}></Route>
             <Route path="about_page" element={<About/>}></Route>
             <Route path="places_page" element={<Places/>}></Route>
             <Route path="reading_page" element={<Reading/>}></Route>
             <Route path="placesub_page/:placeId" element={<Placesub/>}></Route>
             <Route path ="placeDetails_page/:placeId/:sid" element={<PlaceDetails/>}></Route>
             <Route path="contact_page" element={<Contact/>}></Route>
             <Route path="com_page" element={<Com/>}></Route>
             <Route path="login_page"   element={<Login/>}></Route>
             <Route path="registation_page" element={<Registation/>}></Route>
             <Route path="terms_page" element={<Terms/>}></Route>
            </Routes>
            <Footer />
        </Router>
    )
}
