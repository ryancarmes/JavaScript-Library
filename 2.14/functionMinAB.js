function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  min(2, 5)

// '?' variant
  function min(a, b) {
    return a < b ? a : b;
  }

  min(3, -1)