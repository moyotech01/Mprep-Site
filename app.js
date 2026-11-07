// Shared helper
async function loadComments() {
  try {
    const res = await fetch('./data/comments.json?t=' + Date.now());
    if (!res.ok) throw new Error('Failed to load');
    return await res.json();
  } catch (err) {
    console.error(err);
    return { articles: [] };
  }
}

function downloadJSON(data, filename = 'comments.json') {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Comment copied!');
  }).catch(() => {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Comment copied!');
  });
}
