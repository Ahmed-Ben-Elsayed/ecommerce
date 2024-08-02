import React from 'react'
import { Projects } from '../projects/Projects'

export const Shop = ({addTocart,addTofav}) => {
    return (
        <div>
            <Projects addTocart={addTocart}  addTofav={addTofav}/>
        </div>
    )
}
