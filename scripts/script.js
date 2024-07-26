'use strict';

// Manage page title
document.getElementById("title").innerHTML = "Page 1";

// Toggle content visibility
document.querySelectorAll('.title').forEach(title => {
    title.addEventListener('click', () => {
        const allContents = document.querySelectorAll('.content');
        allContents.forEach(content => {
            if (content !== title.nextElementSibling) {
                content.style.display = 'none';
            }
        });

        const content = title.nextElementSibling;
        content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
    });
});

// Manage cookie consent
document.addEventListener('DOMContentLoaded', () => {
    const cookieConsent = document.getElementById('cookie-consent');
    const cookieAcceptButton = document.getElementById('cookie-accept');

    if (!localStorage.getItem('cookies-accepted')) {
        cookieConsent.style.display = 'block';
    }

    cookieAcceptButton.addEventListener('click', () => {
        localStorage.setItem('cookies-accepted', 'true');
        cookieConsent.style.display = 'none';
    });
});

// Dynamic container management
document.addEventListener('DOMContentLoaded', function() {
    const addContainerBtn = document.getElementById('add-container');
    const containerList = document.getElementById('container-list');

    addContainerBtn.addEventListener('click', function() {
        addContainer();
    });

    function addContainer(containerData = { title: '', description: '', image: '' }) {
        const container = document.createElement('div');
        container.className = 'container';
        container.innerHTML = `
            <input type="text" value="${containerData.title}" placeholder="Title" class="container-title" />
            <textarea placeholder="Description" class="container-description">${containerData.description}</textarea>
            <input type="file" class="container-image" accept="image/*" />
            <div class="actions">
                <button onclick="removeContainer(this)">Remove</button>
                <button onclick="moveContainer(this, 'up')">Move Up</button>
                <button onclick="moveContainer(this, 'down')">Move Down</button>
            </div>
        `;
        
        const imageInput = container.querySelector('.container-image');
        imageInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    container.style.backgroundImage = `url(${e.target.result})`;
                };
                reader.readAsDataURL(file);
            }
        });
        
        containerList.appendChild(container);
    }

    window.removeContainer = function(button) {
        const container = button.closest('.container');
        container.remove();
    };

    window.moveContainer = function(button, direction) {
        const container = button.closest('.container');
        if (direction === 'up') {
            const prev = container.previousElementSibling;
            if (prev) {
                containerList.insertBefore(container, prev);
            }
        } else if (direction === 'down') {
            const next = container.nextElementSibling;
            if (next) {
                containerList.insertBefore(next, container);
            }
        }
    };
});

