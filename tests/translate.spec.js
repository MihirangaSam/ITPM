import { test, expect } from '@playwright/test';

test('FN_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('ammaa kade yanavaa.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'අම්මා කඩේ යනවා.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('mama yanavaa, haebaeyi aapahu enavaa.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'මම යනවා, හැබැයි ආපහු එනවා.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});


test('FN_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('oyaa ehema kiyanavaanam api karannam.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'ඔයා එහෙම කියනවනම් අපි කරන්නම්.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('oyaa ehe giyaadha?');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'ඔයා එහෙ ගියාද?';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('kaalaa enna.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'කාලා එන්න.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('mama anidda enawaa.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'මම අනිද්ද එනවා.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('suba sandyawak!');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'සුබ සන්ද්‍යාවක්';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('oyaata eeka balala mata kiyanna puluwandha?');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'ඔයාට ඒක බලල මට කියන්න පුලුවන්ද?';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('hari mama balala kiyannam.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'හරි මම බලල කියන්නම්.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('mata nidhaganna thiyenva');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'මට නිදාගන්න තියෙන්ව.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0011', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('uba waren.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'උබ වරෙන්.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0012', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('mama bas eke inne.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'මම බස් එකේ ඉන්නේ එකේ.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0013', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('mata bae.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'මට බැ.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0014', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('podda podda.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'පොඩ්ඩ පොඩ්ඩ.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});


test('FN_0015', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('mama iye skolee giyaa.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'මම ඉයෙ ස්කොලේ ගියා.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});


test('FN_0016', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('mama liyanawaa.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'මම ලියනවා';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});


test('FN_0017', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('api ehe heta yamu.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'අපි එහෙ හෙට යමු.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});


test('FN_0018', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('eyaa eeka dhanne nae.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'එයා ඒක දන්නෙ නැ.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});


test('FN_0019', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('eyaa eeka hadanawaa.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'එයා ඒක හදනවා.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0020', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('eyaalaa eeka hadanawaa.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'එයාලා ඒක හදනවා.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});


test('FN_0021', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('anee ehema karanna epaa.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'අනේ එහෙම කරන්න එපා.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});


test('FN_0022', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('skype.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'ස්කයිප්.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0023', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('machine eka off karalada balanna.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'මැශින් එක ඕෆ් කරලද බලන්න.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});


test('FN_0024', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('mama ATM ekata giyaa.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'මම ATM එකට ගියා.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});


test('FN_0026', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('mata USD 50 dhenna.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'මට USD 50 දෙන්න.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0027', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('dhaen velaawa 10 P.M.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'dhaen velaava 10 P.M.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0028', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('eyaa enne marthu 31.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'එයා එන්නෙ මර්තු 31.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0029', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('meeken 10mm bonna.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'මේකෙන් 10mm බොන්න.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0030', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('mata nidhaaganna thiyenavaa.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'මට නිදාගන්න තියෙනවා.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0031', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('mama gihin balala kiyannam.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'මම ගිහින් බලල කියන්නම්.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0032', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('pasugiya dhinavala athi vuu naayayaam heethuven janathaava vishaala pramaanayak avathaen vee aetha.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'පසුගිය දිනවල අති වූ නායයාම් හේතුවෙන් ජනතාව විශාල ප්‍රමානයක් අවතැන් වී ඇත.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0033', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('adoo supiri ban.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'අඩෝ සුපිරි බන්.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0034', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('karuNaakara tikak ehaata venna.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'කරුණාකර ටිකක් එහාට වෙන්න.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});

test('FN_0034', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Give Singlish input
  await page.locator('textarea').first().fill('ballabathkanavaa.');

  // Get output
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();

  const actualOutput = (await outputLocator.textContent()).trim();

  
  const expectedOutput = 'බල්ලා බත් කනවා.';

  // This will FAIL and show error
  expect(actualOutput).toBe(expectedOutput);
});