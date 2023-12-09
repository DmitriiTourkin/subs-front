import './app-styles/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from "./pages/main-page/MainPage";
import HomePage from "./pages/home-page/HomePage";
import EditSubscription from "./pages/create-and-change-subscription/EditSubscription";
import CreateSubscription from "./pages/create-and-change-subscription/CreateSubscription";
import UserPage from "./pages/user-page/UserPage";
import UserPageEdit from "./pages/user-page/UserPageEdit";

function App() {
    return (
        <>
          <BrowserRouter>
            <Routes>
                <Route path='/' index element={<MainPage/>}/>
                <Route path="/subscriptions" element={<HomePage/>}/>
                <Route path="/subscriptions/createNew" element={<CreateSubscription/>}/>
                <Route path="/subscriptions/edit/" element={<EditSubscription/>}/>
                <Route path="/userPage" element={<UserPage/>}/>
                <Route path="/userPage/edit" element={<UserPageEdit/>}/>
            </Routes>
          </BrowserRouter>
        </>
    )
}
export default App;
