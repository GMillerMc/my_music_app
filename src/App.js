import React from 'react';
import { Layout } from './layout';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Pages.Home />} />
            <Route path="about" element={<Pages.About />} />
            <Route path="music" element={<Pages.Music />} />
            <Route path="events" element={<Pages.Events />} />
        
        </Route>
    </Routes>
    )
}
export default App
