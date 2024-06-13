document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(skillBar => {
        const percent = skillBar.querySelector('.skill-percent').getAttribute('data-percent');
        skillBar.querySelector('.outer-circle').style.setProperty('--percent', percent + '%');
    });
});

  // Expandable list functionality
    const expandableHeaders = document.querySelectorAll('.expandable-header');

    expandableHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const maxHeight = content.style.maxHeight;

            // Close all expandable content except the clicked one
            document.querySelectorAll('.expandable-content').forEach(cont => {
                if (cont !== content) {
                    cont.style.maxHeight = null;
                }
            });

            if (maxHeight === '' || maxHeight === '0px') {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });
 
