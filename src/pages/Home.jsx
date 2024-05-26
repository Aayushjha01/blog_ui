import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const posts= [
    {
      id:1,
      tittle:"Stoty of pie",
      description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      ,
      image:"https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg"
    },
    {
      id:2,
      tittle:"Stoty of pie",
      description:"Lady with a red umbrella",
      image:"https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg"
    },
    {
      id:3,
      tittle:"Stoty of pie",
      description:"Lady with a red umbrella",
      image:"https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg"
    },
    {
      id:4,
      tittle:"Stoty of pie",
      description:"Lady with a red umbrella",
      image:"https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg"
    },
    {
      id:5,
      tittle:"Stoty of pie",
      description:"Lady with a red umbrella",
      image:"https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg"
    }]
   
  return (
 <div className="home">
  <div className="posts">
    {posts.map((post)=>(
      <div className="post">
        <div className="img">
          <img src={post.image} alt="" />
        </div>
        <div className="content">
          <Link to={`/post/${post.id}`}><h1>{post.tittle}</h1></Link>
         <p>{post.description}</p>
         <button>Read More</button>
         


</div>
      </div>
    ))}
  </div>
 </div>
  )
}

export default Home