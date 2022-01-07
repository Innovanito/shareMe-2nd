import React, { useState, useEffect } from 'react'
import {useParams } from 'react-router-dom'

import { client } from '../client'
import { searchQuery } from '../utils/data'
import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'

const Feed = () => {
  const [loading, setLoading] = useState(false)
  const [pins, setPins] = useState()
const { categoryId } = useParams()

useEffect(() => {
  if (categoryId) { 
    setLoading(true)

    if (categoryId) {
      const query = searchQuery(categoryId)

      client.fetch(query)
        .then((data) => {
          setPins(data)
          setLoading(false)
        })
    }
  } else {

  }
}, [])

if(loading) return <Spinner message='we are adding new ideas to your feed!' />

  return (
    <div>
      feed
    </div>
  )
}

export default Feed
