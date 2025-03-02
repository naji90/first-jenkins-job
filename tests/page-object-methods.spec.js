import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");

  // pause for three seconds.
  // await page.waitForTimeout(3000);

  let actulalTitle = await page.title();

  console.log(actulalTitle);
});

test("Getting the current url of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");

  let actualURL = page.url();

  console.log(actualURL);
});


test("Set the window size", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");

    await page.waitForTimeout(3000);

    // await page.setViewportSize({ width: 1280, height: 720 });
    // await page.waitForTimeout(3000);


});
