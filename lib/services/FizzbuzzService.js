class FizzbuzzService {
  static applyValidationInExplorer(explorer) {
    if (explorer.score % 15 === 0) {
      explorer.trick = "FIZZBUZZ";
    } else if (explorer.score % 3 === 0) {
      explorer.trick = "FIZZ";
    } else if (explorer.score % 3 === 5) {
      explorer.trick = "BUZZ";
    } else {
      explorer.trick = explorer.score;
    }
  }
}
