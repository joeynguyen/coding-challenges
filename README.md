# coding-challenges

## Set up

To get started, run:

```sh
npm install
```

**Note**: the version of `node` used to develop and test this repo was `v14.17.6` (the latest LTS at the time of writing). `npm` version was `6.14.15`.

## Adding challenges

Add new challenges to the [/challenges](/challenges) directory.  Create a new directory for each new challenge.  Inside of the directory, there should be an **index.js** file for the challenge's explanation and solution along with a **test.js** file with test cases to test against.

## Testing the code challenges

To test all of the code at once, run:

```sh
npm test
```

To test a single test, run `npm test` followed by a few characters that `jest` can use to do a fuzzy search for find a matching test.

Examples:

- `npm test palin` matches `almost_palindrome`
- `npm test CATED` matches `duplicated_number`
- `npm test _ju` matches `tile_jumping`
