# Exercise 4 - Authentication with React Navigation

In this first exercise, you will first learn how to handle authentication with React Navigation. You won't need to
actually code the authentication process because this is not the point of the exercise, for your interest, the
authentication process has been developed with [nanostores](https://github.com/nanostores/nanostores)
and [AsyncStorage](https://github.com/react-native-async-storage/async-storage), you can take a look at the
code [here](../../src/stores/identity.ts)

You will import the hook `useIdentity` inside your root component and based on the `identity` property, render the
correct stack.
`<PublicStack />` if `identity` is undefined and `<DrawerStack />` for the other case.

The point here is to see how React Navigation simply handle the transition between a public and a private stack.

The `PublicStack` will only contain the login screen found here: [LoginScreen](../../src/screens/login.tsx).

The `DrawerStack` is the app you have build until now.
