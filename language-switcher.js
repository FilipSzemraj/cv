// Language Switcher for CV
(function() {
    'use strict';

    // Get language from URL parameter, default to English
    function getLanguageFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const lang = urlParams.get('lang');
        return (lang === 'pl') ? 'pl' : 'en';
    }

    // Get appropriate translation object
    function getTranslations(lang) {
        return lang === 'pl' ? translationsPL : translationsEN;
    }

    // Apply translations to the page
    function applyTranslations() {
        const lang = getLanguageFromURL();
        const t = getTranslations(lang);

        // Header
        document.querySelector('[data-i18n="header.title"]').textContent = t.header.title;
        document.querySelector('[data-i18n="header.location"]').textContent = t.header.location;

        // Summary
        document.querySelector('[data-i18n="summary"]').textContent = t.summary;

        // Education
        const educationBox = document.querySelector('.education-box');
        educationBox.innerHTML = '';

        t.education.entries.forEach((entry, index) => {
            const eduItem = document.createElement('div');
            eduItem.className = 'edu-item';
            if (index > 0) {
                eduItem.style.marginTop = '8px';
                eduItem.style.borderTop = '1px solid #e2e8f0';
                eduItem.style.paddingTop = '8px';
            }

            eduItem.innerHTML = `
                <div class="edu-header">${entry.period}</div>
                <span class="edu-school">${entry.school}</span>
                <span class="edu-detail">${entry.detail}</span>
            `;

            educationBox.appendChild(eduItem);
        });

        // Section titles
        document.querySelector('[data-i18n="sections.experience"]').textContent = t.sections.experience;
        document.querySelector('[data-i18n="sections.projects"]').textContent = t.sections.projects;
        document.querySelector('[data-i18n="sections.skills"]').textContent = t.sections.skills;
        document.querySelector('[data-i18n="sections.certifications"]').textContent = t.sections.certifications;

        // Experience
        const experienceSection = document.querySelector('#experience');
        const experienceContainer = experienceSection.querySelector('.experience-container');
        experienceContainer.innerHTML = '';

        t.experience.forEach(exp => {
            const entry = document.createElement('div');
            entry.className = 'entry';

            const detailsHTML = exp.details.map(detail => `<li>${detail}</li>`).join('');

            entry.innerHTML = `
                <div class="entry-header">
                    <div><span class="entry-title">${exp.title}</span><span class="entry-company"> · ${exp.company}</span></div>
                    <span class="entry-meta">${exp.period}</span>
                </div>
                <ul class="details">
                    ${detailsHTML}
                </ul>
                <div class="tags-container">
                    <span class="tag">Java</span> <span class="tag">Spring Boot</span> <span class="tag">Angular</span> <span class="tag">TypeScript</span> <span class="tag">RxJs</span> <span class="tag">Ionic</span> <span class="tag">Git</span> <span class="tag">Linux</span> <span class="tag">Feature Toggles</span> <span class="tag">Liquibase</span> <span class="tag">Vitest</span>
                </div>
            `;

            experienceContainer.appendChild(entry);
        });

        // Projects
        const projectsSection = document.querySelector('#projects');
        const projectsContainer = projectsSection.querySelector('.projects-container');
        projectsContainer.innerHTML = '';

        t.projects.forEach((project, index) => {
            const entry = document.createElement('div');
            entry.className = 'entry';
            // if (index === 3) {
            //     entry.classList.add('page-break-before');
            // }

            const paragraphsHTML = project.paragraphs.map(p => `<p>${p}</p>`).join('');

            // Determine if this is a job-related project (index 1 and 2 in the current structure)
            const jobRelatedTag = project.jobRelated ? `<span class="tag tag-job">${t.skills.jobRelated}</span>` : '';

            // Get project-specific tags if available
            const tagsHTML = project.tags ? project.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ') : '';

            entry.innerHTML = `
                <div class="entry-header">
                    <span class="entry-title">${project.link ? `<a href="${project.link}">${project.title}</a>` : project.title}</span>
                    ${jobRelatedTag}
                    <span class="entry-meta">${project.period}</span>
                </div>
                ${paragraphsHTML}
                <div class="tags-container">
                    ${tagsHTML}
                </div>
            `;

            projectsContainer.appendChild(entry);
        });

        // Skills
        const skillsGrid = document.querySelector('.skills-grid');
        skillsGrid.innerHTML = '';

        t.skills.categories.forEach(category => {
            const skillCategory = document.createElement('div');
            skillCategory.className = 'skill-category';

            skillCategory.innerHTML = `
                <strong>${category.title}</strong>
                <span>${category.content}</span>
            `;

            skillsGrid.appendChild(skillCategory);
        });

        // Certifications
        const certList = document.querySelector('.certs-list');
        certList.innerHTML = '';

        t.certifications.forEach(cert => {
            const li = document.createElement('li');

            li.innerHTML = `
                <a href="${cert.link}" target="_blank">
                    <strong>${cert.name}</strong>
                    <span>${cert.year}</span>
                </a>
            `;

            certList.appendChild(li);
        });

        // Portfolio
        document.querySelector('[data-i18n="portfolio.title"]').textContent = t.portfolio.title;
        document.querySelector('[data-i18n="portfolio.description"]').textContent = t.portfolio.description;
        document.querySelector('[data-i18n="portfolio.link.portfolio"]').textContent = t.portfolio.links.portfolio;
        document.querySelector('[data-i18n="portfolio.link.thesis"]').textContent = t.portfolio.links.thesis;
    }

    // Highlight the active language button
    function updateLangButtons() {
        const lang = getLanguageFromURL();
        var btnEn = document.getElementById('lang-en');
        var btnPl = document.getElementById('lang-pl');
        if (btnEn) btnEn.classList.toggle('active', lang === 'en');
        if (btnPl) btnPl.classList.toggle('active', lang === 'pl');
    }

    // Exposed globally so the onclick handler can call it
    window.switchLang = function(lang) {
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.location.href = url.toString();
    };

    // Run when DOM is ready
    function init() {
        applyTranslations();
        updateLangButtons();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
