/* Local development default.
   The GitHub Pages build overwrites this file with booksRemote: true so the
   deployed page links to the public source repo instead of local files.
   The 3.5 GB book library is never part of the Pages artifact. */
window.SITE_CONFIG = {
  booksEnabled: true,
  booksRemote: false,
  booksBase: "some-investment-books/",
  booksRemoteBase: "https://github.com/bharaniabhishek123/some-investment-books/raw/master/",
  booksRepo: "https://github.com/bharaniabhishek123/some-investment-books",
  deployMode: "local"
};
