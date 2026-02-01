function applyTranslations() {
    const lang = getLanguageFromURL();
    const t = getTranslations(lang);

    // HEADER
    document.querySelector('[data-i18n="header.title"]').textContent = t.header.title;
    document.querySelector('[data-i18n="header.location"]').textContent = t.header.location;

    // SUMMARY
    const summaryEl = document.querySelector('[data-i18n="summary"]');
    summaryEl.textContent = t.summary;

    // =========================
    // EDUCATION
    // =========================
    const eduBox = document.querySelector('.education-box');
    eduBox.innerHTML = '';

    t.education.entries.forEach((edu, i) => {
        const div = document.createElement('div');
        div.className = 'edu-item';
        if (i > 0) {
            div.style.marginTop = '8px';
            div.style.borderTop = '1px solid #e2e8f0';
            div.style.paddingTop = '8px';
        }

        div.innerHTML = `
            <div class="edu-header">${edu.period}</div>
            <span class="edu-school">${edu.school}</span>
            <span class="edu-detail">${edu.detail}</span>
        `;

        eduBox.appendChild(div);
    });

    // =========================
    // SECTION TITLES
    // =========================
    document.querySelector('[data-i18n="sections.experience"]').textContent = t.sections.experience;
    document.querySelector('[data-i18n="sections.projects"]').textContent = t.sections.projects;
    document.querySelector('[data-i18n="sections.skills"]').textContent = t.sections.skills;
    document.querySelector('[data-i18n="sections.certifications"]').textContent = t.sections.certifications;

    // =========================
    // EXPERIENCE
    // =========================
    const expContainer = document.querySelector('#experience');
    expContainer.querySelectorAll('.entry').forEach(e => e.remove());

    t.experience.forEach(exp => {
        const entry = document.createElement('div');
        entry.className = 'entry';

        entry.innerHTML = `
            <div class="entry-header">
                <div>
                    <span class="entry-title">${exp.title}</span>
                    <span class="entry-company"> · ${exp.company}</span>
                </div>
                <span class="entry-meta">${exp.period}</span>
            </div>

            <ul class="details">
                ${exp.details.map(d => `<li>${d}</li>`).join('')}
            </ul>
        `;

        expContainer.appendChild(entry);
    });

    // =========================
    // PROJECTS
    // =========================
    const projContainer = document.querySelector('#projects');
    projContainer.querySelectorAll('.entry').forEach(e => e.remove());

    t.projects.forEach(project => {
        const entry = document.createElement('div');
        entry.className = 'entry';

        entry.innerHTML = `
            <div class="entry-header">
                <span class="entry-title">${project.title}</span>
                <span class="entry-meta">${project.period}</span>
            </div>

            ${project.paragraphs.map(p => `<p>${p}</p>`).join('')}
        `;

        projContainer.appendChild(entry);
    });

    // =========================
    // SKILLS
    // =========================
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = '';

    t.skills.categories.forEach(cat => {
        const div = document.createElement('div');
        div.className = 'skill-category';

        div.innerHTML = `
            <strong>${cat.title}</strong>
            <span>${cat.content}</span>
        `;

        skillsGrid.appendChild(div);
    });

    // =========================
    // CERTIFICATIONS (jak masz)
    // =========================
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

    // =========================
    // PORTFOLIO
    // =========================
    document.querySelector('[data-i18n="portfolio.title"]').textContent = t.portfolio.title;
    document.querySelector('[data-i18n="portfolio.description"]').textContent = t.portfolio.description;
    document.querySelector('[data-i18n="portfolio.link.portfolio"]').textContent = t.portfolio.links.portfolio;
    document.querySelector('[data-i18n="portfolio.link.thesis"]').textContent = t.portfolio.links.thesis;
}
/*
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
        const eduItems = document.querySelectorAll('.edu-item');
        eduItems.forEach((item, index) => {
            if (t.education.entries[index]) {
                item.querySelector('[data-i18n="education.period"]').textContent = t.education.entries[index].period;
                item.querySelector('[data-i18n="education.school"]').textContent = t.education.entries[index].school;
                item.querySelector('[data-i18n="education.detail"]').textContent = t.education.entries[index].detail;
            }
        });

        // Section titles
        document.querySelector('[data-i18n="sections.experience"]').textContent = t.sections.experience;
        document.querySelector('[data-i18n="sections.projects"]').textContent = t.sections.projects;
        document.querySelector('[data-i18n="sections.skills"]').textContent = t.sections.skills;
        document.querySelector('[data-i18n="sections.certifications"]').textContent = t.sections.certifications;

        // Experience
        const expEntries = document.querySelectorAll('#experience .entry');
        expEntries.forEach((entry, index) => {
            if (t.experience[index]) {
                entry.querySelector('[data-i18n="experience.title"]').textContent = t.experience[index].title;
                entry.querySelector('[data-i18n="experience.period"]').textContent = t.experience[index].period;

                const detailsList = entry.querySelectorAll('[data-i18n^="experience.detail"]');
                detailsList.forEach((detail, detailIndex) => {
                    if (t.experience[index].details[detailIndex]) {
                        detail.textContent = t.experience[index].details[detailIndex];
                    }
                });
            }
        });

        // Projects
        const projectEntries = document.querySelectorAll('#projects .entry');
        projectEntries.forEach((entry, index) => {
            if (t.projects[index]) {
                entry.querySelector('[data-i18n="project.title"]').textContent = t.projects[index].title;
                entry.querySelector('[data-i18n="project.period"]').textContent = t.projects[index].period;

                const paragraphs = entry.querySelectorAll('[data-i18n^="project.paragraph"]');
                paragraphs.forEach((p, pIndex) => {
                    if (t.projects[index].paragraphs[pIndex]) {
                        p.textContent = t.projects[index].paragraphs[pIndex];
                    }
                });

                const jobRelatedTag = entry.querySelector('[data-i18n="skills.jobRelated"]');
                if (jobRelatedTag) {
                    jobRelatedTag.textContent = t.skills.jobRelated;
                }
            }
        });


        // Skills
        const skillCategories = document.querySelectorAll('.skill-category');
        skillCategories.forEach((category, index) => {
            if (t.skills.categories[index]) {
                category.querySelector('[data-i18n="skill.title"]').textContent = t.skills.categories[index].title;
                category.querySelector('[data-i18n="skill.content"]').textContent = t.skills.categories[index].content;
            }
        });

        // // Certifications
        // const certItems = document.querySelectorAll('.certs-list a');
        // certItems.forEach((cert, index) => {
        //     if (t.certifications[index]) {
        //         cert.querySelector('[data-i18n="cert.name"]').textContent = t.certifications[index].name;
        //         cert.querySelector('[data-i18n="cert.year"]').textContent = t.certifications[index].year;
        //         cert.querySelector('[data-i18n="cert.year"]').href = t.certifications[index].link;
        //     }
        // });
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

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyTranslations);
    } else {
        applyTranslations();
    }
})();
*/
