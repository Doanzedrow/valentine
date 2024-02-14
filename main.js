// Thay đổi nội dung búc thư ở đây
var letterContent =
  "Hôm nay là ngày valentine lời nhắn đầu tiên anh muốn gửi đến em, chúc em có một ngày lễ tình nhân thật là ý nghĩa. Mong rằng em luôn xinh đẹp và tự tin tỏa sáng theo một cách riêng. Chúc em luôn bình an mạnh khỏe vui vẻ và hạnh phúc, đứng cố gắng gồng mình quá nhiều những năm tháng quá em đã vất vả rồi, hãy quên đi những chuyện cũ, trân trọng hiện tại và yêu lấy bản thân mình. Mong rằng em sẽ tìm được một người có thể bảo vệ em và không làm em phải tổn thương nửa. Happy!!";

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50;

// Hiệu ứng gõ chữ

function effectWrite() {
  var boxLetter = document.querySelector(".letterContent");
  letterContentSplited = letterContent.split("");

  letterContentSplited.forEach((val, index) => {
    setTimeout(() => {
      boxLetter.innerHTML += val;
    }, durationWrite * index);
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".container").classList.add("active");
  }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
  document.querySelector(".cardValentine").classList.add("active");
  document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
  cardValentine.classList.toggle("open");

  if (cardValentine.className.indexOf("open") != -1) {
    setTimeout(effectWrite, 500);
  } else {
    setTimeout(() => {
      document.querySelector(".letterContent").innerHTML = "";
    }, 1000);
  }
});
