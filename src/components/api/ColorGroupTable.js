import React from "react";

const ColorGroupTable = () => {
  return (
    <>
      <h4>Check out this table to query over "colorGroup"</h4>
      <p>
        the 'Hex Code' table gather all the colors participating in that group
        name
      </p>
      <table>
        <thead>
          <tr>
            <th>Color Name</th>
            <th>Description</th>
            <th>Hex Codes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>antiquewhite</td>
            <td>Creamy Off-White</td>
            <td>#EEE7D8</td>
          </tr>
          <tr>
            <td>black</td>
            <td>Pure Black</td>
            <td></td>
          </tr>
          <tr>
            <td>brown</td>
            <td>Rich Earthy Brown</td>
            <td>#871922, #972C3F, #9E222C, #AD1E34</td>
          </tr>
          <tr>
            <td>burlywood</td>
            <td>Warm Medium Tan</td>
            <td>#EBC669, #F0C57F</td>
          </tr>
          <tr>
            <td>coral</td>
            <td>Vibrant Pinkish-Orange</td>
            <td>#EE734A</td>
          </tr>
          <tr>
            <td>crimson</td>
            <td>Deep Vivid Red</td>
            <td>#c4293e</td>
          </tr>
          <tr>
            <td>darkgray</td>
            <td>Dark Steel Gray</td>
            <td>#B598AF</td>
          </tr>
          <tr>
            <td>darkgreen</td>
            <td>Deep Forest Green</td>
            <td>#264D16</td>
          </tr>
          <tr>
            <td>darkkhaki</td>
            <td>Olive Greenish-Brown</td>
            <td>#D5DC55, #c8cf65</td>
          </tr>
          <tr>
            <td>darksalmon</td>
            <td>Faded Pink-Orange</td>
            <td>#E6986B</td>
          </tr>
          <tr>
            <td>darkseagreen</td>
            <td>Muted Green with Gray Tint</td>
            <td>#83AD5C</td>
          </tr>
          <tr>
            <td>darkslategray</td>
            <td>Dark Grayish-Blue</td>
            <td>#022F34, #293656, #402427, #553E5C, #5B3640</td>
          </tr>
          <tr>
            <td>dimgray</td>
            <td>Medium-Dark Gray</td>
            <td>#4F657C, #655277</td>
          </tr>
          <tr>
            <td>firebrick</td>
            <td>Deep Brick Red</td>
            <td>#B11F29, #C02032</td>
          </tr>
          <tr>
            <td>forestgreen</td>
            <td>Classic Pine Green</td>
            <td>#0E7534, #2B9B39, #3C812A</td>
          </tr>
          <tr>
            <td>gainsboro</td>
            <td>Very Light Gray</td>
            <td>#E1DFE1, #E5DCD5</td>
          </tr>
          <tr>
            <td>gold</td>
            <td>Bright Metallic Gold</td>
            <td>#F1C720, #F6D334, #F9D501, #FFE92D</td>
          </tr>
          <tr>
            <td>goldenrod</td>
            <td>Earthy Yellow-Brown</td>
            <td>
              #CCA42C, #D1CA3D, #D6BA03, #E5932E, #F99B25, #FAA538, #f99b24
            </td>
          </tr>
          <tr>
            <td>indianred</td>
            <td>Dusty Red Earth</td>
            <td>#9C4B6F, #B95A66, #DD4B62, #da566a</td>
          </tr>
          <tr>
            <td>khaki</td>
            <td>Light Tan Brown</td>
            <td>#C2E189, #CEDC91, #EFE393, #FADF50, #FDE96C</td>
          </tr>
          <tr>
            <td>lightgray</td>
            <td>Pale Silver Gray</td>
            <td>#CED8C2, #D2D0CE</td>
          </tr>
          <tr>
            <td>lightpink</td>
            <td>Soft Baby Pink</td>
            <td>#E3ACBD, #E798AB, #EFB3CB, #FF9BB3</td>
          </tr>
          <tr>
            <td>lightsalmon</td>
            <td>Light Peachy Orange</td>
            <td>#F79C72</td>
          </tr>
          <tr>
            <td>peru</td>
            <td>Warm Earthy Orange-Brown</td>
            <td>#AD7E47, #D48840, #EB8435, #ba815c, #c2864b</td>
          </tr>
          <tr>
            <td>pink</td>
            <td>Soft Light Pink</td>
            <td>#F9CAC8</td>
          </tr>
          <tr>
            <td>rosybrown</td>
            <td>Muted Pink-Brown</td>
            <td>#CD8784</td>
          </tr>
          <tr>
            <td>saddlebrown</td>
            <td>Dark Brown with Red Tint</td>
            <td>#5A262A, #602825, #792E27</td>
          </tr>
          <tr>
            <td>sandybrown</td>
            <td>Medium Sand Brown</td>
            <td>#EBAC4A, #F6A763, #FCB76C, #e9d443</td>
          </tr>
          <tr>
            <td>seagreen</td>
            <td>Deep Green-Blue</td>
            <td>#03ad50</td>
          </tr>
          <tr>
            <td>sienna</td>
            <td>Burnt Orange-Brown</td>
            <td>#91484c</td>
          </tr>
          <tr>
            <td>silver</td>
            <td>Shiny Light Gray</td>
            <td>#CCB7C3, #D8C6AB</td>
          </tr>
          <tr>
            <td>steelblue</td>
            <td>Grayish-Blue Steel</td>
            <td>#3A7195, #3D7889, #3a7295</td>
          </tr>
          <tr>
            <td>tan</td>
            <td>Warm Light Brown</td>
            <td>#E19E9F</td>
          </tr>
          <tr>
            <td>teal</td>
            <td>Dark Greenish-Blue</td>
            <td>#00798B, #03698B, #085881</td>
          </tr>
          <tr>
            <td>wheat</td>
            <td>Light Golden Tan</td>
            <td>#E9CCAD</td>
          </tr>
          <tr>
            <td>yellowgreen</td>
            <td>Bright Yellowish-Green</td>
            <td>#7EB159, #8EBF14, #AAAE45</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ColorGroupTable;
