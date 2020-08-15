import React from 'react';
import { DeployedIcon, VideoIcon, RepositoryIcon } from '../common/icons.jsx';

export default class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='project-card'>
        <img class='project-card-image' src={this.props.data.imageUrl}/>
        <div class='project-card-text'>
          <p class='project-card-title'>{this.props.data.title}</p>
          <p class='project-card-description'>{this.props.data.description}</p>
        </div>
          <div class='project-icon-row'>
          {this.props.data.deployUrl && (<a href={this.props.data.deployUrl} title='Deployed'>
                                        <DeployedIcon className='project-icon'/>
                                      </a>)}

          {this.props.data.videosUrl && (<a href={this.props.data.videosUrl} title='Deployed'>
                                        <VideoIcon className='project-icon'/>
                                      </a>)}

          {this.props.data.githubUrl && (<a href={this.props.data.githubUrl} title='GitHub Repository'>
                                        <RepositoryIcon className='project-icon'/>
                                      </a>)}
          </div>
      </div>
    );
  }
}
