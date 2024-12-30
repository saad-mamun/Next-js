import { NextPage } from 'next'
import React from 'react'

interface IProps {
    params: {id:string}
}

const BlogPageId: NextPage<IProps> = ({params}) => {
    console.log("🎈 ~ Blogpage ~ props", { id: params.id});
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <h1 className='text-7xl font-bold text-blue-500'>blog id {params.id}</h1>
    </div>
  )
}

export default BlogPageId
