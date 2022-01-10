import React ,{createContext} from 'react'
import {useSelector} from 'react-redux'
import ContactCard from './ContactCard'
import Recent from './Recent';

const ContextName =  createContext();
const ContextMobile = createContext();

function AllContacts(){
    
    const contacts = useSelector(state => state.allContacts)
  
    return (
        
        <div>
            {
                   contacts.map(element => {             
                    return (<ContactCard name={element.name} mobile={element.mobile} isFav={element.isFav} id={element.id}/>)
               
                })
            }
                
        </div>
     );
    
}   

const Con = (props) => {
    const contacts = useSelector(state => state.allContacts)
  
    return(
        <div>
            {
                    contacts.map(element => {
                        return( <ContextName.Provider value={element.name}>
                            <ContextMobile.Provider value={element.mobile}>
                                <Recent/>
                            </ContextMobile.Provider>
                            </ContextName.Provider>)
                        })   
            }
        </div>
    )
}
export default AllContacts ;
export {ContextName , ContextMobile };