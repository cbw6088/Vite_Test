import styled from 'styled-components'
import TopBar from './components/bar/topBar'
import LoginPage from './pages/login/loginPage'
import MainPage from './pages/main/mainPage.tsx'

import { Route, Routes } from 'react-router-dom'


function App() {
    
    return (
        <>
            <TopBar/>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path='/login' element={<LoginPage/>} />
            </Routes>
        </>
    )
}

export default App
