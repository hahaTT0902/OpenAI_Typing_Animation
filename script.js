const words = ["TestDocument", "测试文案", "OpenAI", "Typing12347890"];
let currentIndex = 0; // 当前单词在数组中的索引
let currentWord = ''; // 当前正在打印的单词
let isDeleting = false; // 是否正在删除文字

function type() {
  const speed = 200; // 打字速度（毫秒）
  const wordIndex = currentIndex % words.length; // 当前单词的索引
  const fullText = words[wordIndex]; // 获取当前要打印的完整单词

  if (isDeleting) {
    currentWord = fullText.substring(0, currentWord.length - 1); // 如果正在删除，则减少当前单词的长度
  } else {
    currentWord = fullText.substring(0, currentWord.length + 1); // 否则增加当前单词的长度
  }

  document.querySelector('.typing-text').textContent = currentWord; // 更新显示正在打印的文字

  let delta = 200; // 默认间隔为200毫秒

  if (isDeleting) {
    delta /= 2; // 如果正在删除，则缩短间隔时间
  }

  if (!isDeleting && currentWord === fullText) {
    delta = speed; // 如果打印完当前单词，则等待一段时间再删除
    isDeleting = true;
  } else if (isDeleting && currentWord === '') {
    isDeleting = false; // 如果删除完当前单词，则准备打印下一个单词
    currentIndex++;
    delta = 200;
  }

  setTimeout(type, delta); // 设置下一次打印的间隔时间
}

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(type, 500); // 在页面加载完成后开始打印文字
});
