import React from 'react'
import useFilters from '../hooks/useFilters'

export default function Footer() {
  const { filters } = useFilters()
  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 2)}
      <h4>e-commerce con carrito</h4>
    </footer>
  )
}
