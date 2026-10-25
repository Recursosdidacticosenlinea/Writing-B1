/**
 * CAA English Practice — writing evidence collector (Google Apps Script)
 *
 * Saves every writing task a student sends from the website into a Google Sheet.
 * Setup (about 5 minutes, once):
 *  1. Create a new Google Sheet, e.g. "CAA Writing Evidence".
 *  2. In the sheet: Extensions → Apps Script. Delete the sample code and paste this whole file. Save.
 *  3. Deploy → New deployment → type "Web app".
 *       Execute as: Me
 *       Who has access: Anyone
 *     Click Deploy and authorize with your account.
 *  4. Copy the Web app URL (it ends in /exec).
 *  5. Paste it in assets/config.js → writingEndpoint: "https://script.google.com/macros/s/…/exec"
 *  6. Upload config.js to GitHub again.
 *
 * Each submission adds one row. Use the sheet's filters to see one group or one unit.
 * If you edit this script later, use Deploy → Manage deployments → Edit → New version,
 * so the URL stays the same.
 */
const SHEET_NAME = "Submissions";
const HEADERS = ["Received", "Sent by student", "Name", "Group", "Unit", "Level", "Task", "Words", "Text"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    }
    const clean = v => String(v == null ? "" : v).slice(0, 5000);
    sheet.appendRow([
      new Date(), clean(data.date), clean(data.name), clean(data.group), clean(data.unit),
      clean(data.level), clean(data.task), Number(data.words) || 0, clean(data.text)
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

/* Open the Web app URL in a browser to check it's working. */
function doGet() {
  return ContentService.createTextOutput("CAA writing collector is running.");
}
