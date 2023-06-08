import { describe, expect, it } from "vitest";
import { positive } from "/main.js";

describe("calculer", () => {
    it("addition", () => {
        expect(positive(45)).toBe(true)

    })
})