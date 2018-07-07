/**
 * An exmaple script
 *
 * chrome.webRequest[{{lifecycle}}].addListener(
 *   {{callback}},
 *   {{filter}},
 *   {{options}},
 * )
 *
 * For more information, see:
 * https://developer.chrome.com/extensions/webRequest
 * https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webRequest
 */

export default {
  lifecycle: 'onBeforeSendHeaders',
  callback: () => {
    // Do something here
  },
  filter: {
    urls: ['<all_urls>'],
    // type: ['main_frame'],
  },
  options: [
    // 'blocking',
  ],
}