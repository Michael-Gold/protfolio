import React,{createContext} from 'react';
export const contactValue = createContext(); 
export default function UserProvider({children}){   
  let userValue = {
    name: 'Michael',
    age: 32,
    mobile: 8220663018,
    userBanner: false,
  }
  return(
    <contactValue.Provider value={userValue}>
        {children}
    </contactValue.Provider>
  )
}