// scripts/markdown.js

// Helper function to get query parameters
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

async function loadBlog() {
  const file = getQueryParam("file");
  if (!file) {
    document.getElementById("blog-container").innerHTML = "<p>No blog selected.</p>";
    return;
  }

  try {
    const response = await fetch(`blogs/${file}`);
    if (!response.ok) throw new Error("Blog not found");
    const markdown = await response.text();
    const html = marked.parse(markdown);
    document.getElementById("blog-container").innerHTML = html;
  } catch (err) {
    console.error(err);
    document.getElementById("blog-container").innerHTML = "<p>Blog not found.</p>";
  }
}

// Load the blog when page loads
loadBlog();