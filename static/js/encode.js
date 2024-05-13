function readFile() {
            fetch('/static/txt/positive_finance.txt')
                .then(response => response.text()) // 将响应转换为文本
                .then(data => {
                    document.getElementById('content').textContent = data; // 显示文件内容
                })
                .catch(error => console.error('Error:', error)); // 处理错误
        }
