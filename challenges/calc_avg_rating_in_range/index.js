// You are trying to discover the best recipe for brewing coffee. Below is an array of trials with ratings.
// `water` and `coffee` are both measures of the mass of the water and coffee used, respectively. `rating`
// is a score of how much you liked that brew.  The ratio of the coffee to water is important, and it is calculated simply as `coffee / water`
// write the implementation of `calcAverageRating()` that calculates the average rating for trials within a range of ratios. The range is provided by the isRatioInRange predicate.
const trials = [
    {water: 250, coffee: 15, temp: 96, rating: 4.5},
    {water: 240, coffee: 14, temp: 98, rating: 3.7},
    {water: 247, coffee: 14, temp: 94, rating: 4.2},
    {water: 261, coffee: 16, temp: 99, rating: 3.4},
    {water: 250, coffee: 13.5, temp: 93, rating: 2.7},
    {water: 255, coffee: 17, temp: 94.5, rating: 3.1},
]
const isRatioInRange = ratio => ratio >= 0.055 && ratio <= 0.06;
const averageRating = calcAverageRating(trials, isRatioInRange);
