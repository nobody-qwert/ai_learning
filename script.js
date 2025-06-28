// Toggle sidebar functionality
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
const topicItems = document.querySelectorAll('.topic-item');
const topicContent = document.getElementById('topic-content');
const welcomeContent = document.getElementById('welcome-content');

// Toggle sidebar
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    toggleBtn.textContent = sidebar.classList.contains('hidden') ? '☰' : '✕';
});


// Function to load topic content dynamically from files
async function loadTopicContent(topicId) {
    try {
        // Show loading state
        topicContent.innerHTML = `
            <div class="loading">
                <h2>Loading...</h2>
                <p>Please wait while we load the content.</p>
            </div>
        `;
        topicContent.style.display = 'block';

        // Fetch content from the topics folder
        const response = await fetch(`./topics/${topicId}.html`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const content = await response.text();
        topicContent.innerHTML = content;
        topicContent.style.display = 'block';
        
    } catch (error) {
        console.error('Error loading topic content:', error);
        topicContent.innerHTML = `
            <h2>Content Not Found</h2>
            <p>Sorry, the content for "${topicId}" could not be loaded.</p>
            <p>Please check that the file exists in the topics folder.</p>
        `;
        topicContent.style.display = 'block';
    }
}

// Handle topic selection
topicItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        topicItems.forEach(i => i.classList.remove('active'));
        
        // Hide welcome content
        welcomeContent.style.display = 'none';
        
        // Add active class to clicked item
        item.classList.add('active');
        
        // Load corresponding content
        const topicId = item.getAttribute('data-topic');
        loadTopicContent(topicId);
        
        // Auto-hide sidebar on mobile after selection
        if (window.innerWidth <= 768) {
            sidebar.classList.add('hidden');
            toggleBtn.textContent = '☰';
        }
    });
});

// Handle responsive behavior
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        sidebar.classList.add('hidden');
        toggleBtn.textContent = '☰';
    } else {
        sidebar.classList.remove('hidden');
        toggleBtn.textContent = '✕';
    }
});

// Initialize mobile state
if (window.innerWidth <= 768) {
    sidebar.classList.add('hidden');
    toggleBtn.textContent = '☰';
}

// Initialize topic content as hidden
topicContent.style.display = 'none';
