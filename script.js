// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', function() {
    // 欢迎消息
    welcomeMessage();

    // 为导航链接添加平滑滚动效果
    smoothScroll();

    // 为页面添加点击事件
    addClickEvents();
    
    // 初始化视频切换功能
    initVideoToggle();
    initBaojiVideoToggle();
    initPojiVideoToggle();
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
            const href = this.getAttribute('href');
            
            // 如果是外部链接或指向其他HTML文件，不阻止默认行为
            if (href.startsWith('http') || href.startsWith('https') || href.endsWith('.html')) {
                return;
            }
            
            e.preventDefault();
            
            const targetId = href;
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

// 辉跃之力视频切换功能
function initVideoToggle() {
    const videoElement = document.getElementById('huiyueVideo');
    const videoSource = document.getElementById('videoSource');
    const toggleButton = document.getElementById('toggleVideo');
    
    // 检查元素是否存在
    if (!videoElement || !videoSource || !toggleButton) {
        return;
    }
    
    // 视频源数组
    const videoSources = [
        'pz_photo/辉跃之力670.webm',
        'pz_photo/辉跃之力550.webm'
    ];
    
    let currentIndex = 0;
    
    toggleButton.addEventListener('click', function() {
        // 切换到下一个视频源
        currentIndex = (currentIndex + 1) % videoSources.length;
        
        // 更新视频源
        videoSource.src = videoSources[currentIndex];
        
        // 重新加载视频
        videoElement.load();
        
        // 更新按钮文本
        if (currentIndex === 0) {
            toggleButton.innerHTML = '550辉跃之力';
        } else {
            toggleButton.innerHTML = '670辉跃之力';
        }
    });
}

// 暴击之力视频切换功能
function initBaojiVideoToggle() {
    const videoElement = document.getElementById('baojiVideo');
    const videoSource = document.getElementById('baojiSource');
    const toggleButton = document.getElementById('toggleBaojiVideo');
    
    // 检查元素是否存在
    if (!videoElement || !videoSource || !toggleButton) {
        return;
    }
    
    // 视频源数组
    const videoSources = [
        'pz_photo/暴击之力340.webm',
        'pz_photo/暴击之力409.webm'
    ];
    
    let currentIndex = 0;
    
    toggleButton.addEventListener('click', function() {
        // 切换到下一个视频源
        currentIndex = (currentIndex + 1) % videoSources.length;
        
        // 更新视频源
        videoSource.src = videoSources[currentIndex];
        
        // 重新加载视频
        videoElement.load();
        
        // 更新按钮文本
        if (currentIndex === 0) {
            toggleButton.innerHTML = '409暴击之力';
        } else {
            toggleButton.innerHTML = '340暴击之力';
        }
    });
}

// 破击之力视频切换功能
function initPojiVideoToggle() {
    const videoElement = document.getElementById('pojiVideo');
    const videoSource = document.getElementById('pojiSource');
    const toggleButton = document.getElementById('togglePojiVideo');
    
    // 检查元素是否存在
    if (!videoElement || !videoSource || !toggleButton) {
        return;
    }
    
    // 视频源数组
    const videoSources = [
        'pz_photo/破击之力418.webm',
        'pz_photo/破击之力2046.webm'
    ];
    
    let currentIndex = 0;
    
    toggleButton.addEventListener('click', function() {
        // 切换到下一个视频源
        currentIndex = (currentIndex + 1) % videoSources.length;
        
        // 更新视频源
        videoSource.src = videoSources[currentIndex];
        
        // 重新加载视频
        videoElement.load();
        
        // 更新按钮文本
        if (currentIndex === 0) {
            toggleButton.innerHTML = '2046破击之力';
        } else {
            toggleButton.innerHTML = '418破击之力';
        }
    });
}