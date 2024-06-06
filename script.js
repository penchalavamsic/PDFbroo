<script>
    const buttons = document.querySelectorAll('.button');  // Select all buttons

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent.trim() === "Modules") {
                window.location.href = "modules.html";  // Redirect to modules.html
            }
        });
    });
</script>