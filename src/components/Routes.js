/**
 * component that collects all the routes 
 */
import React from 'react'
import { Route } from 'react-router-dom'
import GameContainer from './Game/GameContainer'


export default function Routes() {
  return (
    <div className='mainContainer'>
       <Route path="/" exact component={GameContainer}/>
    </div>
  )
}