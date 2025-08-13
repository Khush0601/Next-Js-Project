import React from 'react'

export default async function MealDetailspage({params}) {
    const {slug} =await params
  return (
    <div>slug:{params.slug}</div>
  )
}
