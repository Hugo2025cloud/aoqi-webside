// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', function() {
    // 欢迎消息
    welcomeMessage();

    // 为导航链接添加平滑滚动效果
    smoothScroll();

    // 为页面添加点击事件
    addClickEvents();
});

// 欢迎消息函数
function welcomeMessage() {
    // 可以选择在控制台输出欢迎消息
    console.log('欢迎访问我的基础网页！');
}

// 平滑滚动函数
function smoothScroll() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // 平滑滚动到目标区域
                window.scrollTo({
                    top: targetSection.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 添加点击事件函数
function addClickEvents() {
    // 为所有段落添加点击效果
    const paragraphs = document.querySelectorAll('p');
    
    paragraphs.forEach((paragraph, index) => {
        paragraph.addEventListener('click', function() {
            console.log(`你点击了第 ${index + 1} 个段落`);
            // 可以添加更多交互效果，比如改变背景色
            this.style.backgroundColor = '#e8f4f8';
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 1000);
        });
    });

    // 为所有标题添加鼠标悬停效果
    const headings = document.querySelectorAll('h2');
    
    headings.forEach(heading => {
        heading.addEventListener('mouseover', function() {
            this.style.color = '#e8491d';
        });
        
        heading.addEventListener('mouseout', function() {
            this.style.color = '#35424a';
        });
    });
}

// 页面滚动时的效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(53, 66, 74, 0.9)';
        header.style.padding = '15px 0';
    } else {
        header.style.backgroundColor = '#35424a';
        header.style.padding = '20px 0';
    }
});