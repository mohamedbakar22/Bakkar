import MovieCard from './MovieCard'
import Paginate from './Paginate'

function MoviesList({movies , getPage}) {
  return (
    <section className='py-5 container'>
      <div className='row'>
        {
        movies.map((item)=>{
          return(<MovieCard key={item.id} movie={item}/>) 
        })
        }
        
      </div>
      <Paginate getPage={getPage}/>
    </section>
  )
}

export default MoviesList