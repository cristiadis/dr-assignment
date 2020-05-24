import * as React from 'react';
import { Spot as SpotProps } from '../../state/themeSpots/types';
import { ReactComponent as PauseIcon } from '../../assets/icons/pause.svg';
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import { ReactComponent as StopIcon } from '../../assets/icons/stop.svg';

interface ComponentProps {
  spot: SpotProps;
}

const PlayButton: React.FC<ComponentProps> = (props) => {
  const { spot } = props;

  return (
    <button
      className='play-button'
      data-play={ spot.ParentUrn }
      data-play-parent={ spot.ParentUrn }
      data-play-islive='false'
      data-play-slug={ spot.PrimaryChannelSlug }
      data-play-totalduration='1677984'
      aria-label={`Afspil ${ spot.ParentTitle } - ${ spot.Title }`}
      title={`Afspil ${ spot.ParentTitle } - ${ spot.Title }`}
      data-play-start='0'
    >
      <div className='play-button__icon'>
        <svg className='play-button__icon__progress'>
          <circle className='play-button__icon__progress__circle --play-button-progress-svgcircle' stroke='#fff' strokeWidth='3.7' fillOpacity='0'/>
        </svg>
        <svg className='play-button__icon__progress__border'>
          <circle className='play-button__icon__progress__border__circle --play-button-progress-svgcircle' strokeWidth='3' fillOpacity='0'/>
        </svg>
        <span className='icon-play'>
          <div className='dre-icon dre-icon--medium-xxs' style={{color:'#ffffff'}}>
            <PlayIcon />
          </div>
        </span>
        <span className='icon-pause'>
          <div className='dre-icon dre-icon--medium-xxs' style={{color:'#ffffff'}}>
            <PauseIcon />
          </div>
        </span>
        <span className='icon-stop'>
          <div className='dre-icon dre-icon--medium-xxs' style={{color:'#ffffff'}}>
            <StopIcon />
          </div>
        </span>
      </div>
    </button>
  );
};

export default PlayButton;
