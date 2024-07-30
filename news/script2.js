// scripts2.js
document.addEventListener('DOMContentLoaded', () => {
    const googleNewsUrl = 'https://news.google.com/rss/search?q=technology+in+Canada+when:7d&hl=en-CA&gl=CA&ceid=CA:en';
    const newsContainer = document.getElementById('news-container');

    async function fetchNews() {
        try {
            const googleNewsResponse = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(googleNewsUrl)}`);
            const googleNewsData = await googleNewsResponse.json();
            const googleNewsXML = new DOMParser().parseFromString(googleNewsData.contents, 'text/xml');
            console.log('Google News fetched:', googleNewsXML);

            const newsItems = parseNewsItems(googleNewsXML);
            const sortedNewsItems = sortNewsByUrgency(newsItems);
            displayNews(sortedNewsItems.slice(0, 5)); // Display top 5 news articles
        } catch (error) {
            console.error('Error fetching the news:', error);
        }
    }

    function parseNewsItems(xml) {
        const items = xml.querySelectorAll('item');
        const newsItems = [];
        items.forEach((item) => {
            const title = item.querySelector('title').textContent;
            const link = item.querySelector('link').textContent;
            const description = item.querySelector('description').textContent;
            const pubDate = new Date(item.querySelector('pubDate').textContent);
            newsItems.push({ title, link, description, pubDate });
        });
        return newsItems;
    }

    function sortNewsByUrgency(newsItems) {
        const urgencyKeywords = ['breaking', 'urgent', 'important', 'alert', 'immediate'];
        return newsItems.sort((a, b) => {
            const aUrgency = urgencyKeywords.some(keyword => a.title.toLowerCase().includes(keyword) || a.description.toLowerCase().includes(keyword)) ? 1 : 0;
            const bUrgency = urgencyKeywords.some(keyword => b.title.toLowerCase().includes(keyword) || b.description.toLowerCase().includes(keyword)) ? 1 : 0;
            return bUrgency - aUrgency || b.pubDate - a.pubDate; // Sort by urgency and then by date
        });
    }

    function displayNews(newsItems) {
        newsContainer.innerHTML = '';
        newsItems.forEach((item) => {
            const newsArticle = document.createElement('div');
            newsArticle.classList.add('news-article');
            const articleHTML = `
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <a href="${item.link}" target="_blank">Read more</a>
            `;
            newsArticle.innerHTML = articleHTML;
            newsContainer.appendChild(newsArticle);
        });
    }

    fetchNews();
});
