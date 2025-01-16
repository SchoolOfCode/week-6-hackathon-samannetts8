import { full_flag_list } from "./flag_database";
import { describe, expect, test } from "vitest";
import { filterFlag } from "./main.js";

describe("Comparing filtering on individual keys (ex. colours)", () => {
  test.each([
    [
      {
        hasStripes: true,
      },
      [
        "Argentina",
        "Canada",
        "Belgium",
        "Germany",
        "United States",
        "Ukraine",
        "Venezuela",
        "Netherlands",
        "Romania",
      ],
      full_flag_list,
    ],
    [
      {
        hasStripes: false,
      },
      [
        "China",
        "Australia",
        "United Kingdom",
        "European Union",
        "Japan",
        "Switzerland",
      ],
      full_flag_list,
    ],
  ])("An input of %o should return %o", (a, b, c) => {
    expect(filterFlag(a, c)).toEqual(b);
  });

  test.each([
    [
      {
        numberOfColors: 2,
      },
      ["Canada", "China", "Ukraine", "European Union", "Japan", "Switzerland"],
      full_flag_list,
    ],
    [
      {
        numberOfColors: 3,
      },
      [
        "Argentina",
        "Belgium",
        "Australia",
        "Germany",
        "United States",
        "United Kingdom",
        "Venezuela",
        "Netherlands",
        "Romania",
      ],
      full_flag_list,
    ],
  ])("An input of %o should return %o", (a, b, c) => {
    expect(filterFlag(a, c)).toEqual(b);
  });

  test.each([
    [
      {
        hasStars: true,
      },
      ["China", "Australia", "United States", "Venezuela", "European Union"],
      full_flag_list,
    ],
    [
      {
        hasStars: false,
      },
      [
        "Argentina",
        "Canada",
        "Belgium",
        "Germany",
        "United Kingdom",
        "Ukraine",
        "Netherlands",
        "Japan",
        "Switzerland",
        "Romania",
      ],
      full_flag_list,
    ],
  ])("An input of %o should return %o", (a, b, c) => {
    expect(filterFlag(a, c)).toEqual(b);
  });

  test.each([
    [
      {
        stripeDirection: "vertical",
      },
      ["Canada", "Belgium", "Romania"],
      full_flag_list,
    ],
    [
      {
        stripeDirection: "horizontal",
      },
      [
        "Argentina",
        "Germany",
        "United States",
        "Ukraine",
        "Venezuela",
        "Netherlands",
      ],
      full_flag_list,
    ],
    [
      {
        stripeDirection: null,
      },
      [
        "China",
        "Australia",
        "United Kingdom",
        "European Union",
        "Japan",
        "Switzerland",
      ],
      full_flag_list,
    ],
  ])("An input of %o should return %o", (a, b, c) => {
    expect(filterFlag(a, c)).toEqual(b);
  });
});

describe("Comparing filtering on multiple keys (ex. colours)", () => {
  test.each([
    [
      {
        hasStripes: true,
        numberOfColors: 3,
      },
      [
        "Argentina",
        "Belgium",
        "Germany",
        "United States",
        "Venezuela",
        "Netherlands",
        "Romania",
      ],
      full_flag_list,
    ],
  ])("An input of %o should return %o", (a, b, c) => {
    expect(filterFlag(a, c)).toEqual(b);
  });
});
