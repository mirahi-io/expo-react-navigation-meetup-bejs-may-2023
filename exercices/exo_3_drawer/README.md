# Exercise 3 - Drawer stack

In this final exercise, we will learn to implement a drawer stack along with everything we have done before.
The drawer stack allow the user to display a drawer on the right or the left of the screen, the drawer content needs to
follow the designs.

1. Create the drawer stack and add the previous stacks in it

Here, you will need to combine the drawer stack navigator and the bottom tabs stack. These two need to interact in a way
we can open the drawer from any tab of the bottom tabs stack.

2. Add a drawer content and a profile screen in the drawer stack

Next you will add the [ProfileScreen](../../src/screens/tabs/drawer/profile.tsx) to the drawer stack. You can import
that file from the `src` folder.

3. Add the public stack using what you learned from the first exercise.

You need to create a correct stack for the public routes (just the [LoginSreen](../../src/screens/login.tsx)).
Then switch from the public stack to the private stack (drawer & tab navigators) based on if the user is logged in or
not.

4. TypeScript support

Import and add the type for the drawer stack.
