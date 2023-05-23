# Exercise 1 - Create a native stack

In this exercise we will learn how to simply navigate between screens.

This exercise contains multiple parts:

1. Connect three screens in a native stack, navigate between them by pressing a button

There are multiple screens in the [Exo1](./Exo1.tsx) file, you need to enable navigation between
the `HomeScreen`, `CategoriesScreen` and `CartScreen`.

2. Nest two stacks, one screen will contain a new native stack that defines a fourth new screen

Now `CategoriesScreen` is part of a second native stack with `CategoryScreen` and `RestaurantScreen`.
You need to nest this new stack inside the previous one, this way these new screens
are only accessible when the user navigates to the entry point of the new stack (`CategoriesScreen`).

3. Open a modal screen inside this stack

The remaining two screens are a part of the nested stack (categories>category>restaurant). These are not regular screens
they will need to appear as modals.

4. Integrate TypeScript !

We have a basic routing app, now you need to define its structure through TS.

---

In the next exercise we will go deeper and learn to structure your screens with bottom tabs !
