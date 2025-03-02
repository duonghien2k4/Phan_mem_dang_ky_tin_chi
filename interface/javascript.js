        function showSection(sectionId) {
            document.querySelectorAll('.content > div').forEach(div => div.style.display = 'none');
            document.getElementById(sectionId).style.display = 'block';
        }
