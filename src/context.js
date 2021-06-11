import React, { useState, useContext,useRef } from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setisSidebarOpen] = useState(false)
    const sideRef = useRef(null)

    const openSidebar = () => {
        setisSidebarOpen(true)
    }

    const closeSidebar = () =>{
        setisSidebarOpen(false)
    }

    const checkRef = (e) => {
        if (sideRef.current != null && e.target !== sideRef.current) {
            closeSidebar()
        }
    }

    return (
        <AppContext.Provider
            value={{
                isSidebarOpen,
                openSidebar,
                closeSidebar,
                sideRef,
                checkRef
                }}>
                    {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
  export { AppContext, AppProvider };