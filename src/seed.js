import home from './seeds/home';
import credits from './seeds/credits';
import media from './seeds/media';
import solo from './seeds/solo';
// import gear from './seeds/gear';

const seed = {
  views : {
    home : home,
    credits : credits,
    solo : solo,
    media : media,
    // gear : gear,
  },
}

export default seed;
