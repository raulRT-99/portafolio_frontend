function redirect(lang, uri) {
  const urlObj = new URL(uri);
  const pathSegments = urlObj.pathname.split('/').filter(seg => seg.length > 0);
  if (pathSegments.length > 0) {
    pathSegments[0] = lang;
  } else {
    pathSegments.push(lang);
  }
  urlObj.pathname = '/' + pathSegments.join('/');
  window.location.href = urlObj.toString();
}

document.querySelectorAll('input[name="lang"]').forEach(radio => {
  radio.addEventListener('change', () => {
    redirect(radio.value, window.location.href);
  });
});