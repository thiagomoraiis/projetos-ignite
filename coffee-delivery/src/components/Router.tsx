import { Route, Routes } from 'react-router-dom'
import { Layout } from '../layouts/Layout'
import { Home } from './Home'
import { Cart } from './Cart'
import { Success } from './Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
