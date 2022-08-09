const { GoogleSpreadsheet } = require('google-spreadsheet');

const handler = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      res.json({ message: 'Try a POST!' });
    }

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
    });
    await doc.getInfo();

    // Create a new sheet in the spreadsheet if it doesn't exist
    const sheet =
      doc.sheetsByIndex.find(
        (sheet) => sheet.title === 'Landroid Beta Testers'
      ) || (await doc.addSheet({ title: 'Landroid Beta Testers' }));

    // Load the header row
    await sheet.loadHeaderRow();
    const columns = sheet.headerValues;

    // Generate the row data
    const row = req.body;
    // Add signup timestamp to the row
    row.signupTimestamp = new Date();

    // Add any missing columns based on the incoming data
    const incomingDataColumns = Object.keys(req.body);
    const newColumns = incomingDataColumns.filter(
      (column) => !columns.includes(column)
    );
    if (newColumns.length > 0) {
      await sheet.setHeaderRow(columns.concat(newColumns));
    }

    return await sheet.addRow(row).then(
      (value) => {
        // Redirect to index page
        return res.status(303).redirect('/landroidBetaSignupThanks/');
      },
      (error) => {
        console.error(error);
        if (error.response) {
          return res.status(500).json({
            error: error.response,
          });
        }
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'There was an error', error: err });
  }
};

module.exports = handler;
