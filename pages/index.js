import { connectToDatabase } from '../util/mongodb'

import Movie from '../components/Movie'

export default function Home({ properties }) {
  
  return (
    <Movie properties={properties}/>
  )
}

export async function getStaticProps(context) {
  const { db } = await connectToDatabase()

  const data = await db.collection('movies').find(
    { $and: [ 
      { "poster": { $exists:true } },
      { 'tomatoes.viewer.meter' : { $gte: 90 } } ]
    }).sort({year:-1}).limit(10).toArray();
  const properties = data.map(property => {
    return {
      id: property._id.toString(),
      title: property.title,
      plot: property.plot ? property.plot: 'plot not available...',
      poster: property.poster
    }
  })
  return {
    props: { properties },
  }
}
