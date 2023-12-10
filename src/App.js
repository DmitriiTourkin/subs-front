import './app-styles/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from "./pages/main-page/MainPage";
import HomePage from "./pages/home-page/HomePage";
import EditSubscription from "./pages/create-and-change-subscription/EditSubscription";
import CreateSubscription from "./pages/create-and-change-subscription/CreateSubscription";
import UserPage from "./pages/user-page/UserPage";
import UserPageEdit from "./pages/user-page/UserPageEdit";
import {useState} from "react";

function App() {

    const [ loggedIn, setLoggedIn ] = useState(null)
    const [ user, setUser ] = useState({})
    const [ loading, setLoading ] = useState(false)
    const [ orders, setOrders ] = useState(0)
    const [ menuToggled, setMenuToggled ] = useState(false)
    const location = useLocation()


    const registration = ({
                              email,
                              password,
                              username,
                              first_name,
                              last_name
                          }) => {
        api.signup({ email, password, username, first_name, last_name })
            .then(res => {
                history.push('/signin')
            })
            .catch(err => {
                const errors = Object.values(err)
                if (errors) {
                    alert(errors.join(', '))
                }
                setLoggedIn(false)
            })
    }

    const changePassword = ({
                                new_password,
                                current_password
                            }) => {
        api.changePassword({ new_password, current_password })
            .then(res => {
                history.push('/signin')
            })
            .catch(err => {
                const errors = Object.values(err)
                if (errors) {
                    alert(errors.join(', '))
                }
            })
    }

    const authorization = ({
                               email, password
                           }) => {
        api.signin({
            email, password
        }).then(res => {
            if (res.auth_token) {
                localStorage.setItem('token', res.auth_token)
                api.getUserData()
                    .then(res => {
                        setUser(res)
                        setLoggedIn(true)
                        getOrders()
                    })
                    .catch(err => {
                        setLoggedIn(false)
                        history.push('/signin')
                    })
            } else {
                setLoggedIn(false)
            }
        })
            .catch(err => {
                const errors = Object.values(err)
                if (errors) {
                    alert(errors.join(', '))
                }
                setLoggedIn(false)
            })
    }

    const loadSingleItem = ({ id, callback }) => {
        setTimeout(_ => {
            callback()
        }, 3000)
    }

    const history = useHistory()
    const onSignOut = () => {
        api
            .signout()
            .then(res => {
                localStorage.removeItem('token')
                setLoggedIn(false)
            })
            .catch(err => {
                const errors = Object.values(err)
                if (errors) {
                    alert(errors.join(', '))
                }
            })
    }

    useEffect(_ => {
        if (loggedIn) {
            // history.push('/recipes')
        }
    }, [loggedIn])

    const getOrders = () => {
        api
            .getRecipes({
                page: 1,
                is_in_shopping_cart: Number(true)
            })
            .then(res => {
                const { count } = res
                setOrders(count)
            })
    }

    const updateOrders = (add) => {
        if (!add && orders <= 0) { return }
        if (add) {
            setOrders(orders + 1)
        } else {
            setOrders(orders - 1)
        }
    }

    useEffect(_ => {
        const token = localStorage.getItem('token')
        if (token) {
            return api.getUserData()
                .then(res => {
                    setUser(res)
                    setLoggedIn(true)
                    getOrders()
                })
                .catch(err => {
                    setLoggedIn(false)
                    history.push('/signin')
                })
        }
        setLoggedIn(false)
    }, [])



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
