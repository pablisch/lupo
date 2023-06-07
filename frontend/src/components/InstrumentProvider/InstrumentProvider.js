import React, { createContext, useState } from 'react'

export const InstrumentContext = createContext({})

const InstrumentProvider = ({ children }) => {
  const [currentInstrument, setCurrentInstrument] = useState("strings");

  return (
    <InstrumentContext.Provider value={{currentInstrument, setCurrentInstrument}}>
      {children}
    </InstrumentContext.Provider>
  )
}

export default InstrumentProvider;