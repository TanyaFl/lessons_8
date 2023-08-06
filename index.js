function pow(x, n) {
  if (n === 0) {
    return 1;
  }

  if (x === 0 && n > 0) {
    return 0;
  }

  return n > 0 ? x * pow(x, n - 1) : pow(x, n + 1) / x;
}
