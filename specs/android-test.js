describe("Proverbial APK", () => {
  it("Changes color and scrolls to a specific country", async () => {
    try {
      // Find the "Registration code" input field by XPath
      const registrationCodeInput = await $("//*[@content-desc='Select your country']");
      await registrationCodeInput.waitForDisplayed({ timeout: 10000 });

      // Change the color of the input field (you can replace this with your actual color-changing code)
      await registrationCodeInput.click();

      // Define the XPath for the country element you want to scroll to
      const countryXPath = "//*[@content-desc='Polanda']";

      // Define a function to check if an element is visible
      async function isElementVisible(xpath) {
        const element = await driver.$(xpath);
        return await element.isDisplayed();
      }

      while (!await isElementVisible(countryXPath)) {
        // Determine start and end coordinates for the scroll
        const startX = 300; // Starting X-coordinate
        const startY = 1000; // Starting Y-coordinate
        const endX = 300; // Ending X-coordinate (same as start for a simple scroll)
        const endY = 500; // Ending Y-coordinate

        // Perform the scroll using touchAction
        await driver.touchAction([
          { action: 'press', x: startX, y: startY },
          { action: 'wait', ms: 1000 }, // Wait for a second
          { action: 'moveTo', x: endX, y: endY },
          { action: 'release' }
        ]);

        console.log("Scrolling...");

        // You can also introduce a timeout to prevent infinite looping
        // await new Promise(resolve => setTimeout(resolve, 5000)); // 5-second delay, adjust as needed
      }

      // Rest of your test code
      // ...

    } catch (error) {
      console.error("An error occurred:", error);
    }
  });
});
