let count = 0;

// 为计数按钮绑定点击事件
document.getElementById('countButton').addEventListener('click', function() {
    count++;
    document.getElementById('countDisplay').innerText = '计数: ' + count; // 更新计数显示
});

// 为背景变化按钮绑定点击事件
document.getElementById('bgChangeButton').addEventListener('click', function() {
    // 生成随机颜色
    const randomColor1 = Math.floor(Math.random() * 256);
    const randomColor2 = Math.floor(Math.random() * 256);
    const randomColor3 = Math.floor(Math.random() * 256);
    const randomColor4 = Math.floor(Math.random() * 256);
    
    // 设置随机渐变背景
    document.body.style.background = `linear-gradient(135deg, rgba(${randomColor1}, ${randomColor2}, ${randomColor3}, 1), rgba(${randomColor4}, ${randomColor2}, ${randomColor3}, 1))`;
});