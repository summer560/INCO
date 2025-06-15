function goToArticle(id) {
  const articleArea = document.getElementById("article-area");
  articleArea.style.display = "block";

  if (id === 1) {
    articleArea.innerHTML = "<h2>D13구역 재개발 착수</h2><p>현장 인근에서 특이한 전자파가 감지되었습니다...</p>";
  } else if (id === 2) {
    articleArea.innerHTML = "<h2>정체불명의 구조물 발견</h2><p>사진을 본 전문가들은 말을 잃었습니다. 내부 탐색은 금지되었지만...</p>";
    document.body.style.backgroundColor = "#111"; // 점점 어두워짐
    document.body.style.color = "#ccc";
  } else if (id === 3) {
    articleArea.innerHTML = "<h2>신형 센서 발표</h2><p>SDA는 이를 통해...</p>";
  }
}
