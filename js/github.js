/* ---- GitHub API Integration ---- */
(function() {
  const GITHUB_USER = 'Blima-P';
  const REPOS_CONTAINER = document.getElementById('github-repos');
  if (!REPOS_CONTAINER) return;

  async function fetchRepos() {
    try {
      const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`);
      if (!res.ok) throw new Error('API error');
      const repos = await res.json();
      renderRepos(repos.filter(r => !r.fork).slice(0, 4));
    } catch (err) {
      REPOS_CONTAINER.innerHTML = '<p class="github__fallback" data-i18n="github.error">Could not load repositories. Visit my GitHub profile.</p>';
      if (typeof setLanguage === 'function') setLanguage(currentLang);
    }
  }

  function renderRepos(repos) {
    REPOS_CONTAINER.innerHTML = repos.map(repo => `
      <a href="${repo.html_url}" target="_blank" class="github-card" rel="noopener">
        <div class="github-card__header">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9z"/>
          </svg>
          <span class="github-card__name">${repo.name}</span>
        </div>
        <p class="github-card__desc">${repo.description || 'No description'}</p>
        <div class="github-card__footer">
          ${repo.language ? `<span class="github-card__lang"><span class="github-card__lang-dot" style="background:${getLangColor(repo.language)}"></span>${repo.language}</span>` : ''}
          <span class="github-card__stars">⭐ ${repo.stargazers_count}</span>
        </div>
      </a>
    `).join('');
  }

  function getLangColor(lang) {
    const colors = { JavaScript: '#f1e05a', Python: '#3572A5', Java: '#b07219', HTML: '#e34c26', CSS: '#563d7c', TypeScript: '#2b7489', Shell: '#89e051' };
    return colors[lang] || '#8b949e';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fetchRepos);
  } else {
    fetchRepos();
  }
})();
