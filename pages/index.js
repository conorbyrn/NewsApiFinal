// This is the Link API
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'

// Pass this content as 'props' to child components
const Index = props => (
  <div>
  <h1>News site using News API</h1>
  <p>Pick your starting news source</p>



  <h2>Search All Sources</h2>
  <form action="/search">
    <input type="text" name="s" />
    <input type="submit" value="Submit"></input>
  </form>
  </div>
);
export default Index