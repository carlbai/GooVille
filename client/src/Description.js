import React, { Component } from 'react';
import Avatar from './Avatar.js';
import Follow from './Follow.js';
import PatreonButton from './PatreonButton.js';
import './Description.css';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Desktop  from 'material-ui/svg-icons/hardware/desktop-windows';

const styles = {
  svgIcons: {
    'verticalAlign': 'middle'
  },
  details: {
    'marginLeft': '10px'
  }
};

class Description extends Component {

  render() {
    return (
      <div>
        <h2> Title of Animation </h2>
        <div className="description-wrapper">
          <div className="description-avatar-wrapper">
            <Avatar className="description-avatar"/>
            <div className="creator-wrapper">
              <div className="creator">dillongoo | Published XX-XX-XX</div>
              <div>
                <Follow className="follow"/>
                <PatreonButton className="patreon"/>
              </div>
            </div>
          </div>
          <div className="description-stats">
            <div><Desktop style={styles.svgIcons}/><span className="icon-details">5000 total views</span></div>
            <div><Favorite style={styles.svgIcons}/><span className="icon-details">4000 total likes</span></div>
          </div>
        </div>
        <div className="description-content-wrapper">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper magna quis scelerisque convallis. Ut non ipsum augue. Curabitur eget tempus sem, non imperdiet nunc. Etiam eget fermentum metus. Nunc tempor dui ligula, in ullamcorper velit interdum in. Mauris lorem arcu, mattis ut tellus et, blandit ultricies ligula. Fusce tempus suscipit eros eget molestie. Curabitur et odio sem. Phasellus condimentum scelerisque massa, sit amet luctus dui tincidunt a. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas massa sapien, laoreet vitae nisi in, suscipit luctus velit. Donec ullamcorper sit amet odio efficitur hendrerit. Curabitur rhoncus vestibulum augue eu mattis. Pellentesque at mauris ut risus imperdiet posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Nam vel mollis diam. Phasellus iaculis lectus at sem placerat imperdiet. Maecenas commodo elit sed quam accumsan tincidunt. Aliquam commodo sem ut arcu auctor tincidunt. Vestibulum at enim mollis, fringilla turpis ac, bibendum sapien. Vestibulum auctor tristique imperdiet. Fusce vestibulum egestas quam, consectetur cursus augue accumsan pellentesque. Fusce dapibus augue felis, vel faucibus turpis sagittis eget.
          </p>
        </div>
      </div>
    );
  }
}

export default Description;