import React, {useState, useRef} from 'react';
import {View} from 'react-native';
import {Rating} from 'react-native-rating-component';
import Icon from 'react-native-vector-icons/FontAwesome';


/** Make sure to use fill prop to apply the color of active/inactive rating */
const UIRate = ({fill}) => {
  return <View style={{backgroundColor: fill, height:10, width:10, borderRadius:2}} />
}

const RatingStar = () => {
  const [rate, setRate] = useState(2);
  return (
     <Rating
         customHeight={10} // Sets the height of the default star. (number)
         customWidth={10} // Sets the width of the default star. (number)
         fillColorActive='#5C9EAD' // Sets the color of the active rating component (custom or default). (string or hex color)
         fillColorInactive='#222823'// Sets the color of the inactive rating component (custom or default). (string or hex color)
        // minimunStars={1} // Sets the minimun of stars can be selected by user. (number)
        // starCount={5} // Sets the ammount of stars listed. (number)
        // CustomRatingComponent={<YourComponent/>} // Set your component instead of the default svg stars.
         distance={5} // Sets the distance between each star. (number)
        initialValue={rate}
        onChangeValue={(value)=> setRate(value)}
      />
  );
};

export default RatingStar;
