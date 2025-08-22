// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 添加淡入动画效果
    const sections = document.querySelectorAll('.section');
    setTimeout(() => {
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
            }, index * 200);
        });
    }, 300);
    
    // 可以添加其他交互功能
    console.log('页面加载完成');
});