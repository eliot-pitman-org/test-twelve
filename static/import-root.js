// This script imports the root code, which in turn imports all MFEs within the composite application.

window.addEventListener('load', () => {
  System.import('va-bip/test-test-mfe-root');
});