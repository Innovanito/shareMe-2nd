import React, { useState, useEffect } from 'react'
import {useParams } from 'react-router-dom'

import {client} from '../client'
import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'

const Feed = () => {
const [loading, setLoading] = useState(false)
const { category} = useParams()

useEffect(() => {
  
}, [])

if(loading) return <Spinner message='we are adding new ideas to your feed!' />

  return (
    <div>
      feed
    </div>
  )
}

export default Feed
