// Sample posts data
let posts = [
    {
        id: 1,
        username: "travel_lover",
        userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
        caption: "Amazing sunset at the mountains! 🌅 #nature #travel",
        likes: 142,
        liked: false,
        time: "2 hours ago"
    },
    {
        id: 2,
        username: "foodie_adventures",
        userImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop",
        caption: "Delicious pasta night! 🍝 Recipe in my bio",
        likes: 89,
        liked: true,
        time: "5 hours ago"
    },
    {
        id: 3,
        username: "fitness_guru",
        userImage: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=40&h=40&fit=crop&crop=face",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
        caption: "Morning workout complete! 💪 #fitness #motivation",
        likes: 234,
        liked: false,
        time: "8 hours ago"
    },
    {
        id: 4,
        username: "art_lover",
        userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop",
        caption: "Beautiful street art in the city 🎨 #art #streetart",
        likes: 156,
        liked: true,
        time: "12 hours ago"
    },
    {
        id: 5,
        username: "coffee_addict",
        userImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
        caption: "Perfect latte art ☕ Starting the day right!",
        likes: 78,
        liked: false,
        time: "1 day ago"
    },
    {
        id: 6,
        username: "pet_lover",
        userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=600&fit=crop",
        caption: "My little buddy enjoying the sunshine 🐕 #dogsofinstagram",
        likes: 312,
        liked: true,
        time: "2 days ago",
        comments: []
    },
    {
        id: 7,
        username: "beach_vibes",
        userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop",
        caption: "Paradise found 🏖️ #beachlife #vacation",
        likes: 445,
        liked: false,
        time: "3 days ago"
    }
];

// DOM elements
const postsFeed = document.getElementById('postsFeed');
const postCaption = document.getElementById('postCaption');
const postImage = document.getElementById('postImage');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    renderPosts();
});

// Render all posts
function renderPosts() {
    postsFeed.innerHTML = '';
    posts.forEach(post => {
        const postElement = createPostElement(post);
        postsFeed.appendChild(postElement);
    });
}

// Create post element
function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    
    postDiv.innerHTML = `
        <div class="post-user">
            <img src="${post.userImage}" alt="${post.username}">
            <div class="post-user-info">
                <h4>${post.username}</h4>
                <span>${post.time}</span>
            </div>
        </div>
        ${post.image ? `<img src="${post.image}" alt="Post" class="post-image">` : ''}
        <div class="post-actions">
            <i class="fa${post.liked ? 's' : 'r'} fa-heart ${post.liked ? 'liked' : ''}" onclick="toggleLike(${post.id})"></i>
            <i class="far fa-comment" onclick="toggleComments(${post.id})"></i>
            <i class="far fa-paper-plane" onclick="sharePost(${post.id})"></i>
            <i class="far fa-bookmark" onclick="savePost(${post.id})"></i>
            ${post.username === 'umair_nurgat' ? `<i class="fas fa-trash" onclick="deletePost(${post.id})" style="margin-left: auto; color: #ed4956; cursor: pointer;"></i>` : ''}
        </div>
        <div class="post-content">
            <div class="post-likes">${post.likes} likes</div>
            <div class="post-caption">
                <strong>${post.username}</strong> ${post.caption}
            </div>
            <div class="post-comments" id="comments-${post.id}" style="display: none;">
                <div class="comments-list" id="comments-list-${post.id}"></div>
            </div>
            <div class="add-comment" style="margin-top: 8px;">
                <input type="text" placeholder="Add a comment..." style="border: none; outline: none; font-size: 14px; width: 100%; background: transparent;" onkeypress="handleComment(event, ${post.id})">
            </div>
            <div class="post-time">${post.time}</div>
        </div>
    `;
    
    return postDiv;
}

// Create new post
function createPost() {
    const caption = postCaption.value.trim();
    const imageUrl = postImage.value.trim();
    
    if (!caption) {
        alert('Please enter a caption!');
        return;
    }
    
    const newPost = {
        id: Date.now(),
        username: "umair_nurgat",
        userImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
        image: imageUrl || null,
        caption: caption,
        likes: 0,
        liked: false,
        time: "now",
        comments: []
    };
    
    posts.unshift(newPost);
    renderPosts();
    
    // Clear form
    postCaption.value = '';
    postImage.value = '';
}

// Toggle like on post
function toggleLike(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.liked = !post.liked;
        post.likes += post.liked ? 1 : -1;
        renderPosts();
    }
}

// Handle Enter key in caption input
document.getElementById('postCaption').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        createPost();
    }
});

// Handle Enter key in image input
document.getElementById('postImage').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        createPost();
    }
});

// Delete post function
function deletePost(postId) {
    if (confirm('Are you sure you want to delete this post?')) {
        posts = posts.filter(p => p.id !== postId);
        renderPosts();
    }
}

// Handle comment input
function handleComment(event, postId) {
    if (event.key === 'Enter' && event.target.value.trim()) {
        const post = posts.find(p => p.id === postId);
        if (!post.comments) post.comments = [];
        
        const comment = {
            id: Date.now(),
            username: 'umair_nurgat',
            text: event.target.value.trim(),
            time: 'now'
        };
        
        post.comments.push(comment);
        event.target.value = '';
        renderComments(postId);
        toggleComments(postId, true);
    }
}

// Toggle comments visibility
function toggleComments(postId, show = null) {
    const commentsDiv = document.getElementById(`comments-${postId}`);
    if (show === true || commentsDiv.style.display === 'none') {
        commentsDiv.style.display = 'block';
        renderComments(postId);
    } else {
        commentsDiv.style.display = 'none';
    }
}

// Render comments for a post
function renderComments(postId) {
    const post = posts.find(p => p.id === postId);
    const commentsList = document.getElementById(`comments-list-${postId}`);
    
    if (!post.comments || post.comments.length === 0) {
        commentsList.innerHTML = '<p style="color: #8e8e8e; font-size: 14px;">No comments yet</p>';
        return;
    }
    
    commentsList.innerHTML = post.comments.map(comment => `
        <div style="margin-bottom: 8px; font-size: 14px;">
            <strong>${comment.username}</strong> ${comment.text}
            <span style="color: #8e8e8e; margin-left: 8px;">${comment.time}</span>
        </div>
    `).join('');
}

// Share post
function sharePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (navigator.share) {
        navigator.share({
            title: `Post by ${post.username}`,
            text: post.caption,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    }
}

// Save post
function savePost(postId) {
    alert('Post saved to your collection!');
}

// Show create post (scroll to top)
function showCreatePost() {
    document.querySelector('.create-post').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('postCaption').focus();
}