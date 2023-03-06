import { AppContext } from '@/context/AppProvider';
import React, { useContext } from 'react'


const useApp = () => {
    return useContext(AppContext)
}
 
export default useApp;