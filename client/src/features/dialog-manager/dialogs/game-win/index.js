import React       from 'react';
import { connect } from 'react-redux';

import Button         from '../../../../components/button';
import Dialog         from '../../../../components/dialog';
import resetGameState from '../../../world/actions/reset-game-state';
import closeDialog    from '../../actions/close-dialog';

import './styles.scss';

const GameWin = ({ monsters, resetGameState, closeDialog }) => {

  const { components } = monsters;
  let monstersRemain = false;
  // check monsters by map
  Object.keys(components).forEach(mapId => {
    // see if there are any monsters on any maps
    if(Object.keys(components[mapId]).length > 0) {
      monstersRemain = true;
    }
  });

  // don't allow the player to win if any monsters remain
  return(
    <Dialog>
      {
        monstersRemain ?
          <>
            <span className='flex-row game-win__title'>
              {'Oh no, you missed one!'}
            </span>

            <span className='flex-column game-win__text'>
              {'You can only rescue Santa after you have wiped out all the bad guys. See if you can find the one that was hiding!'}
            </span>

            <div className='flex-row game-win__button'>
              <Button
                onClick={closeDialog}
                icon='reply'
                title={'Return to Game'} />
            </div>
          </>
          :
          <>
            <span className='flex-column game-win__text'>
              {'The ropes holding Santa fall away and he stands up with a spring in his step. "Good job, Merryweather, you have my thanks! Now I must dash, Christmas Eve and all that!"'}
            </span>

            <div className='flex-row game-win__button'>
              <Button
                onClick={resetGameState}
                icon='sync'
                title={'Play Again'} />
            </div>
          </>
      }
    </Dialog>
  );
};

const mapStateToProps = ({ monsters }) => ({ monsters });

const actions = { resetGameState, closeDialog };

export default connect(mapStateToProps, actions)(GameWin);
