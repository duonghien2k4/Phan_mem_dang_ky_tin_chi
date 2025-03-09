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
document.addEventListener("DOMContentLoaded", function () {
    const courseList = document.querySelector(".course-list");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const courseWidth = 300; // Kích thước 1 khóa học (280px + margin)
    let currentIndex = 0;
    const totalCourses = courseList.children.length;
    const visibleCourses = 3;

    function updateSlider() {
        courseList.style.transition = "transform 0.3s ease-in-out";
        courseList.style.transform = `translateX(-${currentIndex * courseWidth}px)`;
    }

    prevBtn.addEventListener("click", function () {
        if (currentIndex === 0) {
            // Nếu đang ở đầu danh sách, nhảy về cuối
            currentIndex = totalCourses - visibleCourses;
            courseList.style.transition = "none"; // Tắt hiệu ứng để nhảy nhanh
            courseList.style.transform = `translateX(-${currentIndex * courseWidth}px)`;
            setTimeout(updateSlider, 50); // Kích hoạt hiệu ứng lại
        } else {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex >= totalCourses - visibleCourses) {
            // Nếu đang ở cuối danh sách, quay lại đầu
            currentIndex = 0;
            courseList.style.transition = "none"; // Tắt hiệu ứng để nhảy nhanh
            courseList.style.transform = `translateX(0)`;
            setTimeout(updateSlider, 50); // Kích hoạt hiệu ứng lại
        } else {
            currentIndex++;
            updateSlider();
        }
    });
});

