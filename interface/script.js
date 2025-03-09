// Các thẻ ẩn hiển
       function showSection(sectionId) {
            document.querySelectorAll('.content > div').forEach(div => div.style.display = 'none');
            document.getElementById(sectionId).style.display = 'block';
        }
// log out
function logout() {
    alert("Bạn đã đăng xuất thành công!");
    window.location.href = "../sign_in/sign_in.html"; 
}

function contactSupport() {
    alert("Liên hệ hỗ trợ qua email: support@example.com");
}
document.addEventListener("DOMContentLoaded", function () {
    showSection('home-info'); // Hiển thị Trang chủ khi tải trang
});
/* function showSection(sectionId) {
    const sections = ["home-info", "student-info", "course-list", "teacher-list", "schedule", "registration"];
    sections.forEach(id => {
        document.getElementById(id).style.display = (id === sectionId) ? "block" : "none";
    });
}
*/
