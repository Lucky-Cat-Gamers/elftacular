import React from 'react';

import Flame           from '../../components/flame';
import { SPRITE_SIZE } from '../../config/constants';

const MapTile = ({ tile, index, sightBox }) => {

  let inSight = false;
  // if you need to render the sightBox
  if(sightBox) {
    // check the sight box tiles
    sightBox.forEach(sightValue => {
      // if the current tile is in range
      if(JSON.stringify(sightValue) === JSON.stringify(index)) {
        // remove the overlay
        return inSight = true;
      }
    });
  }
  // case for rendering animated flame tile
  if(tile.value === 20) {
    return (
      <GroundTile variation={tile.variation}>
        <Flame position={index}>
          <FogTile explored={tile.explored} inSight={inSight} />
        </Flame>
      </GroundTile>
    );
  }
  // case for rendering normal tiles
  return (
    <GroundTile variation={tile.variation}>
      <div style={{
        backgroundImage: `url(/tiles/${getTileSprite(tile.value, tile.variation)}.png)`,
        height: SPRITE_SIZE,
        width: SPRITE_SIZE
      }}>
        <FogTile explored={tile.explored} inSight={inSight} />
      </div>
    </GroundTile>
  );
};

export function getTileSprite(type, variation) {
  switch(type) {
    case -2:
      return 'chest-open';
    case -1:
      return 'blood-splatter';
    case 0:
      return `ground-${variation}`;
    case 2:
      return 'stairs-down';
    case 3:
      return 'stairs-up';
    case 4:
      return 'chest';
    case 5:
      return `snow-${variation}`;
    case 6:
      return `ornate-wall-${variation}`;
    case 7:
      return `blue-wall-${variation}`;
    case 8:
      return `skull-wall-${variation}`;
    case 9:
      return 'shop';
    case 10:
      return 'shrine';
    case 11:
      return 'mailbox';
    case 12:
      return 'xmastree1';
    case 13:
      return 'xmastree2';
    case 14:
      return 'xmastree3';
    case 15:
      return 'xmastree4';
    case 16:
      return 'northpolesign4';
    case 17:
      return 'tower';
    case 18:
      return 'castle';
    case 19:
      return 'igloo';
    case 21:
      return 'snowcottage';
    case 22:
      return 'cottage3';
    case 23:
      return 'candycottage';
    case 24:
      return 'cottage7';
    case 25:
      return 'cottage6';
    case 26:
      return 'cottage1';
    case 27:
      return 'santa1';
    case 28:
      return 'snowman1';
    case 29:
      return 'snowman2';
    case 30:
      return 'snowman3';
    case 31:
      return 'snowman4';
    case 32:
      return 'teddybear';
    case 33:
      return 'santa2';
    case 34:
      return 'snowglobe1';
    case 35:
      return 'snowglobe2';
    case 36:
      return 'snowglobe3';
    case 37:
      return 'snowglobe4';
    case 38:
      return 'train1';
    case 39:
      return 'train2';
    case 40:
      return 'train3';
    case 41:
      return 'bear1b';
    case 42:
      return 'fox3';
    case 43:
      return 'fox4';
    case 44:
      return 'bunny';
    case 45:
      return 'squirrel';
    case 46:
      return 'reindeer2';
    case 47:
      return 'reindeer3';
    case 48:
      return 'reindeer4';
    case 49:
      return 'yeti1';
    case 50:
      return 'reindeer';
    case 51:
      return 'elf1';
    case 52:
      return 'elf2';
    case 53:
      return 'elf3';
    case 54:
      return 'elf5';
    case 55:
      return 'elf6';
    case 56:
      return 'elf11';
    case 57:
      return 'sleigh';
    case 58:
      return 'sleigh3';
    case 59:
      return 'sleigh5';
    case 60:
      return 'lamp1';
    case 61:
      return 'lamp6';
    case 62:
      return 'lamp7';
    case 63:
      return 'lamp8';
    case 64:
      return 'lamp9';
    case 65:
      return 'lamp10';
    case 66:
      return 'fence';
  
    default:
  }
}

export const FogTile = ({ inSight, explored }) => {
  // show the tile by default
  let opacity = '0';
  // if the tile is out of sight, show faded
  if(!inSight) opacity = '0.5';
  // if the tile is unexplored, hide it
  if(!explored) opacity = '1';
  // render fog tiles
  return (
    <div style={{
      backgroundColor: '#000',
      opacity,
      display: 'inline-flex',
      height: SPRITE_SIZE,
      width: SPRITE_SIZE,
      transition: 'opacity .5s linear'
    }} />
  );
};

const GroundTile = ({ variation, children }) => {
  return (
    <div style={{
      backgroundImage: `url('/tiles/ground-${variation}.png')`,
      display: 'inline-flex',
      height: SPRITE_SIZE,
      width: SPRITE_SIZE
    }}>
      { children }
    </div>
  );
};

export default MapTile;