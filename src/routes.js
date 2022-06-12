import Home from './views/Home'
import Login from './views/Login'
import SignUp from './views/SignUp'
import AboutUs from './views/AboutUs'
import Tests from './views/Tests'

export const routes = [
    {path: '', component: Home},
    {path:'/login',component: Login},
    {path:'/sign-up',component: SignUp},
    {path:'/about-us',component: AboutUs},
    {path:'/tests',component: Tests},
]

