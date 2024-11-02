// Function to open the side menu
function openMenu() {
    document.getElementById('side-menu').classList.add('open');
}


// Function to close the side menu
function closeMenu() {
    document.getElementById('side-menu').classList.remove('open');
}

//function to expand and de-expand the options in the burger menu
function toggleInMenu(elementID) {
    const list = document.getElementById(elementID);
    list.classList.toggle('expanded');
}

// Function to toggle courses list visibility
function toggleCourses(elementID) {
    const coursesList = document.getElementById(elementID);
    coursesList.classList.toggle('active');
}

// Function to toggle videos list visibility
function toggleVideos(elementID) {
    const videosList = document.getElementById(elementID);
    videosList.classList.toggle('active');
}



// Function to toggle the visibility of the topics list
function toggleTopics(elementID) {
    const topicsList = document.getElementById(elementID);
    topicsList.classList.toggle('active'); // Toggle the 'active' class
    
}


// document.addEventListener("DOMContentLoaded", function() {
//     // Ensure the function is accessible globally
//     window.toggleTopics = function(elementID) {
//         const topicsList = document.getElementById(elementID);
//         topicsList.classList.toggle('active'); // Toggle the 'active' class
        
//         // Update button text based on the visibility
//         const buttonText = topicsList.classList.contains('active') ? 'הסתיר נושאים' : 'הצג נושאים';
//         document.querySelector('.toggle-button').textContent = buttonText;
//     };
// });

