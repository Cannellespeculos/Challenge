import { describe, expect, it } from "vitest";
import { Bulle } from "/main.js";

describe("calculer", () => {
    it("addition", () => {
        expect(Bulle([21, 86, 97, 32, 14])).toBe([14, 21, 32, 86, 97])

    })
})