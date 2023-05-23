# Navigation in a React Native application with React Navigation

## Background

Navigation is an essential functionality in any applications, React Navigation has been the go to library when it comes
to navigation. Throughout this workshop, you will learn how to implement different types of navigation stacks, how to
navigate between your application screens and more.

## How to do the exercises

You will go from the 1st exercise through the last one, in every exercises folder you will see a `README.md` file, read
it before starting the exercise, everything you need to know his written there.

Throughout the exercises, you will have to import components and types from the [src](./src) folder. This folder contain
the
final version of the application, if you don't want to spoil yourself, you should not take a loot in this folder until
you have finished all the exercises.

In the exercise file, for example [Exo1.tsx](./exercices/exo_1_native_stack/Exo1.tsx), you will find instructions with
emojis, those emojis have different
significations:

- 🐨 You will have to write code here based on the instruction
- 📝 Side note for your knowledge
- 💥 Delete the code below this emoji

Don't forget to update the component to render inside the [root.tsx](./exercices/root.tsx) file when you are working on
an exercise, for
example if you are working on the first exercise your [root.tsx](./exercices/root.tsx) file should look like this:

```js
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
```

When you are finished with an exercise, ask one of the speakers to take a look at your code, if everything looks good
you will be able to move on to the next one.

If you are stuck, don't go straight to the solution, first ask a speaker for help.
You also should take a look at the
official [React Navigation documentation](https://reactnavigation.org/docs/getting-started)

[You can start the first exercise here!](./exercices/exo_1_native_stack/README.md)

## Challenges

For every exercise you will also find challenges, those are not mandatory, but we encourage you to at least try them 💪
