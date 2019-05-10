function main() {
    const main = document.querySelector(".main")
    const burger = document.querySelector(".js-burger")
    const liWithSubnav = document.querySelectorAll(".js-has-subnav")
    const subnav = document.querySelector(".subnav")
    const closeSubnav = document.querySelector(".js-back-button")

    setupEvents()

    function setupEvents() {
        burger.addEventListener("click", function() {
            main.classList.toggle("open")
        })
    
        liWithSubnav.forEach(function(li) {                
            li.addEventListener("click", function(event) {
                revealSubNav(event)
            })
        })      
    
        closeSubnav.addEventListener("click", function() {
            hideSubNav()
        })
    }

    function revealSubNav(event) {            
        // Prevent standard browser functionality when clicking
        event.preventDefault()

        // This grab the clicked element
        let clickedEl = event.currentTarget

        // This grabs the data attribute of the clicked element which contains our target ID
        let subnavId = clickedEl.getAttribute('data-subnav-target-id')

        // We pass the target ID to the function so it can reveal the correct sub nav
        selectActiveSubNav(subnavId)

        // Just grabs the sub nav element into a variable
        const subnav = document.querySelector(".subnav")

        // This is a state class, it shows that subnav is visible
        subnav.classList.add("js-subnav-visible")      
    }

    function selectActiveSubNav (id) {
        // get the group with the same data attribute as the clicked element by taking the id number that's been passed into the function above and using it to select the relevant group based on the group's data attribute.
        const selectedGroup = document.querySelector('[data-subnav-id="' + id + '"]')
        
        // Check if any subnav groups are shown and hide them if they are
        document.querySelectorAll('.js-subnav-group').forEach(function(subNav) {
            let isShown = subNav.classList.contains('js-link-group-show')
            if (isShown) {
                subNav.classList.remove('js-link-group-show')
            }
        })
        
        // Final point of this function - adds the class with display: block; to the selected group.
        selectedGroup.classList.add("js-link-group-show")
    }

    function hideSubNav() {
        subnav.classList.remove("js-subnav-visible")
    }
}        

if (document.readyState !== 'loading') main()
else document.addEventListener('DOMContentLoaded', main)
