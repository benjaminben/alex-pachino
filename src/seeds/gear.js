const view = {
  path : '/gear',
  name : 'gear',
  component : 'Gear',
  content : {
    categories : [
      {
        img_url : '/assets/guitar.jpg',
        title : 'Guitar',
        groups : [
          {
            name : 'Guitars',
            text : 'Fender Stratocaster / Martin OMJM / Epiphone Masterbuilt Dreadnaught',
          },
          {
            name : 'Amps',
            text : 'Fender Hot Rod Deluxe (40w) / Fender Tweed Blues Jr. (15w) ',
          },
          {
            name : 'Pedals',
            text : `Analogman Surface / Ibanez Ts808 (Keeley Mod) / Boss Blues Driver (Keeley Mod) /
                    Keeley Katana / Ibanez CS9 / Way Huge Aqua Puss / Strymon El Capistan /
                    Strymon Flint / Line 6 DL4 / Donlop Octavio / Dunlop Cry Baby Wah /
                    Earnie Ball VP Jr. (2) / Boss Tu2 (2) `,
          },
        ],
      },
      {
        img_url : '/assets/Studio.jpg',
        title : 'Studio',
        groups : [
          {
            name : 'System',
            text : `MacBook Pro / Apogee Duet / KRK Rokit Monitors (white) /
                    ProTools 12 / Logic X / Ableton 9 /
                    Plethora of wonderful plugins`,
          },
          {
            name : 'Mics',
            text : `AKG 414 / Senhieser 421 / Shure SM57`,
          },
          {
            name : 'Instruments',
            text : `Wurlitzer 200a / OP-1 Synthesizer / PO-12 Drum Machine`,
          },
        ],
      }
    ],
  },
}

export default view;
