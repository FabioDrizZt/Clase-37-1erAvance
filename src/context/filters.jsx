import { createContext, useState } from 'react'
//3 Pasos --> Crearlo, proveerlo y consumirlo

// Este va a ser el que tenemos que consumir
export const FiltersContext = createContext()

// El que nos provee de acceso al contexto
export function FiltersProvider({ children }) {
  // Aquí se van a guardar los filtros
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
