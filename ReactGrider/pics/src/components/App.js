import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component
{
 state = { images: [] };

 async onSearchSubmit(term)
  {
    const response = await axios
    .get('https://api.unsplash.com/search/photos', 
    {
      params:
      {
        query: term
      },
      headers:
      {
        Authorization: 'Client-ID 02861f565eb98fb2495f2402643d4ff1e5038d549fb7b8e74c4b6e0a49212035'
      }
    });
    this.setState({ images: response.data.results });
  }

  render()
  {
    return(
      <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
      </div>
    ); 
  }
}

export default App;
