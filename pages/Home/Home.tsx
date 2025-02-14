import Details from '../Details/Details';
import Welcome from '../Welcome/Welcome';
import NotFound from '../NotFound/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Confirmation from '../../components/Confirmation/Confirmation';
// import Information from '../../components/Information/Information';
// import RSVP from '../../components/RSVP/RSVP';


function Home() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/details" element={<Details />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Home;