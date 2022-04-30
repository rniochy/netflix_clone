import Nav from '../components/nav';
import Banner from '../components/banner';
import Row from '../components/row';
import requests from './assets/requests';

export default function Home() {



  return (
         <div className="global">
           <Nav/>
           <Banner/>
          <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
          <Row title='Trending now' fetchUrl={requests.fetchTrending}/>
          <Row title='TopRated' fetchUrl={requests.fetchTopRated}/>
          <Row title='ActionMovies' fetchUrl={requests.fetchActionMovies}/>
          <Row title='Trending now' fetchUrl={requests.fetchComedyMovies}/>
          <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
          <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
          <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>


         </div>  
  );
}

