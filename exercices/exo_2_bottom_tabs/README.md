# Exercise 2 - Bottom tabs stack

In the previous exercise, we learned to implement a native stack, in this exercise we will discover an other stack, the
bottom tabs stacks. This type of stack display a footer with a set of icons which represent each tab available in the
stack.

1. Create the bottom tabs stack and implement the first three screens

To begin with, you are going to create a bottom tabs stack and add the following three screens which you can import from
the `src` folder: `HomeScreen`, `CategoriesScreen` and `CartScreen`

2. Integrate a nested native stack inside the bottom tabs stack

Like in the previous exercise, changes the `CategoriesScreen` to be a nested native stack (BrowseStack) inside the
bottom tabs stack.
This native stack should contain the following two screens which you can import from the `src`
folder: `CategoriesScreen` and `CategoryScreen`

3. Add two modals in the nested native stack

Now you can add the two remaining screens `RestaurantScreen` and `FoodDetailScreen` from `src` folder, they should
behave as modals.

4. Integrate TypeScript !

Now add typing to your stacks, you can import the types from `src/types`, don't hesitate to take a look on how the
typing is made.
