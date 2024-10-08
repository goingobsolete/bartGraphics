// src/sharedData.js

// Import font files
import LibreCaslonDisplayRegular from './fonts/Libre_Caslon_Display/LibreCaslonDisplay-Regular.ttf';
import LibreCaslonTextRegular from './fonts/Libre_Caslon_Text/LibreCaslonText-Regular.ttf';
import LibreCaslonTextBold from './fonts/Libre_Caslon_Text/LibreCaslonText-Bold.ttf';
import LibreCaslonTextItalic from './fonts/Libre_Caslon_Text/LibreCaslonText-Italic.ttf';

// Import image files
import pageTextureCleaned from './images/pagetexture_cleaned.png';

// Import JSON files
import testArray from './jsons/testArray.json';

// Export the imported files
export const fonts = {
  sign: LibreCaslonDisplayRegular,
  text: {
    regular: LibreCaslonTextRegular,
    bold: LibreCaslonTextBold,
    italic: LibreCaslonTextItalic
  }
};

export const images = {
  bg: pageTextureCleaned
};

export const jsons = {
  testCityList: testArray
};