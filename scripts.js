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



// Add event listener for the burger menu icon
document.querySelector('.burger-icon').addEventListener('click', openMenu);
