import { test, expect } from "@playwright/test";

test("meta is correct", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Gummientchen");
});

test("has 'Gamertags' section", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Gamertags.")).toBeVisible();
});

test("has 'Games' section", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Games.")).toBeVisible();
});

test("has 'Hype' section", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Hype.")).toBeVisible();
});

test("has 'Social' section", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Social.")).toBeVisible();
});

test("has 'Rig' section", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Rig.")).toBeVisible();
});

test("'Rig' has link to pcpartpicker", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Rig.")).toBeVisible();

  const rigLink = page.getByText("full specs");
  await expect(rigLink).toBeVisible();
  await expect(rigLink).toHaveAttribute("target", "_blank");
  await expect(rigLink).toHaveAttribute("rel", "noopener");
});

test("has correct footer section", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByText(
      "All product names, logos, and brands are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement."
    )
  ).toBeVisible();

  await expect(page.getByText("Clouds in Background from")).toBeVisible();
  await expect(page.getByText("on Freepik")).toBeVisible();

  const freePikLink = page.getByText("Image by svstudioart");
  await expect(freePikLink).toBeVisible();
  await expect(freePikLink).toHaveAttribute("target", "_blank");
  await expect(freePikLink).toHaveAttribute("rel", "noopener");
});

test("has 'GSGO' card and page", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("CSGO More Info")).toBeVisible();

  const csgoLink = page.getByRole("link", { name: "CSGO More Info" });
  await expect(csgoLink).toBeVisible();
  csgoLink.click();
  await expect(page).toHaveTitle("Gummientchen - CS:GO");

  await expect(page.getByRole("heading", { name: "My Stats." })).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Steam", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Information about the Game." })
  ).toBeVisible();
  await expect(page.getByRole("cell", { name: "Developer" })).toBeVisible();
  await expect(page.getByRole("cell", { name: "Valve" }).first()).toBeVisible();
  await expect(page.getByRole("cell", { name: "21.08.2012" })).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Official Website" })
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Steam Store Page" })
  ).toBeVisible();
  await expect(
    page.getByText(
      "All product names, logos, and brands are property of their respective owners. Al"
    )
  ).toBeVisible();
});

test("has 'Factorio' card and page", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Factorio More Info")).toBeVisible();

  const factorioLink = page.getByRole("link", { name: "Factorio More Info" });
  await expect(factorioLink).toBeVisible();
  factorioLink.click();
  await expect(page).toHaveTitle("Gummientchen - Factorio");

  await expect(page.getByRole("heading", { name: "My Stats." })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Information about the Game." })
  ).toBeVisible();
  await expect(page.getByRole("cell", { name: "Developer" })).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Wube Software" }).first()
  ).toBeVisible();
  await expect(page.getByRole("cell", { name: "14.08.2020" })).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Official Website" })
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Steam Store Page" })
  ).toBeVisible();
  await expect(
    page.getByText(
      "All product names, logos, and brands are property of their respective owners. Al"
    )
  ).toBeVisible();
});

test("has 'Rocket League' card and page", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Rocket League More Info")).toBeVisible();

  const RocketLeagueLink = page.getByRole("link", {
    name: "Rocket League More Info",
  });
  await expect(RocketLeagueLink).toBeVisible();
  RocketLeagueLink.click();
  await expect(page).toHaveTitle("Gummientchen - Rocket League");

  await expect(page.getByRole("heading", { name: "My Stats." })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Information about the Game." })
  ).toBeVisible();
  await expect(page.getByRole("cell", { name: "Developer" })).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Psyonix" }).first()
  ).toBeVisible();
  await expect(page.getByRole("cell", { name: "07.07.2015" })).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Official Website" })
  ).toBeVisible();
  await expect(
    page.getByText(
      "All product names, logos, and brands are property of their respective owners. Al"
    )
  ).toBeVisible();
});

test("has 'Sea of Thieves' card and page", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Sea of Thieves More Info")).toBeVisible();

  const SeaOfThievesLink = page.getByRole("link", {
    name: "Sea of Thieves More Info",
  });
  await expect(SeaOfThievesLink).toBeVisible();
  SeaOfThievesLink.click();
  await expect(page).toHaveTitle("Gummientchen - Sea of Thieves");

  await expect(page.getByRole("heading", { name: "My Stats." })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Information about the Game." })
  ).toBeVisible();
  await expect(page.getByRole("cell", { name: "Developer" })).toBeVisible();
  await expect(page.getByRole("cell", { name: "Rare" }).first()).toBeVisible();
  await expect(page.getByRole("cell", { name: "20.03.2018" })).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Official Website" })
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Steam Store Page" })
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Microsoft Store Page" })
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Twitch", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Twitter", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "YouTube", exact: true })
  ).toBeVisible();
  await expect(
    page.getByText(
      "All product names, logos, and brands are property of their respective owners. Al"
    )
  ).toBeVisible();
});

test("has 'Skyrim' card and page", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Skyrim More Info")).toBeVisible();

  const SkyrimLink = page.getByRole("link", {
    name: "Skyrim More Info",
  });
  await expect(SkyrimLink).toBeVisible();
  SkyrimLink.click();
  await expect(page).toHaveTitle("Gummientchen - Skyrim");

  await expect(page.getByRole("heading", { name: "My Stats." })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Information about the Game." })
  ).toBeVisible();
  await expect(page.getByRole("cell", { name: "Developer" })).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Bethesda Game Studios" }).first()
  ).toBeVisible();
  await expect(page.getByRole("cell", { name: "11.11.2011" })).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Official Website" })
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Steam Store Page" })
  ).toBeVisible();
  await expect(
    page.getByText(
      "All product names, logos, and brands are property of their respective owners. Al"
    )
  ).toBeVisible();
});

test("has 'Valorant' card and page", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Valorant More Info")).toBeVisible();

  const ValorantLink = page.getByRole("link", {
    name: "Valorant More Info",
  });
  await expect(ValorantLink).toBeVisible();
  ValorantLink.click();
  await expect(page).toHaveTitle("Gummientchen - Valorant");

  await expect(page.getByRole("heading", { name: "My Stats." })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Information about the Game." })
  ).toBeVisible();
  await expect(page.getByRole("cell", { name: "Developer" })).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Riot Games" }).first()
  ).toBeVisible();
  await expect(page.getByRole("cell", { name: "02.06.2020" })).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Official Website" })
  ).toBeVisible();
  await expect(
    page.getByText(
      "All product names, logos, and brands are property of their respective owners. Al"
    )
  ).toBeVisible();
});

test("has 'YouTube' card", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByText("YouTube: GummientchenDRAMA!!!YouTube Profile")
  ).toBeVisible();
});

test("has 'Twitch' card", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByText(
      "Twitch: GummientchenOnly male nipples allowed!Twitch Profile"
    )
  ).toBeVisible();
});
