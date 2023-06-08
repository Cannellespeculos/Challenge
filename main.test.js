import { describe, expect, it } from "vitest";
import { maxNum } from "/main.js";

describe("calculer", () => {
    it("addition", () => {
        expect(maxNum([21, 25, 36, 86])).toBe(86)

    })
})