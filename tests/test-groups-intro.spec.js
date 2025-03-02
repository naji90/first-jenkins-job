import { test } from "@playwright/test";

test.describe("User story", () => {
    test.beforeAll(async () => {
        console.log("Before All Test Cases Execution...");
      });

      test.afterAll(async () => {
        console.log("After All Test Cases Execution...");
      });

    test.beforeEach(async () => {
        console.log("Before Each Test Case Execution...");
      });

      test.afterEach(async () => {
        console.log("After Each Test Case Execution...");
      });
    
  test("Test Case 1", async () => {
    console.log("Test Case 1 is executing...");
  });

  test("Test Case 2", async () => {
    console.log("Test Case 2 is executing...");
  });

  test("Test Case 3", async () => {
    console.log("Test Case 3 is executing...");
  });

  test("Test Case 4", async () => {
    console.log("Test Case 4 is executing...");
  });

});