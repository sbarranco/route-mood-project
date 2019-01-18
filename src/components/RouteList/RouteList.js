import React, {Component} from 'react';

import RouteItem from './RouteItem/RouteItem';

const PostsData = [
  {
    'mood': 'Geek',
    'title': 'CNN Acquire BEME',
    'text': 'CNN purchased Casey Neistat\'s Beme app for $25million.',
    'image': 'https://source.unsplash.com/user/erondu/600x400'
  },
  {
    'mood': 'Retro',
    'title': 'Nomad Lifestyle',
    'text': 'Learn our tips and tricks on living a nomadic lifestyle',
    'image': 'https://source.unsplash.com/user/_vickyreyes/600x400'
  },
  {
    'Mood': 'Like a Child',
    'title': 'React and the WP-API',
    'text': 'The first ever decoupled starter theme for React & the WP-API',
    'image': 'https://source.unsplash.com/user/ilyapavlov/600x400'
  },
  {
    'Mood': 'Mysterious',
    'title': 'CNN Acquire BEME',
    'text': 'CNN purchased Casey Neistat\'s Beme app for $25million.',
    'image': 'https://source.unsplash.com/user/erondu/600x400'
  },
  {
    'Mood': 'Stressed',
    'title': 'Nomad Lifestyle',
    'text': 'Learn our tips and tricks on living a nomadic lifestyle',
    'image': 'https://source.unsplash.com/user/_vickyreyes/600x400'
  },
  {
    'Mood': 'I don\'t know',
    'title': 'Nomad Lifestyle',
    'text': 'Learn our tips and tricks on living a nomadic lifestyle',
    'image': 'https://source.unsplash.com/user/_vickyreyes/600x400'
  }
];

class RouteList extends Component {
  constructor() {
    super();
    
    this.state = {
      posts: {}
    };
  }
  ComponentWillMount() {
    this.setState({
      posts: PostsData
    });
  }

  render() {
    
    return (
      <div className="route-list">
        <h1>RouteList</h1>
        <div className="app-card-list" id="app-card-list">
          {
            Object
              .keys(this.state.posts)
              .map(key => <RouteItem key={key} index={key} details={this.state.posts[key]}/>)
          }
        </div>
      </div>
    );
  }
}

export default RouteList;