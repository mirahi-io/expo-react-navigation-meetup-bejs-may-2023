import { NavigationContainer } from '@react-navigation/native';

import { Exo1 } from './exo_1_native_stack';

// 🐨 Uncomment the component corresponding to the exercise you are working or the solution you want to see.
// You may need to reload the app when switching components, do that by focusing your simulator and by pressing R

export const RootStack = () => {
  return (
    <NavigationContainer>
      {/* **** Exercise 1 **** */}
      <Exo1 />
      {/*<Exo1Solution />*/}
      {/*<Exo1Challenges />*/}
      {/*<Exo1ChallengesSolution />*/}
      {/* **** Exercise 2 **** */}
      {/*<Exo2 />*/}
      {/*<Exo2Solution />*/}
      {/*<Exo2Challenges />*/}
      {/*<Exo2ChallengesSolution />*/}
      {/* **** Exercise 3 **** */}
      {/*<Exo3 />*/}
      {/*<Exo3Solution />*/}
      {/*<Exo3Challenges />*/}
      {/*<Exo3ChallengesSolution />*/}
      {/* **** Exercise 4 **** */}
      {/*<Exo4 />*/}
      {/*<Exo4Solution />*/}
    </NavigationContainer>
  );
};
