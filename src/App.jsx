import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import CartDrawer from './components/cart/CartDrawer'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import HampersPage from './pages/HampersPage'
import BuildYourBoxPage from './pages/BuildYourBoxPage'
import ArtisansPage from './pages/ArtisansPage'
import CorporatePage from './pages/CorporatePage'
import NotFoundPage from './pages/NotFoundPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppShell() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <CartDrawer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/hampers" element={<HampersPage />} />
        <Route path="/build" element={<BuildYourBoxPage />} />
        <Route path="/artisans" element={<ArtisansPage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  )
}
