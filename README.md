# coding-challenges

## Set up

To get started, run:

```sh
npm install
```

## Adding challenges

Add new challenges to the [/challenges](/challenges) directory.  Create a new directory for each new challenge.  Inside of the directory, there should be an **index.js** file for the challenge's explanation and solution along with a **test.js** file with test cases to test against.

## Testing the code challenges

To test all of the code at once, run:

```sh
npm test
```

To test a single test, run `npm test` followed by a few characters that `jest` can use to do a fuzzy search for find a matching test.

Examples:

- `npm test palin` matched `almost_palindrome`
- `npm test CATED` matched `duplicated_number`
- `npm test _ju` matched `tile_jumping`
