import Home from './views/Home'
import Login from './views/Login'
import SignUp from './views/SignUp'
import ForgetPassword from './views/ForgetPassword'
import AboutUs from './views/AboutUs'
import Tests from './views/Tests'
import TakeTest from './views/TakeTest'
import GHQTest from './views/tests/GHQTest'

export const routes = [
    {path: '', component: Home ,name:'home'},
    {path: '/login', component: Login},
    {path: '/sign-up', component: SignUp},
    {path: '/forget-pass', component: ForgetPassword},
    {path: '/about-us', component: AboutUs},
    {path: '/tests', component: Tests},
    {
        path: '/take-test', component: TakeTest,
        children: [
            {
                path: '/',
                redirect: '/tests'
            },
            {
                path: 'GHQ',
                name: 'ghqtest',
                component: GHQTest
            }]
    }
]

